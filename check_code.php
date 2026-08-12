<?php
$md_file = 'd:/work/wp-onboarding/.lovable/plans/subtasks/02-guideline-audit-fixes/643-fix-wp-plugins-riseup-asia-uploader-vendor-php-stubs-wordpress-stubs-wordpress-stubs-php.md';
$md_content = file($md_file, FILE_IGNORE_NEW_LINES);

$code_lines = 0;
$doc_lines = 0;

$current_line = -1;

for ($i = 0; $i < count($md_content); $i++) {
    $line = trim($md_content[$i]);
    if (preg_match('/^- \*\*Line (\d+)\*\*:/', $line, $matches)) {
        $current_line = (int)$matches[1];
    } elseif (preg_match('/^`(.+)`$/', $line, $matches) && $current_line !== -1) {
        $expected_string = $matches[1];
        if (preg_match('/^\s*\*/', $expected_string) || preg_match('/^\s*\/\//', $expected_string)) {
            $doc_lines++;
        } else {
            $code_lines++;
            echo "Code line: " . $expected_string . "\n";
        }
        $current_line = -1;
    }
}

echo "Code lines: $code_lines, Doc lines: $doc_lines\n";
