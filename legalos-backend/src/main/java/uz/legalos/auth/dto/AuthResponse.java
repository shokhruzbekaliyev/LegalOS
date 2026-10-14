package uz.legalos.auth.dto;

import java.util.UUID;
import uz.legalos.auth.Role;

public record AuthResponse(String token, UUID userId, String email, String fullName, Role role) {
}
