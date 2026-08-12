<?php
$md_file = 'd:/work/wp-onboarding/.lovable/plans/subtasks/02-guideline-audit-fixes/643-fix-wp-plugins-riseup-asia-uploader-vendor-php-stubs-wordpress-stubs-wordpress-stubs-php.md';
$md_content = file($md_file);
$uppercases = [];
$count = 0;
foreach($md_content as $line) {
    if (preg_match('/^`(.+)`$/', trim($line), $matches)) {
        $str = $matches[1];
        if (preg_match_all('/\b[A-Z]{2,}\b/', $str, $matches2)) {
            foreach ($matches2[0] as $word) {
                if (!isset($uppercases[$word])) {
                    $uppercases[$word] = 0;
                }
                $uppercases[$word]++;
            }
        }
    }
}
arsort($uppercases);
print_r(array_slice($uppercases, 0, 50));
