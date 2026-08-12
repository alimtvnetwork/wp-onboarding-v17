<?php
/**
 * UserReadTrait — GET /users and GET /users/{id} handlers.
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
use WP_User_Query;
use RiseupAsia\Helpers\EnvelopeBuilder;

trait UserReadTrait {

    private const PARAM_PAGE = 'page';
    private const PARAM_PER_PAGE = 'per_page';
    private const PARAM_ROLE = 'role';
    private const PARAM_SEARCH = 'search';
    private const PARAM_ID = 'id';

    private const DEFAULT_PAGE = 1;
    private const DEFAULT_PER_PAGE = 20;
    private const MAX_PER_PAGE = 100;

    private const ARG_NUMBER = 'number';
    private const ARG_PAGED = 'paged';
    private const ARG_ORDERBY = 'orderby';
    private const ARG_ORDER = 'order';
    private const ARG_ROLE = 'role';
    private const ARG_SEARCH = 'search';
    private const ARG_SEARCH_COLUMNS = 'search_columns';

    private const ORDERBY_ID = 'Id';
    private const ORDER_ASC = 'ASC';

    private const WILDCARD = '*';

    private const COLUMN_USER_LOGIN = 'user_login';
    private const COLUMN_USER_EMAIL = 'user_email';
    private const COLUMN_DISPLAY_NAME = 'display_name';

    /**
     * Handle GET /users — list users with pagination.
     */
    public function handleListUsers(WP_REST_Request $request): WP_REST_Response
    {
        $this->fileLogger->info('User endpoint accessed', ['endpoint' => 'GET /users']);

        return $this->safeExecute(function () use ($request) {
            $page    = (int) ($request->get_param(self::PARAM_PAGE) ?: self::DEFAULT_PAGE);
            $perPage = (int) ($request->get_param(self::PARAM_PER_PAGE) ?: self::DEFAULT_PER_PAGE);
            $role    = $request->get_param(self::PARAM_ROLE) ?: '';
            $search  = $request->get_param(self::PARAM_SEARCH) ?: '';

            $isPerPageTooHigh = ($perPage > self::MAX_PER_PAGE);

            if ($isPerPageTooHigh) {
                $perPage = self::MAX_PER_PAGE;
            }

            $queryArgs = [
                self::ARG_NUMBER  => $perPage,
                self::ARG_PAGED   => $page,
                self::ARG_ORDERBY => self::ORDERBY_ID,
                self::ARG_ORDER   => self::ORDER_ASC,
            ];

            $hasRole = ($role !== '');

            if ($hasRole) {
                $queryArgs[self::ARG_ROLE] = sanitize_text_field($role);
            }

            $hasSearch = ($search !== '');

            if ($hasSearch) {
                $queryArgs[self::ARG_SEARCH] = self::WILDCARD . sanitize_text_field($search) . self::WILDCARD;
                $queryArgs[self::ARG_SEARCH_COLUMNS] = [
                    self::COLUMN_USER_LOGIN,
                    self::COLUMN_USER_EMAIL,
                    self::COLUMN_DISPLAY_NAME,
                ];
            }

            $userQuery = new WP_User_Query($queryArgs);
            $users = $userQuery->get_results();
            $total = $userQuery->get_total();

            $results = array_map(
                fn($user) => $this->mapUserToSummary($user),
                $users,
            );

            $this->fileLogger->info('Users listed', [
                'total' => $total,
                'page'  => $page,
                'count' => count($results),
            ]);

            return EnvelopeBuilder::success('Users retrieved')
                ->setResults($results)
                ->setPagination($total, $perPage, $page)
                ->autoDetectRequestedAt()
                ->setDelegatedAt(home_url())
                ->toResponse();
        }, 'handleListUsers');
    }

    /**
     * Handle GET /users/{id} — get single user with all fields.
     */
    public function handleGetUser(WP_REST_Request $request): WP_REST_Response
    {
        $userId = (int) $request->get_param(self::PARAM_ID);
        $this->fileLogger->info('User endpoint accessed', ['endpoint' => 'GET /users/{id}', 'userId' => $userId]);

        return $this->safeExecute(function () use ($userId) {
            $user = get_userdata($userId);
            $isUserMissing = ($user === false);

            if ($isUserMissing) {
                $this->fileLogger->warn('User not found', ['userId' => $userId]);

                return EnvelopeBuilder::error('User not found', 404)
                    ->autoDetectRequestedAt()
                    ->setDelegatedAt(home_url())
                    ->toResponse();
            }

            $result = $this->mapUserToResponse($user);

            return EnvelopeBuilder::success('User retrieved')
                ->setSingleResult($result)
                ->autoDetectRequestedAt()
                ->setDelegatedAt(home_url())
                ->toResponse();
        }, 'handleGetUser');
    }
}
