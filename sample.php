<?php
$md_file = 'd:/work/wp-onboarding/.lovable/plans/subtasks/02-guideline-audit-fixes/643-fix-wp-plugins-riseup-asia-uploader-vendor-php-stubs-wordpress-stubs-wordpress-stubs-php.md';
$md_content = file($md_file);
$count = 0;
foreach($md_content as $i => $line) {
    if (strpos($line, '- **Line ') === 0) {
        echo $line;
        echo $md_content[$i+1];
        $count++;
        if ($count > 10) break;
    }
}
