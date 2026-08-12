<?php
$md_file = 'd:/work/wp-onboarding/.lovable/plans/subtasks/02-guideline-audit-fixes/643-fix-wp-plugins-riseup-asia-uploader-vendor-php-stubs-wordpress-stubs-wordpress-stubs-php.md';
$target_file = 'd:/work/wp-onboarding/wp-plugins/riseup-asia-uploader/vendor/php-stubs/wordpress-stubs/wordpress-stubs.php';

$md_content = file($md_file);
$target_content = file($target_file);

$violations = [];
$current_line = -1;

for ($i = 0; $i < count($md_content); $i++) {
    $line = trim($md_content[$i]);
    if (preg_match('/^- \*\*Line (\d+)\*\*:/', $line, $matches)) {
        $current_line = (int)$matches[1];
    } elseif (preg_match('/^`(.+)`$/', $line, $matches) && $current_line !== -1) {
        $expected_string = $matches[1];
        // Strip out the leading `* ` or similar if we want, but let's just use the markdown's exact string
        $violations[] = [
            'line' => $current_line,
            'string' => $expected_string
        ];
        $current_line = -1;
    }
}

echo "Found " . count($violations) . " violations.\n";

$replacements = 0;

foreach ($violations as $v) {
    $line_idx = $v['line'] - 1;
    if (isset($target_content[$line_idx])) {
        $original_line = $target_content[$line_idx];
        $expected_string = $v['string'];
        
        // Let's do a simple str_replace of the expected string. 
        // But we need to know what to replace it WITH.
        // We know it says "Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL)."
        // We can find ID, URL, REST, API, HTTP, XML, JSON, etc.
        // Wait, the prompt says "Be careful. The variable $ID inside might break static analysis if changed directly, so please use // phpcs:ignore where appropriate or fix it carefully."
        // And it says we only need to fix the abbreviation violations specified.
        
        // Actually, replacing in PHP docs vs replacing in code:
        // A lot of these are docblocks. If it's a docblock, changing ID to Id is safe.
        // If it's code, we might need // phpcs:ignore WordPress.NamingConventions.ValidVariableName.VariableNotSnakeCase
        // Wait, phpcs for abbreviation casing usually wants PascalCase.
        
        $new_line = $original_line;
        
        // Let's just do a generic replacement of words on the exact expected_string:
        // ID -> Id, URL -> Url, API -> Api, HTTP -> Http, HTML -> Html, XML -> Xml, JSON -> Json
        // But only replace the uppercase versions when they are standalone or part of a PascalCase / camelCase word?
        
        // Better: let's replace them in the expected_string and then str_replace it in the line.
        // Wait, if expected_string is just the original string from the file, we can modify it.
        // What words do we have? Let's check.
    }
}
