jQuery(document).ready(function($) {
    let currentFilter = 'all';
    let testData = null;
    
    // Run tests
    $('#cg-run-tests').on('click', function() {
        const $btn = $(this);
        const group = $('#cg-test-group').val();
        
        $btn.prop('disabled', true).find('.dashicons').removeClass('dashicons-controls-play').addClass('dashicons-update spin');
        
        $('#cg-test-results').show();
        $('#cg-test-body').html('<tr><td colspan="4" style="text-align:center;padding:30px;"><span class="spinner is-active" style="float:none;"></span> ' + cgAdmin.strings.runningTests + '</td></tr>');
        
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: cgAdmin.constants.AJAX_RUN_TESTS || 'cg_run_tests',
                nonce: cgAdmin.nonce,
                group: group
            },
            success: function(response) {
                $btn.prop('disabled', false).find('.dashicons').removeClass('dashicons-update spin').addClass('dashicons-controls-play');
                
                if (response.success) {
                    testData = response.data;
                    renderTestResults(testData);
                } else {
                    $('#cg-test-body').html('<tr><td colspan="4" style="color:#d63638;">' + cgAdmin.strings.errorRunningTests + ' ' + (response.data.message || cgAdmin.strings.unknownError) + '</td></tr>');
                }
            },
            error: function() {
                $btn.prop('disabled', false).find('.dashicons').removeClass('dashicons-update spin').addClass('dashicons-controls-play');
                $('#cg-test-body').html('<tr><td colspan="4" style="color:#d63638;">' + cgAdmin.strings.networkErrorAgain + '</td></tr>');
            }
        });
    });
    
    // Filter buttons
    $(document).on('click', '.cg-filter-btn', function() {
        currentFilter = $(this).data('filter');
        $('.cg-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if (testData) {
            renderTestResults(testData);
        }
    });
    
    function renderTestResults(data) {
        $('#test-total').text(data.total);
        $('#test-passed').text(data.passed);
        $('#test-failed').text(data.failed);
        
        let totalTime = 0;
        data.tests.forEach(t => totalTime += t.time);
        $('#test-time').text(totalTime.toFixed(2) + 'ms');
        
        const passPercent = data.total > 0 ? (data.passed / data.total * 100) : 0;
        $('#test-progress').css('width', passPercent + '%');
        
        if (data.failed > 0) {
            $('#test-progress').css('background', 'linear-gradient(90deg, #d63638, #ff6b6b)');
        } else {
            $('#test-progress').css('background', 'linear-gradient(90deg, #00a32a, #46b450)');
        }
        
        let html = '';
        data.tests.forEach(function(test) {
            // Apply filter
            if (currentFilter !== 'all' && test.status !== currentFilter) {
                return;
            }
            
            const icon = test.status === 'passed' ? '✓' : '✗';
            html += '<tr class="test-' + test.status + '">' +
                '<td>' + icon + '</td>' +
                '<td>' + escapeHtml(test.name) + '</td>' +
                '<td>' + test.time + 'ms</td>' +
                '<td>' + escapeHtml(test.message || '-') + '</td>' +
            '</tr>';
        });
        
        if (!html) {
            html = '<tr><td colspan="4" style="text-align:center;padding:20px;color:#666;">' + cgAdmin.strings.noTestsMatchFilter + '</td></tr>';
        }
        
        $('#cg-test-body').html(html);
    }
    
    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Download PHPUnit tests
    $('#cg-download-phpunit').on('click', function() {
        $.ajax({
            url: cgAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'cg_get_phpunit_tests',
                nonce: cgAdmin.nonce
            },
            success: function(response) {
                if (response.success) {
                    const blob = new Blob([response.data.content], { type: 'text/plain' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'CategoryGeneratorTest.php';
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
            }
        });
    });
});
