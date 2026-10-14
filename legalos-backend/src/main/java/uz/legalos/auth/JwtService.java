package uz.legalos.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
import java.util.Map;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/** Issues and verifies the stateless JWTs used to authenticate API requests. */
@Service
public class JwtService {

    private final Key signingKey;
    private final long expirationMs;

    public JwtService(
            @Value("${legalos.security.jwt-secret}") String secret,
            @Value("${legalos.security.jwt-expiration-ms:86400000}") long expirationMs) {
        // HS256 needs a 256-bit key; pad/hash short dev secrets so local `.env` values still work.
        byte[] keyBytes = Keys.hmacShaKeyFor(sha256Pad(secret)).getEncoded();
        this.signingKey = new SecretKeySpec(keyBytes, "HmacSHA256");
        this.expirationMs = expirationMs;
    }

    public String generateToken(User user) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + expirationMs);
        return Jwts.builder()
                .subject(user.getEmail())
                .claims(Map.of(
                        "uid", user.getId().toString(),
                        "role", user.getRole().name(),
                        "orgId", user.getOrganizationId() == null ? "" : user.getOrganizationId().toString()))
                .issuedAt(now)
                .expiration(expiry)
                .signWith(signingKey)
                .compact();
    }

    public Claims parseClaims(String token) {
        return Jwts.parser().verifyWith((javax.crypto.SecretKey) signingKey).build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String extractEmail(String token) {
        return parseClaims(token).getSubject();
    }

    public boolean isValid(String token, String expectedEmail) {
        try {
            Claims claims = parseClaims(token);
            return claims.getSubject().equals(expectedEmail) && claims.getExpiration().after(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    private static byte[] sha256Pad(String secret) {
        try {
            return java.security.MessageDigest.getInstance("SHA-256").digest(secret.getBytes());
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }
}
