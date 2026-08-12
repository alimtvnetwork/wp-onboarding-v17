jQuery(document).ready(function($) {
    const NOTICE_DURATION = cgAdmin.constants.NOTICE_DURATION;
    
    $('#cg-business-profile-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = $(this).serializeArray();
        const data = {
            action: cgAdmin.constants.AJAX_SAVE_BUSINESS_PROFILE,
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
                    // Show success message
                    const $notice = $('<div class="cg-save-notice">✓ ' + cgAdmin.strings.profileSaved + '</div>');
                    $('body').append($notice);
                    setTimeout(function() {
                        $notice.fadeOut(300, function() {
                            $(this).remove();
                        });
                    }, NOTICE_DURATION);
                } else {
                    alert(response.data.message || cgAdmin.strings.errorSavingProfile);
                }
            },
            error: function() {
                alert(cgAdmin.strings.errorSavingProfileAgain);
            }
        });
    });
});
