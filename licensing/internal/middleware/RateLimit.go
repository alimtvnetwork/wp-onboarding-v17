package middleware

import (
	"net/http"

	"riseup-licensing/pkg/ratelimit"
)

// RateLimit returns middleware that enforces per-Ip rate limiting.
func RateLimit(limiter *ratelimit.Limiter) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {

		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ip := extractClientIp(r)
			isAllowed := limiter.Allow(ip)

			if isAllowed {
				next.ServeHTTP(w, r)

				return
			}

			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusTooManyRequests)
			w.Write([]byte(`{"error":"rate limit exceeded"}`)) //nolint:errcheck
		})
	}
}

// extractClientIp returns the client Ip from X-Forwarded-For or RemoteAddr.
func extractClientIp(r *http.Request) string {
	forwarded := r.Header.Get("X-Forwarded-For")
	hasForwardedIp := forwarded != ""

	if hasForwardedIp {

		return forwarded
	}

	return r.RemoteAddr
}
