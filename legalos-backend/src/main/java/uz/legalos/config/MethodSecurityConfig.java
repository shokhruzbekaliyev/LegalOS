package uz.legalos.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

/**
 * Enables {@code @PreAuthorize("hasRole('ORG_ADMIN')")} etc. on controller/service methods.
 * This is where per-endpoint RBAC actually gets enforced (see {@link uz.legalos.auth.Role}).
 */
@Configuration
@EnableMethodSecurity
public class MethodSecurityConfig {
}
