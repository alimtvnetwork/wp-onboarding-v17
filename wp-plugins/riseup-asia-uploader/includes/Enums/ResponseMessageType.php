<?php
/**
 * ResponseMessageType — Human-readable Api response messages.
 *
 * @package RiseupAsia\Enums
 * @since   1.58.0
 */

namespace RiseupAsia\Enums;

if (!defined('ABSPATH')) {
    exit;
}

enum ResponseMessageType: string
{
    case Success            = 'Operation completed successfully';
    case Unauthorized       = 'Authentication required';
    case Forbidden          = 'Insufficient permissions';
    case InvalidRequest     = 'Invalid request data';
    case PluginNotFound     = 'Plugin not found';
    case UploadFailed       = 'Upload failed';
    case ActivationFailed   = 'Plugin activation failed';
    case DeactivationFailed = 'Plugin deactivation failed';
    case DeleteFailed       = 'Plugin deletion failed';
    case FileIgnored        = 'File ignored by .uploadignore';
    case InvalidRequestBody = 'Invalid request body';
    case InvalidJsonBody    = 'Invalid or missing Json body';
    case InvalidSnapshotId  = 'Snapshot Id must be a positive integer';
    case ConnectionSuccessful     = 'Connection successful';
    case SnapshotNotFound         = 'Snapshot not found';
    case SnapshotProviderMissing  = 'No snapshot provider available';
    case ProviderMissing          = 'No provider available';
    case SnapshotFileMissing      = 'Snapshot file not found';
    case UploadedFileMissing      = 'Uploaded file not found';
    case ZipCreateFailed          = 'Failed to create Zip file';
    case TempDirCreateFailed      = 'Failed to create temp directory';
    case InvalidFileTypeZip       = 'Invalid file type. Expected Zip file.';
    case MissingPluginSlug        = 'Missing required plugin slug parameter';
    case SelfActionProhibited     = 'Cannot perform this action on the managing plugin itself';
    case DbQueryFailed            = 'Database query failed';

    public function isEqual(self $other): bool { return $this === $other; }
    public function isOtherThan(self $other): bool { return $this !== $other; }
    public function isAnyOf(self ...$others): bool { return in_array($this, $others, true); }

    public function isFailure(): bool
    {
        return $this->isAnyOf(self::Success, self::FileIgnored) === false;
    }
}
