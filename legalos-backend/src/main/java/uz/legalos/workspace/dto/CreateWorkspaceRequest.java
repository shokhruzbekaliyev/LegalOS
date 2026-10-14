package uz.legalos.workspace.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import uz.legalos.workspace.OrgType;

public record CreateWorkspaceRequest(@NotBlank String name, @NotNull OrgType type) {
}
