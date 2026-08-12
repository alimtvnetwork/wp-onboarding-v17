jQuery(document).ready(function($) {
    // Filter by type
    $('#cg-filter-type').on('change', function() {
        const type = $(this).val();
        $('#inner-templates-body tr').each(function() {
            if (!type || $(this).data('type') === type) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // Search filter
    $('#cg-filter-search').on('input', function() {
        const search = $(this).val().toLowerCase();
        $('#inner-templates-body tr').each(function() {
            const text = $(this).text().toLowerCase();
            $(this).toggle(text.includes(search));
        });
    });
    
    // Open modal for new template
    $('#cg-add-inner-template').on('click', function() {
        $('#cg-inner-modal-title').text(cgAdmin.strings.addInnerTemplate);
        $('#cg-inner-form')[0].reset();
        $('#inner-id').val(0);
        $('#cg-inner-modal').show();
    });
    
    // Close modal
    $('.cg-modal-close, #cg-inner-cancel').on('click', function() {
        $('#cg-inner-modal').hide();
    });
    
    // Edit template
    $(document).on('click', '.cg-edit-inner', function() {
        const id = $(this).data('id');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: { action: 'cg_get_inner_template', nonce: cgAdmin.nonce, id: id },
            success: function(response) {
                if (response.success) {
                    const t = response.data;
                    $('#cg-inner-modal-title').text(cgAdmin.strings.editInnerTemplate);
                    $('#inner-id').val(t.id);
                    $('#inner-name').val(t.name);
                    $('#inner-name-id').val(t.name_id);
                    $('#inner-type').val(t.type);
                    $('#inner-category').val(t.category || '');
                    $('#inner-content').val(t.content);
                    $('#cg-inner-modal').show();
                }
            }
        });
    });
    
    // Clone template
    $(document).on('click', '.cg-clone-inner', function() {
        const id = $(this).data('id');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: { action: 'cg_clone_inner_template', nonce: cgAdmin.nonce, id: id },
            success: function(response) {
                if (response.success) {
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.cloneFailed);
                }
            }
        });
    });
    
    // Delete template
    $(document).on('click', '.cg-delete-inner', function() {
        if (!confirm(cgAdmin.strings.confirmDeleteTemplate)) return;
        
        const id = $(this).data('id');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: { action: 'cg_delete_inner_template', nonce: cgAdmin.nonce, id: id },
            success: function(response) {
                if (response.success) {
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.errorDeletingTemplate);
                }
            }
        });
    });
    
    // Save template
    $('#cg-inner-save').on('click', function() {
        const data = {
            action: 'cg_save_inner_template',
            nonce: cgAdmin.nonce,
            id: $('#inner-id').val(),
            name: $('#inner-name').val(),
            name_id: $('#inner-name-id').val(),
            type: $('#inner-type').val(),
            category: $('#inner-category').val(),
            content: $('#inner-content').val()
        };
        
        if (!data.name || !data.name_id || !data.content) {
            alert(cgAdmin.strings.fillRequiredFields);
            return;
        }
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: data,
            success: function(response) {
                if (response.success) {
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.saveFailed);
                }
            }
        });
    });
    
    // Insert placeholder
    $(document).on('click', '.cg-insert-inner-ph', function() {
        const ph = $(this).data('placeholder');
        const $textarea = $('#inner-content');
        const start = $textarea[0].selectionStart;
        const val = $textarea.val();
        $textarea.val(val.substring(0, start) + ph + val.substring($textarea[0].selectionEnd));
        $textarea.focus();
    });
    
    // Export
    $('#cg-export-inner').on('click', function() {
        window.location.href = cgAdmin.ajaxUrl + '?action=cg_export&nonce=' + cgAdmin.nonce + '&types[]=inner_templates';
    });
    
    // Import
    $('#cg-import-inner').on('click', function() {
        $('#cg-import-file').click();
    });
    
    $('#cg-import-file').on('change', function() {
        const file = this.files[0];
        if (!file) return;
        
        const formData = new FormData();
        formData.append('action', 'cg_import');
        formData.append('nonce', cgAdmin.nonce);
        formData.append('file', file);
        formData.append('types[]', 'inner_templates');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    alert(cgAdmin.strings.importCompletedImported + ' ' + response.data.imported.length + ', ' + cgAdmin.strings.skipped + ' ' + response.data.skipped.length);
                    location.reload();
                } else {
                    alert(response.data.message || cgAdmin.strings.importFailed);
                }
            }
        });
    });
});
