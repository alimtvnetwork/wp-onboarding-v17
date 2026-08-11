# Subtask 634: Fix violations in wp-plugins/riseup-asia-uploader/tests/Unit/Licensing/LicenseLifecycleTest.php

Target File: `wp-plugins/riseup-asia-uploader/tests/Unit/Licensing/LicenseLifecycleTest.php`

## Violations

- **Line 24**: abbreviations - Invalid abbreviation casing
  `/** @var int Counts API calls made during the test. */`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 85**: abbreviations - Invalid abbreviation casing
  `$this->assertSame($callsBefore, $this->apiCallCount, 'isLicensed should use cache, not call API');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 98**: abbreviations - Invalid abbreviation casing
  `$this->assertGreaterThanOrEqual(2, $this->apiCallCount, 'Activate should make at least 2 API calls');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 150**: abbreviations - Invalid abbreviation casing
  `$this->assertTrue($isLicensed, 'Stale cache re-validates and API returns valid=true, so isLicensed should be true');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 151**: abbreviations - Invalid abbreviation casing
  `$this->assertGreaterThanOrEqual(1, $this->apiCallCount, 'Stale cache should trigger API call');`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 177**: abbreviations - Invalid abbreviation casing
  `* Build a request router that responds based on URL path.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 237**: abbreviations - Invalid abbreviation casing
  `* Assert that at least one captured URL contains the given fragment.`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

- **Line 250**: abbreviations - Invalid abbreviation casing
  `$this->assertTrue($found, $message ?: "Expected a URL containing '{$fragment}', got: " . implode(', ', $this->apiUrls));`
  **Instruction**: Change the abbreviation to standard PascalCase/camelCase (e.g. Id instead of ID, Url instead of URL).

