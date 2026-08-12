/**
 * Admin License Page — Scripts
 *
 * Uses RiseupLicense localized object for all PHP-dependent values.
 *
 * @package RiseupAsiaUploader
 * @since   2.11.0
 */
jQuery(document).ready(function($) {
    var C = window.RiseupLicense;
    var nonce = C.nonce;

    function showNotice(msg, type) {
        var $n = $('#riseup-license-notice');
        $n.removeClass('notice-success notice-error notice-warning')
          .addClass('notice-' + type)
          .find('p').text(msg);
        $n.show();
        $('html, body').animate({scrollTop: 0}, 200);
    }

    function licenseAjax(action, data, btn) {
        var $btn = $(btn);
        var origText = $btn.text();
        $btn.prop('disabled', true).text(C.i18n.working || 'Working...');

        $.post(ajaxurl, $.extend({action: action, _nonce: nonce}, data))
            .done(function(resp) {
                if (resp.success) {
                    showNotice(resp.data.message, 'success');
                    setTimeout(function() { location.reload(); }, 800);
                } else {
                    showNotice(resp.data.message || C.i18n.errorGeneric || 'An error occurred.', 'error');
                    $btn.prop('disabled', false).text(origText);
                }
            })
            .fail(function() {
                showNotice(C.i18n.requestFailed, 'error');
                $btn.prop('disabled', false).text(origText);
            });
    }

    $('#riseup-license-save').on('click', function() {
        var key = $('#riseup-license-key').val().trim();
        if (!key) { showNotice(C.i18n.enterKey, 'warning'); return; }
        licenseAjax(C.actions.save, {license_key: key}, this);
    });

    $('#riseup-license-activate').on('click', function() {
        licenseAjax(C.actions.activate, {}, this);
    });

    $('#riseup-license-deactivate').on('click', function() {
        if (!confirm(C.i18n.confirmDeactivate)) return;
        licenseAjax(C.actions.deactivate, {}, this);
    });

    $('#riseup-license-remove').on('click', function() {
        if (!confirm(C.i18n.confirmRemove)) return;
        licenseAjax(C.actions.remove, {}, this);
    });

    $('#riseup-license-refresh').on('click', function() {
        licenseAjax(C.actions.refresh, {}, this);
    });
});
