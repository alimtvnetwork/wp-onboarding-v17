<?php
/**
 * MachineApprovalTrait — Remote machine approval via Rest Api.
 *
 * PUT /machines/approve: Adds a machine name to the approved_machines list
 * stored in the WordPress option, without requiring plugin redeployment.
 *
 * @package RiseupAsia\Traits\Machine
 * @since   2.17.0
 */

namespace RiseupAsia\Traits\Machine;

if (!defined('ABSPATH')) {
    exit;
}

use WP_REST_Request;
use WP_REST_Response;

use RiseupAsia\Enums\HttpStatusType;
use RiseupAsia\Enums\PluginConfigType;
use RiseupAsia\Enums\ResponseKeyType;

trait MachineApprovalTrait
{
    private const KEY_MACHINE           = 'machine';
    private const KEY_APPROVED_MACHINES = 'approved_machines';
    private const KEY_ALREADY_APPROVED  = 'already_approved';
    private const KEY_CODE              = 'code';
    private const ERR_MACHINE_MISSING   = 'machine_name_missing';
    private const MSG_INVALID_BODY      = 'Invalid or missing Json body';
    private const MSG_MACHINE_MISSING   = 'Machine name is required in request body';

    /**
     * Handle PUT /machines/approve — add a machine to the approved list.
     *
     * Expects Json body: { "machine": "MACHINE-NAME" }
     * Stores in WP option: {settings_group}.approved_machines[]
     */
    public function handleApproveMachine(WP_REST_Request $request): WP_REST_Response
    {
        return $this->safeExecute(function () use ($request) {
            $body = $this->extractValidBody($request);
            $isBodyInvalid = ($body === null);

            if ($isBodyInvalid) {
                return $this->validationError(self::MSG_INVALID_BODY, $request);
            }

            $machineName = trim($body[self::KEY_MACHINE] ?? '');
            $isMachineEmpty = ($machineName === '');

            if ($isMachineEmpty) {
                return new WP_REST_Response(
                    [
                        ResponseKeyType::Success->value => false,
                        ResponseKeyType::Error->value   => self::MSG_MACHINE_MISSING,
                        self::KEY_CODE                  => self::ERR_MACHINE_MISSING,
                    ],
                    HttpStatusType::BadRequest->value,
                );
            }

            $settingsKey = PluginConfigType::SettingsGroup->value;
            $settings = get_option($settingsKey, []);
            $approvedMachines = $settings[self::KEY_APPROVED_MACHINES] ?? [];

            // Check if already approved (case-insensitive)
            $lowerMachine = strtolower($machineName);
            $isAlreadyApproved = false;

            foreach ($approvedMachines as $existing) {
                if (strtolower($existing) === $lowerMachine) {
                    $isAlreadyApproved = true;
                    break;
                }
            }

            if ($isAlreadyApproved) {
                return new WP_REST_Response(
                    [
                        ResponseKeyType::Success->value => true,
                        ResponseKeyType::Message->value => "Machine '$machineName' is already approved",
                        self::KEY_MACHINE               => $machineName,
                        self::KEY_APPROVED_MACHINES     => $approvedMachines,
                        self::KEY_ALREADY_APPROVED      => true,
                    ],
                    HttpStatusType::Ok->value,
                );
            }

            $approvedMachines[] = $machineName;
            $settings[self::KEY_APPROVED_MACHINES] = $approvedMachines;
            update_option($settingsKey, $settings);

            $this->fileLogger->info('Machine approved remotely', [
                self::KEY_MACHINE           => $machineName,
                self::KEY_APPROVED_MACHINES => $approvedMachines,
            ]);

            return new WP_REST_Response(
                [
                    ResponseKeyType::Success->value => true,
                    ResponseKeyType::Message->value => "Machine '$machineName' approved successfully",
                    self::KEY_MACHINE               => $machineName,
                    self::KEY_APPROVED_MACHINES     => $approvedMachines,
                ],
                HttpStatusType::Ok->value,
            );
        }, 'handleApproveMachine');
    }
}
