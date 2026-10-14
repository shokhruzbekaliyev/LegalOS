package uz.legalos.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/** Exposes the API contract at /swagger-ui.html for the web/mobile team (sherik #2). */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI legalOsOpenApi() {
        final String bearer = "bearerAuth";
        return new OpenAPI()
                .info(new Info().title("LegalOS backend API").version("v0.1 (MVP)")
                        .description("LegalOS Uzbekistan — biznes backend (Java 21, Spring Boot)"))
                .addSecurityItem(new SecurityRequirement().addList(bearer))
                .components(new Components().addSecuritySchemes(bearer,
                        new SecurityScheme()
                                .name(bearer)
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")));
    }
}
