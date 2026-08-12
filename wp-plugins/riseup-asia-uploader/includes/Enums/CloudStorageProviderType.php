<?php
/**
 * CloudStorageProviderType — Cloud storage provider identifiers.
 *
 * @package RiseupAsia\Enums
 * @since   2.15.0
 */

namespace RiseupAsia\Enums;

if (!defined('ABSPATH')) {
    exit;
}

enum CloudStorageProviderType: string
{
    case GitHub      = 'GitHub';
    case GitLab      = 'GitLab';
    case GoogleDrive = 'GoogleDrive';

    public function isEqual(self $other): bool { return $this === $other; }
    public function isOtherThan(self $other): bool { return $this !== $other; }
    public function isAnyOf(self ...$others): bool { return in_array($this, $others, true); }

    public function isGitHub(): bool      { return $this->isEqual(self::GitHub); }
    public function isGitLab(): bool      { return $this->isEqual(self::GitLab); }
    public function isGoogleDrive(): bool { return $this->isEqual(self::GoogleDrive); }

    /** Whether this provider uses OAuth2 flow (redirect-based). */
    public function isOAuth2(): bool { return $this->isGoogleDrive(); }

    /** Whether this provider uses a Personal Access Token. */
    public function isPat(): bool { return $this->isGitHub() || $this->isGitLab(); }

    public const API_URL_GITHUB = 'https://api.github.com';
    public const API_URL_GITLAB = 'https://gitlab.com/api/v4';
    public const API_URL_GOOGLE_DRIVE = 'https://www.googleapis.com/drive/v3';

    public const LABEL_GITHUB = 'GitHub';
    public const LABEL_GITLAB = 'GitLab';
    public const LABEL_GOOGLE_DRIVE = 'Google Drive';

    /** Api base Url for this provider. */
    public function apiBaseUrl(): string
    {
        return match($this) {
            self::GitHub      => self::API_URL_GITHUB,
            self::GitLab      => self::API_URL_GITLAB,
            self::GoogleDrive => self::API_URL_GOOGLE_DRIVE,
        };
    }

    /** Display label for UI. */
    public function label(): string
    {
        return match($this) {
            self::GitHub      => self::LABEL_GITHUB,
            self::GitLab      => self::LABEL_GITLAB,
            self::GoogleDrive => self::LABEL_GOOGLE_DRIVE,
        };
    }
}
