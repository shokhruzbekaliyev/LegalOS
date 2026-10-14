package uz.legalos.workspace;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.legalos.auth.User;
import uz.legalos.workspace.dto.AddMemberRequest;
import uz.legalos.workspace.dto.CreateWorkspaceRequest;
import uz.legalos.workspace.dto.CreateWorkspaceResponse;
import uz.legalos.workspace.dto.MemberResponse;
import uz.legalos.workspace.dto.WorkspaceResponse;

@Tag(name = "Workspace", description = "Kompaniya workspace va xodimlar (RBAC)")
@RestController
@RequestMapping("/api/v1/workspaces")
public class WorkspaceController {

    private final WorkspaceService service;

    public WorkspaceController(WorkspaceService service) {
        this.service = service;
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('CITIZEN','LAWYER')")
    public ResponseEntity<CreateWorkspaceResponse> create(
            @AuthenticationPrincipal User user, @Valid @RequestBody CreateWorkspaceRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(user, request));
    }

    @GetMapping("/me")
    @PreAuthorize("hasAnyRole('ORG_MEMBER','ORG_ADMIN')")
    public WorkspaceResponse me(@AuthenticationPrincipal User user) {
        return service.get(user);
    }

    @GetMapping("/members")
    @PreAuthorize("hasAnyRole('ORG_MEMBER','ORG_ADMIN')")
    public List<MemberResponse> members(@AuthenticationPrincipal User user) {
        return service.members(user);
    }

    @PostMapping("/members")
    @PreAuthorize("hasRole('ORG_ADMIN')")
    public ResponseEntity<MemberResponse> addMember(
            @AuthenticationPrincipal User user, @Valid @RequestBody AddMemberRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.addMember(user, request));
    }
}
