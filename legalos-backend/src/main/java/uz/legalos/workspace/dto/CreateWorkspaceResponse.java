package uz.legalos.workspace.dto;

import uz.legalos.auth.dto.AuthResponse;

/** Rol o'zgargani uchun (CITIZEN/LAWYER -> ORG_ADMIN) yangi token ham qaytariladi. */
public record CreateWorkspaceResponse(WorkspaceResponse workspace, AuthResponse auth) {
}
