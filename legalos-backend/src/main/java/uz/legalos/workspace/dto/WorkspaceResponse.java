package uz.legalos.workspace.dto;

import java.util.UUID;
import uz.legalos.workspace.OrgType;

public record WorkspaceResponse(UUID id, String name, OrgType type) {
}
