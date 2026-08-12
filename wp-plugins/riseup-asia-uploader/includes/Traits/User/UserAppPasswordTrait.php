<?php
/**
 * UserAppPasswordTrait — App password create/revoke handlers.
 *
 * @package RiseupAsia\Traits\User
 * @since   2.13.0
 */

namespace RiseupAsia\Traits\User;

if (!defined('ABSPATH')) {
    exit;
}

use WP_REST_Request;
use WP_REST_Response;
use WP_Application_Passwords;
use RiseupAsia\Helpers\EnvelopeBuilder;
use RiseupAsia\Enums\HttpStatusType;
use RiseupAsia\Enums\ResponseKeyType;

trait UserAppPasswordTrait {

    private const MSG_INVALID_BODY = 'Invalid or missing Json body';
    private const DEFAULT_APP_NAME = 'Api Access';
    private const MSG_USER_ID_REQUIRED = 'UserId is required';
    private const MSG_USER_NOT_FOUND = 'User not found';
    private const MSG_CREATE_FAILED = 'App password creation failed: ';
    private const MSG_CREATE_SUCCESS = 'Application password created';

    private const MSG_REVOKE_MISSING = 'UserId and Uuid are required';
    private const MSG_REVOKE_FAILED = 'Revocation failed: ';
    private const MSG_REVOKE_SUCCESS = 'Application password revoked';

    private const WP_ARGS_NAME = 'name';
    private const WP_RES_UUID = 'uuid';
    private const KEY_PASSWORD = 'Password';

    /**
     * Handle POST /users/app-password — create an application password.
     */
    public function handleCreateAppPass(WP_REST_Request $request): WP_REST_Response
    {
        $this->fileLogger->info('User endpoint accessed', ['endpoint' => 'POST /users/app-password']);

        return $this->safeExecute(function () use ($request) {
            $body = $this->extractValidBody($request);
            $isBodyInvalid = ($body === null);

            if ($isBodyInvalid) {
                return $this->validationError(self::MSG_INVALID_BODY, $request);
            }

            $userId = (int) ($body[ResponseKeyType::UserId->value] ?? 0);
            $name   = sanitize_text_field($body[ResponseKeyType::Name->value] ?? self::DEFAULT_APP_NAME);

            $isUserIdMissing = ($userId <= 0);

            if ($isUserIdMissing) {
                return EnvelopeBuilder::error(self::MSG_USER_ID_REQUIRED, HttpStatusType::BadRequest->value)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $user = get_userdata($userId);
            $isUserNotFound = ($user === false);

            if ($isUserNotFound) {
                return EnvelopeBuilder::error(self::MSG_USER_NOT_FOUND, HttpStatusType::NotFound->value)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $result = WP_Application_Passwords::create_new_application_password(
                $userId,
                [self::WP_ARGS_NAME => $name],
            );

            $isError = is_wp_error($result);

            if ($isError) {
                $this->fileLogger->error('App password creation failed', [
                    'userId' => $userId,
                    'error'  => $result->get_error_message(),
                ]);

                return EnvelopeBuilder::error(self::MSG_CREATE_FAILED . $result->get_error_message(), HttpStatusType::BadRequest->value)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $this->fileLogger->info('App password created', [
                'userId' => $userId,
                'name'   => $name,
                'by'     => wp_get_current_user()->user_login,
            ]);

            return EnvelopeBuilder::success(self::MSG_CREATE_SUCCESS, HttpStatusType::Created->value)
                ->setSingleResult([
                    ResponseKeyType::UserId->value => $userId,
                    ResponseKeyType::Name->value   => $name,
                    self::KEY_PASSWORD             => $result[0],
                    ResponseKeyType::Uuid->value   => $result[1][self::WP_RES_UUID],
                ])
                ->autoDetectRequestedAt()
                ->setDelegatedAt(home_url())
                ->toResponse();
        }, 'handleCreateAppPass');
    }

    /**
     * Handle DELETE /users/app-password — revoke an application password.
     */
    public function handleRevokeAppPass(WP_REST_Request $request): WP_REST_Response
    {
        $this->fileLogger->info('User endpoint accessed', ['endpoint' => 'DELETE /users/app-password']);

        return $this->safeExecute(function () use ($request) {
            $body = $this->extractValidBody($request);
            $isBodyInvalid = ($body === null);

            if ($isBodyInvalid) {
                return $this->validationError(self::MSG_INVALID_BODY, $request);
            }

            $userId = (int) ($body[ResponseKeyType::UserId->value] ?? 0);
            $uuid   = sanitize_text_field($body[ResponseKeyType::Uuid->value] ?? '');

            $isMissing = ($userId <= 0 || empty($uuid));

            if ($isMissing) {
                return EnvelopeBuilder::error(self::MSG_REVOKE_MISSING, HttpStatusType::BadRequest->value)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $deleted = WP_Application_Passwords::delete_application_password($userId, $uuid);
            $isError = is_wp_error($deleted);

            if ($isError) {
                $this->fileLogger->error('App password revocation failed', [
                    'userId' => $userId,
                    'uuid'   => $uuid,
                    'error'  => $deleted->get_error_message(),
                ]);

                return EnvelopeBuilder::error(self::MSG_REVOKE_FAILED . $deleted->get_error_message(), HttpStatusType::BadRequest->value)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $this->fileLogger->info('App password revoked', [
                'userId' => $userId,
                'uuid'   => $uuid,
                'by'     => wp_get_current_user()->user_login,
            ]);

            return EnvelopeBuilder::success(self::MSG_REVOKE_SUCCESS)
                ->setSingleResult([ResponseKeyType::Revoked->value => true])
                ->autoDetectRequestedAt()
                ->setDelegatedAt(home_url())
                ->toResponse();
        }, 'handleRevokeAppPass');
    }
}
