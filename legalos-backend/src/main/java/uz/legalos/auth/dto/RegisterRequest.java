package uz.legalos.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import uz.legalos.auth.Role;

/**
 * Public self-registration. Only CITIZEN and LAWYER are allowed here — ORG_MEMBER/ORG_ADMIN
 * accounts are created by {@code POST /api/workspaces/{id}/members} instead, since those
 * roles only make sense attached to an existing organization.
 */
public record RegisterRequest(
        @NotBlank @Email String email,
        @NotBlank @Size(min = 8, message = "parol kamida 8 belgidan iborat bo'lishi kerak") String password,
        @NotBlank String fullName,
        Role role) {

    public Role roleOrDefault() {
        if (role == Role.ORG_MEMBER || role == Role.ORG_ADMIN) {
            throw new IllegalArgumentException("Bu rol faqat workspace orqali beriladi");
        }
        return role == null ? Role.CITIZEN : role;
    }
}
