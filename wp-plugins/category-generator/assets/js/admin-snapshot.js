jQuery(document).ready(function($) {
    // Constants from PHP
    var CG_CONST = cgAdmin.constants;
    var CG_CSS = cgAdmin.css;
    var CG_IDS = cgAdmin.ids;
    
    // Quick Snapshot
    $('#' + cgAdmin.ids.quickSnapshot.btn).on('click', function() {
        var name = $('#' + cgAdmin.ids.quickSnapshot.name).val().trim();
        if (!name) {
            name = 'Quick snapshot - ' + new Date().toLocaleString();
        }
        
        var $btn = $(this);
        $btn.prop('disabled', true).find('.dashicons').removeClass('dashicons-camera').addClass('dashicons-update spin');
        
        $.post(cgAdmin.ajaxUrl, {
            action: cgAdmin.ajax.createSnapshot,
            nonce: cgAdmin.nonce,
            title: name,
            notes: cgAdmin.strings.createdFromGenerate,
            type: cgAdmin.constants.typeManual
        }, function(response) {
            if (response.success) {
                $('#' + cgAdmin.ids.quickSnapshot.name).val('');
                // Add to dropdown
                var option = '<option value="' + response.data.snapshot_id + '">' + 
                    new Date().toLocaleDateString() + ' - ' + name + '</option>';
                $('#' + cgAdmin.ids.quickSnapshot.restoreSelect + ' option:first').after(option);
                alert(cgAdmin.strings.snapshotCreated);
            } else {
                alert(response.data.message || cgAdmin.strings.failedCreateSnapshot);
            }
        }).fail(function() {
            alert(cgAdmin.strings.requestFailed);
        }).always(function() {
            $btn.prop('disabled', false).find('.dashicons').removeClass('dashicons-update spin').addClass('dashicons-camera');
        });
    });
    
    // Quick Restore
    $('#' + cgAdmin.ids.quickSnapshot.restoreSelect).on('change', function() {
        var snapshotId = $(this).val();
        if (!snapshotId) return;
        
        if (!confirm(cgAdmin.strings.confirmRestore)) {
            $(this).val('');
            return;
        }
        
        $.post(cgAdmin.ajaxUrl, {
            action: cgAdmin.ajax.restoreSnapshot,
            nonce: cgAdmin.nonce,
            snapshot_id: snapshotId,
            create_backup: 1
        }, function(response) {
            if (response.success) {
                alert(response.data.message || cgAdmin.strings.snapshotRestored);
            } else {
                alert(response.data.message || cgAdmin.strings.failedRestoreSnapshot);
            }
        }).fail(function() {
            alert(cgAdmin.strings.requestFailed);
        });
        
        $(this).val('');
    });
    
    // Auto-snapshot toggle
    $('#' + cgAdmin.ids.quickSnapshot.autoToggle).on('change', function() {
        var enabled = $(this).is(':checked') ? '1' : '0';
        
        var data = {
            action: cgAdmin.ajax.saveSettings,
            nonce: cgAdmin.nonce
        };
        data[cgAdmin.constants.settingAutoSnapshot] = enabled;
        
        $.post(cgAdmin.ajaxUrl, data);
    });
});
