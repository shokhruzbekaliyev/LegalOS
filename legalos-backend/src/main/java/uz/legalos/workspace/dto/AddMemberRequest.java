package uz.legalos.workspace.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AddMemberRequest(
        @NotBlank @Email String email,
        @NotBlank @Size(min = 8, message = "parol kamida 8 belgidan iborat bo'lishi kerak") String password,
        @NotBlank String fullName) {
}
