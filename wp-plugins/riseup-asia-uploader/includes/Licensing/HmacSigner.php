<?php
/**
 * HmacSigner — HmacSha256 request signing for licensing Api authentication.
 *
 * Mirrors the Go server's pkg/hmac/Signer.go signature format:
 * payload = "{timestamp}:{body}", signed with Sha256.
 *
 * @package RiseupAsia\Licensing
 * @since   2.7.0
 */

namespace RiseupAsia\Licensing;

if (defined('ABSPATH') === false) {
    exit;
}

class HmacSigner
{
    private const HASH_ALGO = 'sha256';
    private const KEY_SIGNATURE = 'signature';
    private const KEY_TIMESTAMP = 'timestamp';
    private const PAYLOAD_SEPARATOR = ':';

    private string $secret;

    public function __construct(string $secret)
    {
        $this->secret = $secret;
    }

    /**
     * Sign a request body with the current timestamp.
     *
     * @param string $body    The Json request body (empty string for Get requests).
     * @param int    $timestamp Unix timestamp (defaults to current time).
     * @return array{signature: string, timestamp: int}
     */
    public function sign(string $body = '', int $timestamp = 0): array
    {
        $ts = ($timestamp > 0) ? $timestamp : time();
        $payload = $ts . self::PAYLOAD_SEPARATOR . $body;
        $signature = hash_hmac(self::HASH_ALGO, $payload, $this->secret);

        return [
            self::KEY_SIGNATURE => $signature,
            self::KEY_TIMESTAMP => $ts,
        ];
    }
}
