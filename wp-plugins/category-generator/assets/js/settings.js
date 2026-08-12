jQuery(document).ready(function($) {
    const RESET_CONFIRM_TEXT = cgAdmin.constants.RESET_CONFIRM_TEXT;
    const NOTICE_DURATION = cgAdmin.constants.NOTICE_DURATION;
    
    // Tab switching
    $('.' + cgAdmin.css.layout.tab).on('click', function() {
        const tab = $(this).data('tab');
        $('.' + cgAdmin.css.layout.tab).removeClass('active');
        $(this).addClass('active');
        $('.' + cgAdmin.css.layout.tabContent).removeClass('active');
        $('#tab-' + tab).addClass('active');
    });
    
    // AI Provider switching
    $('#ai_provider').on('change', function() {
        const provider = $(this).val();
        $('.cg-ai-provider-config').hide();
        $('#ai-config-' + provider).show();
    });
    
    // Save settings
    $('#cg-settings-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = $(this).serializeArray();
        const data = {
            action: cgAdmin.constants.AJAX_SAVE_SETTINGS,
            nonce: cgAdmin.nonce
        };
        
        formData.forEach(function(item) {
            data[item.name] = item.value;
        });
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: data,
            success: function(response) {
                if (response.success) {
                    const $notice = $('<div class="cg-save-notice">✓ ' + cgAdmin.strings.settingsSaved + '</div>');
                    $('body').append($notice);
                    setTimeout(function() { $notice.fadeOut(300, function() { $(this).remove(); }); }, NOTICE_DURATION);
                } else {
                    alert(response.data.message || cgAdmin.strings.errorSavingSettings);
                }
            }
        });
    });
    
    // Add new Api
    $('#cg-add-api-btn').on('click', function() {
        const name = $('#new_api_name').val().trim();
        const url = $('#new_api_url').val().trim();
        const key = $('#new_api_key').val();
        
        if (!name || !url) {
            alert(cgAdmin.strings.enterApiNameUrl);
            return;
        }
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: cgAdmin.constants.AJAX_ADD_REMOTE_API,
                nonce: cgAdmin.nonce,
                name: name,
                url: url,
                api_key: key
            },
            success: function(response) {
                if (response.success) {
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.errorAddingApi);
                }
            }
        });
    });
    
    // Import from Api
    $(document).on('click', '.cg-import-from-api', function() {
        const apiId = $(this).data('id');
        const $btn = $(this);
        
        $btn.prop('disabled', true).text(cgAdmin.strings.importing);
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: cgAdmin.constants.AJAX_IMPORT_REMOTE,
                nonce: cgAdmin.nonce,
                api_id: apiId
            },
            success: function(response) {
                $btn.prop('disabled', false).text(cgAdmin.strings.importTemplates);
                if (response.success) {
                    alert(cgAdmin.strings.imported + ' ' + response.data.count + ' ' + cgAdmin.strings.templatesSuccessfully);
                } else {
                    alert(response.data.message || cgAdmin.strings.importFailed);
                }
            }
        });
    });
    
    // Delete Api
    $(document).on('click', '.cg-delete-api', function() {
        if (!confirm(cgAdmin.strings.confirmDeleteApi)) return;
        
        const apiId = $(this).data('id');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: cgAdmin.constants.AJAX_DELETE_REMOTE_API,
                nonce: cgAdmin.nonce,
                api_id: apiId
            },
            success: function(response) {
                if (response.success) {
                    location.reload();
                }
            }
        });
    });
    
    // Export before reset
    $('#cg-export-before-reset').on('click', function() {
        window.location.href = cgAdmin.ajaxUrl + '?action=' + cgAdmin.constants.AJAX_EXPORT_DATA + '&nonce=' + cgAdmin.nonce + '&type=all';
    });
    
    // Download database
    $('#cg-download-db-btn').on('click', function() {
        window.location.href = cgAdmin.ajaxUrl + '?action=' + cgAdmin.constants.AJAX_DOWNLOAD_DATABASE + '&nonce=' + cgAdmin.nonce;
    });
    
    // Open restore modal
    $('#cg-restore-db-btn').on('click', function() {
        $('#cg-restore-file').val('');
        $('#cg-restore-file-info').hide();
        $('#cg-confirm-restore-btn').prop('disabled', true);
        $('#' + cgAdmin.ids.settingsRestoreModal).fadeIn(200);
    });
    
    // Handle file selection for restore
    $('#cg-restore-file').on('change', function() {
        const file = this.files[0];
        if (file) {
            $('#cg-restore-filename').text(file.name);
            $('#cg-restore-filesize').text((file.size / 1024).toFixed(2) + ' KB');
            $('#cg-restore-file-info').show();
            $('#cg-confirm-restore-btn').prop('disabled', false);
        } else {
            $('#cg-restore-file-info').hide();
            $('#cg-confirm-restore-btn').prop('disabled', true);
        }
    });
    
    // Confirm restore
    $('#cg-confirm-restore-btn').on('click', function() {
        const file = $('#cg-restore-file')[0].files[0];
        if (!file) return;
        
        const formData = new FormData();
        formData.append('action', cgAdmin.constants.AJAX_RESTORE_DATABASE);
        formData.append('nonce', cgAdmin.nonce);
        formData.append('database_file', file);
        
        $(this).prop('disabled', true).text(cgAdmin.strings.restoring);
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    alert(cgAdmin.strings.dbRestored);
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.errorRestoringDb);
                    $('#cg-confirm-restore-btn').prop('disabled', false).text(cgAdmin.strings.restoreDatabase);
                }
            }
        });
    });
    
    // Reset database modal
    $('#cg-reset-database-btn').on('click', function() {
        $('#cg-reset-confirm-text').val('');
        $('#cg-confirm-reset-btn').prop('disabled', true);
        $('#' + cgAdmin.ids.settingsResetModal).fadeIn(200);
    });
    
    // Enable reset button when correct text is typed
    $('#cg-reset-confirm-text').on('input', function() {
        const isValid = $(this).val().toUpperCase() === RESET_CONFIRM_TEXT;
        $('#cg-confirm-reset-btn').prop('disabled', !isValid);
    });
    
    // Confirm reset
    $('#cg-confirm-reset-btn').on('click', function() {
        const exportFirst = $('#cg-export-before-confirm').is(':checked');
        
        if (exportFirst) {
            window.location.href = cgAdmin.ajaxUrl + '?action=' + cgAdmin.constants.AJAX_EXPORT_DATA + '&nonce=' + cgAdmin.nonce + '&type=all';
        }
        
        $(this).prop('disabled', true).text(cgAdmin.strings.resetting);
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: cgAdmin.constants.AJAX_RESET_DATABASE,
                nonce: cgAdmin.nonce
            },
            success: function(response) {
                if (response.success) {
                    alert(cgAdmin.strings.dbReset);
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.errorResettingDb);
                    $('#cg-confirm-reset-btn').prop('disabled', false).text(cgAdmin.strings.yesResetEverything);
                }
            }
        });
    });
    
    // Close modals
    $('.' + cgAdmin.css.modal.close).on('click', function() {
        $(this).closest('.' + cgAdmin.css.modal.base).fadeOut(200);
    });
    
    $('.' + cgAdmin.css.modal.base).on('click', function(e) {
        if (e.target === this) {
            $(this).fadeOut(200);
        }
    });
});
