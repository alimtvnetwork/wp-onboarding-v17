<?php
/**
 * Test Cases Page - Category Generator
 * Comprehensive test suite with group filtering
 * 
 * @package Category_Generator_Area
 * @author MD Alim Ul Karim
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<div class="wrap cg-admin-wrap">
    <h1 class="<?php echo esc_attr(CG_CSS::TEXT_TITLE); ?>">
        <span class="dashicons dashicons-performance"></span>
        <?php _e('Test Cases', 'category-generator'); ?>
    </h1>
    
    <p class="<?php echo esc_attr(CG_CSS::TEXT_DESCRIPTION); ?>">
        <?php _e('Run automated tests to verify all plugin functionality is working correctly. Tests cover database operations, template processing, category generation, and SEO integration.', 'category-generator'); ?>
    </p>
    
    <div class="cg-test-controls">
        <button type="button" class="<?php echo esc_attr(CG_CSS::BTN_PRIMARY); ?> button-hero" id="cg-run-tests">
            <span class="dashicons dashicons-controls-play"></span>
            <?php _e('Run All Tests', 'category-generator'); ?>
        </button>
        
        <select id="cg-test-group" class="cg-test-group-select">
            <option value="all"><?php _e('All Tests', 'category-generator'); ?></option>
            <option value="database"><?php _e('Database Tests', 'category-generator'); ?></option>
            <option value="variables"><?php _e('Variable Tests', 'category-generator'); ?></option>
            <option value="templates"><?php _e('Template Tests', 'category-generator'); ?></option>
            <option value="categories"><?php _e('Category Tests', 'category-generator'); ?></option>
            <option value="yoast"><?php _e('Yoast SEO Tests', 'category-generator'); ?></option>
            <option value="saved"><?php _e('Saved Titles/Areas Tests', 'category-generator'); ?></option>
            <option value="snapshots"><?php _e('Snapshot Tests', 'category-generator'); ?></option>
            <option value="utility"><?php _e('Utility Tests', 'category-generator'); ?></option>
            <option value="ajax"><?php _e('AJAX Handler Tests', 'category-generator'); ?></option>
            <option value="javascript"><?php _e('JavaScript Data Tests', 'category-generator'); ?></option>
            <option value="validation"><?php _e('Input Validation Tests', 'category-generator'); ?></option>
        </select>
        
        <button type="button" class="<?php echo esc_attr(CG_CSS::BTN_DEFAULT); ?>" id="cg-download-phpunit">
            <span class="dashicons dashicons-download"></span>
            <?php _e('Download PHPUnit Tests', 'category-generator'); ?>
        </button>
    </div>
    
    <div class="<?php echo esc_attr(CG_CSS::LAYOUT_CARD); ?>" id="cg-test-results" style="display: none;">
        <div class="cg-test-summary">
            <div class="cg-test-stat cg-stat-total">
                <span class="cg-stat-value" id="test-total">0</span>
                <span class="cg-stat-label"><?php _e('Total', 'category-generator'); ?></span>
            </div>
            <div class="cg-test-stat cg-stat-passed">
                <span class="cg-stat-value" id="test-passed">0</span>
                <span class="cg-stat-label"><?php _e('Passed', 'category-generator'); ?></span>
            </div>
            <div class="cg-test-stat cg-stat-failed">
                <span class="cg-stat-value" id="test-failed">0</span>
                <span class="cg-stat-label"><?php _e('Failed', 'category-generator'); ?></span>
            </div>
            <div class="cg-test-stat cg-stat-time">
                <span class="cg-stat-value" id="test-time">0ms</span>
                <span class="cg-stat-label"><?php _e('Total Time', 'category-generator'); ?></span>
            </div>
        </div>
        
        <div class="cg-test-progress">
            <div class="cg-progress-bar">
                <div class="cg-progress-fill" id="test-progress"></div>
            </div>
        </div>
        
        <div class="cg-test-filters">
            <button type="button" class="cg-filter-btn active" data-filter="all"><?php _e('All', 'category-generator'); ?></button>
            <button type="button" class="cg-filter-btn" data-filter="passed"><?php _e('Passed', 'category-generator'); ?></button>
            <button type="button" class="cg-filter-btn" data-filter="failed"><?php _e('Failed', 'category-generator'); ?></button>
        </div>
        
        <table class="wp-list-table widefat fixed striped" id="cg-test-table">
            <thead>
                <tr>
                    <th style="width: 50px;"><?php _e('Status', 'category-generator'); ?></th>
                    <th><?php _e('Test Name', 'category-generator'); ?></th>
                    <th style="width: 100px;"><?php _e('Time', 'category-generator'); ?></th>
                    <th><?php _e('Message', 'category-generator'); ?></th>
                </tr>
            </thead>
            <tbody id="cg-test-body">
            </tbody>
        </table>
    </div>
    
    <div class="<?php echo esc_attr(CG_CSS::LAYOUT_CARD); ?>" style="margin-top: <?php echo CG_Constants::SPACING_LARGE; ?>px;">
        <h2><?php _e('Test Coverage', 'category-generator'); ?></h2>
        <p class="<?php echo esc_attr(CG_CSS::TEXT_DESCRIPTION); ?>"><?php _e('The test suite covers the following areas:', 'category-generator'); ?></p>
        
        <div class="cg-test-categories">
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-database"></span> <?php _e('Database Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('6 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Connection verification', 'category-generator'); ?></li>
                    <li><?php _e('Table existence checks', 'category-generator'); ?></li>
                    <li><?php _e('Insert operations', 'category-generator'); ?></li>
                    <li><?php _e('Update operations', 'category-generator'); ?></li>
                    <li><?php _e('Delete operations', 'category-generator'); ?></li>
                    <li><?php _e('Transaction handling', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-shortcode"></span> <?php _e('Variable Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('7 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Basic variable compilation', 'category-generator'); ?></li>
                    <li><?php _e('String concatenation', 'category-generator'); ?></li>
                    <li><?php _e('Variable references', 'category-generator'); ?></li>
                    <li><?php _e('Nested references', 'category-generator'); ?></li>
                    <li><?php _e('Math operations', 'category-generator'); ?></li>
                    <li><?php _e('Empty value handling', 'category-generator'); ?></li>
                    <li><?php _e('Special character handling', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-text-page"></span> <?php _e('Template Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('12 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Inner template creation', 'category-generator'); ?></li>
                    <li><?php _e('Template processing', 'category-generator'); ?></li>
                    <li><?php _e('HTML template save/update', 'category-generator'); ?></li>
                    <li><?php _e('Meta template operations', 'category-generator'); ?></li>
                    <li><?php _e('Schema template handling', 'category-generator'); ?></li>
                    <li><?php _e('Placeholder replacement', 'category-generator'); ?></li>
                    <li><?php _e('Category hierarchy (3-level)', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-category"></span> <?php _e('Category Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('8 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Name format generation', 'category-generator'); ?></li>
                    <li><?php _e('Slug generation', 'category-generator'); ?></li>
                    <li><?php _e('Special character slugs', 'category-generator'); ?></li>
                    <li><?php _e('Parent/child logic', 'category-generator'); ?></li>
                    <li><?php _e('(S) notation parsing', 'category-generator'); ?></li>
                    <li><?php _e('(S) notation edge cases', 'category-generator'); ?></li>
                    <li><?php _e('Area list parsing', 'category-generator'); ?></li>
                    <li><?php _e('Bulk generation count', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-search"></span> <?php _e('Yoast SEO Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('5 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Meta title generation', 'category-generator'); ?></li>
                    <li><?php _e('Focus keyword generation', 'category-generator'); ?></li>
                    <li><?php _e('Title length validation', 'category-generator'); ?></li>
                    <li><?php _e('Description minimum length', 'category-generator'); ?></li>
                    <li><?php _e('Score threshold classes', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-admin-generic"></span> <?php _e('Other Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('10 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('Import/Export (CSV, Json)', 'category-generator'); ?></li>
                    <li><?php _e('Business profile CRUD', 'category-generator'); ?></li>
                    <li><?php _e('Settings save/load', 'category-generator'); ?></li>
                    <li><?php _e('Constants validation', 'category-generator'); ?></li>
                    <li><?php _e('Snapshot operations', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-rest-api"></span> <?php _e('AJAX Handler Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('6 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('AJAX actions defined', 'category-generator'); ?></li>
                    <li><?php _e('Nonce validation', 'category-generator'); ?></li>
                    <li><?php _e('Response format', 'category-generator'); ?></li>
                    <li><?php _e('Save/Get template handlers', 'category-generator'); ?></li>
                    <li><?php _e('Snapshot handler', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-editor-code"></span> <?php _e('JavaScript Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('5 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('JS constants export', 'category-generator'); ?></li>
                    <li><?php _e('CSS classes export', 'category-generator'); ?></li>
                    <li><?php _e('DOM element IDs', 'category-generator'); ?></li>
                    <li><?php _e('Localized strings', 'category-generator'); ?></li>
                    <li><?php _e('Template type validation', 'category-generator'); ?></li>
                </ul>
            </div>
            
            <div class="cg-test-category">
                <h3><span class="dashicons dashicons-shield"></span> <?php _e('Validation Tests', 'category-generator'); ?></h3>
                <span class="cg-test-count"><?php _e('3 tests', 'category-generator'); ?></span>
                <ul>
                    <li><?php _e('XSS prevention', 'category-generator'); ?></li>
                    <li><?php _e('Sql injection prevention', 'category-generator'); ?></li>
                    <li><?php _e('Max length validation', 'category-generator'); ?></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
.cg-test-controls { 
    display: flex; 
    gap: <?php echo CG_Constants::SPACING_MEDIUM; ?>px; 
    margin-bottom: <?php echo CG_Constants::SPACING_XLARGE; ?>px;
    align-items: center;
}
.cg-test-controls .button-hero { display: flex; align-items: center; gap: <?php echo CG_Constants::SPACING_SMALL; ?>px; }
.cg-test-group-select {
    padding: 8px 12px;
    border: 1px solid #c3c4c7;
    border-radius: 4px;
    font-size: 14px;
}

.cg-test-summary { display: flex; gap: <?php echo CG_Constants::SPACING_LARGE; ?>px; margin-bottom: <?php echo CG_Constants::SPACING_LARGE; ?>px; }
.cg-test-stat { text-align: center; padding: <?php echo CG_Constants::SPACING_LARGE; ?>px <?php echo CG_Constants::SPACING_XLARGE; ?>px; border-radius: <?php echo CG_Constants::BORDER_RADIUS_LG; ?>px; min-width: 100px; }
.cg-stat-total { background: #e3e5e8; }
.cg-stat-passed { background: #d4edda; }
.cg-stat-failed { background: #f8d7da; }
.cg-stat-time { background: #cce5ff; }
.cg-test-stat .cg-stat-value { display: block; font-size: 32px; font-weight: 700; line-height: 1; }
.cg-test-stat .cg-stat-label { display: block; font-size: 12px; margin-top: 6px; color: #666; }

.cg-test-progress { margin-bottom: <?php echo CG_Constants::SPACING_LARGE; ?>px; }
.cg-progress-bar { height: 8px; background: #e3e5e8; border-radius: 4px; overflow: hidden; }
.cg-progress-fill { height: 100%; background: linear-gradient(90deg, #00a32a, #46b450); width: 0%; transition: width <?php echo CG_Constants::ANIMATION_FADE_DURATION; ?>ms ease; }

.cg-test-filters {
    display: flex;
    gap: <?php echo CG_Constants::SPACING_SMALL; ?>px;
    margin-bottom: <?php echo CG_Constants::SPACING_MEDIUM; ?>px;
}
.cg-filter-btn {
    padding: 6px 12px;
    border: 1px solid #c3c4c7;
    background: #f0f0f1;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
}
.cg-filter-btn.active {
    background: #2271b1;
    color: white;
    border-color: #2271b1;
}

#cg-test-table .test-passed td:first-child { color: #00a32a; font-weight: bold; }
#cg-test-table .test-failed td:first-child { color: #d63638; font-weight: bold; }
#cg-test-table .test-passed { background: rgba(0, 163, 42, 0.05); }
#cg-test-table .test-failed { background: rgba(214, 54, 56, 0.05); }

.cg-test-categories { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: <?php echo CG_Constants::SPACING_LARGE; ?>px; 
}
@media (max-width: <?php echo CG_Constants::BREAKPOINT_TABLET; ?>px) { 
    .cg-test-categories { grid-template-columns: repeat(2, 1fr); } 
}
@media (max-width: <?php echo CG_Constants::BREAKPOINT_MOBILE; ?>px) { 
    .cg-test-categories { grid-template-columns: 1fr; } 
}

.cg-test-category { 
    background: #f8f9fa; 
    padding: <?php echo CG_Constants::SPACING_LARGE; ?>px; 
    border-radius: <?php echo CG_Constants::BORDER_RADIUS_LG; ?>px; 
}
.cg-test-category h3 { 
    display: flex; 
    align-items: center; 
    gap: <?php echo CG_Constants::SPACING_SMALL; ?>px; 
    margin: 0 0 <?php echo CG_Constants::SPACING_SMALL; ?>px 0; 
    font-size: 14px; 
}
.cg-test-count {
    display: inline-block;
    background: #e0e0e0;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    color: #555;
    margin-bottom: <?php echo CG_Constants::SPACING_SMALL; ?>px;
}
.cg-test-category ul { margin: 0; padding-left: <?php echo CG_Constants::SPACING_LARGE; ?>px; }
.cg-test-category li { font-size: 13px; color: #666; margin-bottom: 4px; }

.dashicons.spin {
    animation: cg-spin 1s linear infinite;
}
@keyframes cg-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

