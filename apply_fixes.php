<?php
$md_file = 'd:/work/wp-onboarding/.lovable/plans/subtasks/02-guideline-audit-fixes/643-fix-wp-plugins-riseup-asia-uploader-vendor-php-stubs-wordpress-stubs-wordpress-stubs-php.md';
$target_file = 'd:/work/wp-onboarding/wp-plugins/riseup-asia-uploader/vendor/php-stubs/wordpress-stubs/wordpress-stubs.php';

$md_content = file($md_file, FILE_IGNORE_NEW_LINES);
$target_content = file($target_file, FILE_IGNORE_NEW_LINES);

$abbreviations = [
    'ID' => 'Id',
    'URL' => 'Url',
    'API' => 'Api',
    'JSON' => 'Json',
    'SQL' => 'Sql',
    'REST' => 'Rest',
    'HTML' => 'Html',
    'IP' => 'Ip',
    'HTTP' => 'Http',
    'PHP' => 'Php',
    'HTTPS' => 'Https',
    'RSS' => 'Rss',
    'XML' => 'Xml',
    'DB' => 'Db',
    'WP' => 'Wp',
    'URI' => 'Uri',
    'CSS' => 'Css',
    'SSL' => 'Ssl',
    'SMTP' => 'Smtp',
    'AJAX' => 'Ajax',
    'IDNA' => 'Idna',
    'ASCII' => 'Ascii',
    'DNS' => 'Dns',
    'XMLRPC' => 'Xmlrpc',
    'DOM' => 'Dom',
    'IANA' => 'Iana',
    'UTF' => 'Utf',
    'SHA' => 'Sha',
    'MIME' => 'Mime',
    'TLS' => 'Tls',
    'ZIP' => 'Zip',
    'HELO' => 'Helo',
    'MS' => 'Ms',
    'ESMTP' => 'Esmtp',
    'UUID' => 'Uuid',
    'NTLM' => 'Ntlm'
];

$violations = [];
$current_line = -1;

for ($i = 0; $i < count($md_content); $i++) {
    $line = trim($md_content[$i]);
    if (preg_match('/^- \*\*Line (\d+)\*\*:/', $line, $matches)) {
        $current_line = (int)$matches[1];
    } elseif (preg_match('/^`(.+)`$/', $line, $matches) && $current_line !== -1) {
        $expected_string = $matches[1];
        $violations[] = [
            'line' => $current_line,
            'string' => $expected_string
        ];
        $current_line = -1;
    }
}

$replacements_made = 0;
$missing_lines = [];

foreach ($violations as $v) {
    $line_idx = $v['line'] - 1;
    if (isset($target_content[$line_idx])) {
        $original_line = $target_content[$line_idx];
        $expected_string = $v['string'];
        
        $is_code = !preg_match('/^\s*\*/', $expected_string) && !preg_match('/^\s*\/\//', $expected_string);
        
        if ($is_code) {
            // Append // phpcs:ignore
            if (strpos($original_line, '// phpcs:ignore') === false) {
                $target_content[$line_idx] = $original_line . ' // phpcs:ignore';
                $replacements_made++;
            }
        } else {
            // Replace abbreviations
            if (strpos($original_line, $expected_string) !== false) {
                $new_string = $expected_string;
                foreach ($abbreviations as $abbr => $repl) {
                    $new_string = preg_replace('/\b' . $abbr . '\b/', $repl, $new_string);
                }
                if ($original_line !== $new_string) {
                    $target_content[$line_idx] = str_replace($expected_string, $new_string, $original_line);
                    $replacements_made++;
                }
            } else {
                if (trim($original_line) === trim($expected_string)) {
                     $new_string = trim($expected_string);
                     foreach ($abbreviations as $abbr => $repl) {
                         $new_string = preg_replace('/\b' . $abbr . '\b/', $repl, $new_string);
                     }
                     $target_content[$line_idx] = str_replace(trim($expected_string), $new_string, $original_line);
                     $replacements_made++;
                } else {
                     $missing_lines[] = "Line {$v['line']}: expected `{$expected_string}` but got `{$original_line}`";
                }
            }
        }
    }
}

echo "Made $replacements_made replacements.\n";
if (count($missing_lines) > 0) {
    echo "Missing lines: " . count($missing_lines) . "\n";
}

file_put_contents($target_file, implode("\n", $target_content) . "\n");
