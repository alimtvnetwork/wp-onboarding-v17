jQuery(document).ready(function($) {
    // Constants from PHP
    var CG_CONST = cgAdmin.constants;
    var CG_CSS = cgAdmin.css;
    var CG_IDS = cgAdmin.ids;
    
    var restoreSnapshotId = null;
    
    // Create snapshot
    $('#' + cgAdmin.ids.snapshot.createBtn).on('click', function() {
        var title = $('#' + cgAdmin.ids.snapshot.title).val().trim();
        var notes = $('#' + cgAdmin.ids.snapshot.notes).val().trim();
        
        if (!title) {
            alert(cgAdmin.strings.enterSnapshotNameAlert);
            $('#' + cgAdmin.ids.snapshot.title).focus();
            return;
        }
        
        var $btn = $(this);
        $btn.prop('disabled', true).html('<span class="dashicons dashicons-update spin"></span> ' + cgAdmin.strings.creating);
        
        $.post(cgAdmin.ajaxUrl, {
            action: cgAdmin.constants.AJAX_CREATE_SNAPSHOT,
            nonce: cgAdmin.nonce,
            title: title,
            notes: notes,
            type: cgAdmin.constants.SNAPSHOT_TYPE_MANUAL
        }, function(response) {
            if (response.success) {
                alert(cgAdmin.strings.snapshotCreated);
                location.reload();
            } else {
                alert(response.data.message || cgAdmin.strings.failedCreateSnapshot);
            }
        }).fail(function() {
            alert(cgAdmin.strings.requestFailedAgain);
        }).always(function() {
            $btn.prop('disabled', false).html('<span class="dashicons dashicons-camera"></span> ' + cgAdmin.strings.takeSnapshot);
        });
    });
    
    // Restore snapshot - open modal
    $('.' + cgAdmin.css.snapshot.restore).on('click', function() {
        restoreSnapshotId = $(this).data('id');
        var title = $(this).closest('tr').find('.column-title strong').text() || $(this).closest('tr').find('td:first strong').text();
        $('#' + cgAdmin.ids.snapshot.restoreTitle).text(title);
        $('#' + cgAdmin.ids.snapshot.restoreModal).show();
    });
    
    // Confirm restore
    $('#' + cgAdmin.ids.snapshot.confirmRestoreBtn).on('click', function() {
        var $btn = $(this);
        var createBackup = $('#' + cgAdmin.ids.snapshot.beforeRestore).is(':checked');
        
        $btn.prop('disabled', true).text(cgAdmin.strings.restoring);
        
        $.post(cgAdmin.ajaxUrl, {
            action: cgAdmin.constants.AJAX_RESTORE_SNAPSHOT,
            nonce: cgAdmin.nonce,
            snapshot_id: restoreSnapshotId,
            create_backup: createBackup ? 1 : 0
        }, function(response) {
            if (response.success) {
                alert(response.data.message || cgAdmin.strings.snapshotRestoredSuccessfully);
                $('#' + cgAdmin.ids.snapshot.restoreModal).hide();
                if (createBackup) {
                    location.reload();
                }
            } else {
                alert(response.data.message || cgAdmin.strings.failedRestoreSnapshot);
            }
        }).fail(function() {
            alert(cgAdmin.strings.requestFailedAgain);
        }).always(function() {
            $btn.prop('disabled', false).text(cgAdmin.strings.restoreSnapshot);
        });
    });
    
    // Download snapshot
    $('.' + cgAdmin.css.snapshot.download).on('click', function() {
        var snapshotId = $(this).data('id');
        window.location.href = cgAdmin.ajaxUrl + '?action=' + cgAdmin.constants.AJAX_DOWNLOAD_SNAPSHOT + '&nonce=' + cgAdmin.nonce + '&snapshot_id=' + snapshotId;
    });
    
    // Delete snapshot
    $('.' + cgAdmin.css.snapshot.delete).on('click', function() {
        if (!confirm(cgAdmin.strings.confirmDeleteSnapshot)) {
            return;
        }
        
        var $btn = $(this);
        var snapshotId = $btn.data('id');
        var $row = $btn.closest('tr');
        
        $btn.prop('disabled', true);
        
        $.post(cgAdmin.ajaxUrl, {
            action: cgAdmin.constants.AJAX_DELETE_SNAPSHOT,
            nonce: cgAdmin.nonce,
            snapshot_id: snapshotId
        }, function(response) {
            if (response.success) {
                $row.fadeOut(CG_CONST.ANIMATION_FADE_DURATION, function() { $(this).remove(); });
            } else {
                alert(response.data.message || cgAdmin.strings.failedDeleteSnapshot);
                $btn.prop('disabled', false);
            }
        }).fail(function() {
            alert(cgAdmin.strings.requestFailedAgain);
            $btn.prop('disabled', false);
        });
    });
    
    // Modal close
    $('.' + cgAdmin.css.modal.close).on('click', function() {
        $(this).closest('.' + cgAdmin.css.modal.base).hide();
    });
});
