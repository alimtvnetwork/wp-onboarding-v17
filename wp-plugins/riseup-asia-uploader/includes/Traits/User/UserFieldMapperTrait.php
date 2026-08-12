<?php
/**
 * UserFieldMapperTrait — Maps WP_User to Json response structure.
 *
 * @package RiseupAsia\Traits\User
 * @since   2.13.0
 */

namespace RiseupAsia\Traits\User;

if (!defined('ABSPATH')) {
    exit;
}

use WP_User;

trait UserFieldMapperTrait {

    private const META_FIRST_NAME = 'first_name';
    private const META_LAST_NAME = 'last_name';
    private const META_NICKNAME = 'nickname';
    private const META_DESCRIPTION = 'description';
    private const ROLE_SUBSCRIBER = 'subscriber';

    /**
     * Build full user response [for single GET].
     */
    private function mapUserToResponse(WP_User $user): array
    {
        $roles = $user->roles;
        $primaryRole = count($roles) > 0 ? reset($roles) : self::ROLE_SUBSCRIBER;

        $response = [
            'Id'           => $user->id,
            'Username'     => $user->user_login,
            'Email'        => $user->user_email,
            'FirstName'    => (string) get_user_meta($user->id, self::META_FIRST_NAME, true),
            'LastName'     => (string) get_user_meta($user->id, self::META_LAST_NAME, true),
            'DisplayName'  => $user->display_name,
            'Nickname'     => (string) get_user_meta($user->id, self::META_NICKNAME, true),
            'Website'      => $user->user_url,
            'Bio'          => (string) get_user_meta($user->id, self::META_DESCRIPTION, true),
            'Role'         => $primaryRole,
            'RegisteredAt' => $user->user_registered,
            'Social'       => $this->readSocialMeta($user->id),
        ];

        $yoast = $this->readYoastMeta($user->id);
        $hasYoast = ($yoast !== null);

        if ($hasYoast === true) {
            $response['Yoast'] = $yoast;
        }

        return $response;
    }

    /**
     * Build summary user response [for list].
     */
    private function mapUserToSummary(WP_User $user): array
    {
        $roles = $user->roles;
        $primaryRole = count($roles) > 0 ? reset($roles) : self::ROLE_SUBSCRIBER;

        return [
            'Id'           => $user->id,
            'Username'     => $user->user_login,
            'Email'        => $user->user_email,
            'DisplayName'  => $user->display_name,
            'Role'         => $primaryRole,
            'RegisteredAt' => $user->user_registered,
        ];
    }
}
