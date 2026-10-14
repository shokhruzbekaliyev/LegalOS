package uz.legalos.auth;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.legalos.auth.dto.AuthResponse;
import uz.legalos.auth.dto.LoginRequest;
import uz.legalos.auth.dto.RegisterRequest;

@Tag(name = "Auth", description = "Ro'yxatdan o'tish, login va joriy foydalanuvchi")
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    /** Amaldagi (muddati o'tmagan) token evaziga yangisini beradi. */
    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(authService.authResponse(user));
    }

    @GetMapping("/me")
    public ResponseEntity<UserSummary> me(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(new UserSummary(
                user.getId(), user.getEmail(), user.getFullName(), user.getRole(), user.getOrganizationId()));
    }

    public record UserSummary(
            java.util.UUID id, String email, String fullName, Role role, java.util.UUID organizationId) {
    }
}
