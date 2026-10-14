package uz.legalos.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/** Powers the @CreatedDate/@LastModifiedDate fields on {@link uz.legalos.common.BaseEntity}. */
@Configuration
@EnableJpaAuditing
public class JpaAuditingConfig {
}
