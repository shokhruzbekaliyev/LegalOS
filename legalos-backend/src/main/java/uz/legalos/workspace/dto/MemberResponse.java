package uz.legalos.workspace.dto;

import java.util.UUID;
import uz.legalos.auth.Role;

public record MemberResponse(UUID id, String email, String fullName, Role role) {
}
