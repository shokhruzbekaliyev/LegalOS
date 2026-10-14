package uz.legalos.workspace;

import java.util.List;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uz.legalos.auth.AuthService;
import uz.legalos.auth.Role;
import uz.legalos.auth.User;
import uz.legalos.auth.UserRepository;
import uz.legalos.common.NotFoundException;
import uz.legalos.workspace.dto.AddMemberRequest;
import uz.legalos.workspace.dto.CreateWorkspaceRequest;
import uz.legalos.workspace.dto.CreateWorkspaceResponse;
import uz.legalos.workspace.dto.MemberResponse;
import uz.legalos.workspace.dto.WorkspaceResponse;

@Service
public class WorkspaceService {

    private final OrganizationRepository organizations;
    private final UserRepository users;
    private final PasswordEncoder passwordEncoder;
    private final AuthService authService;

    public WorkspaceService(
            OrganizationRepository organizations,
            UserRepository users,
            PasswordEncoder passwordEncoder,
            AuthService authService) {
        this.organizations = organizations;
        this.users = users;
        this.passwordEncoder = passwordEncoder;
        this.authService = authService;
    }

    /** CITIZEN/LAWYER kompaniya yaratadi va shu kompaniyaning ORG_ADMIN'iga aylanadi. */
    @Transactional
    public CreateWorkspaceResponse create(User current, CreateWorkspaceRequest request) {
        if (current.getOrganizationId() != null) {
            throw new IllegalArgumentException("Siz allaqachon workspace a'zosisiz");
        }
        Organization org = organizations.save(
                Organization.builder().name(request.name().trim()).type(request.type()).build());
        current.setOrganizationId(org.getId());
        current.setRole(Role.ORG_ADMIN);
        User saved = users.save(current);
        return new CreateWorkspaceResponse(toResponse(org), authService.authResponse(saved));
    }

    @Transactional(readOnly = true)
    public WorkspaceResponse get(User current) {
        return toResponse(organizations.findById(current.getOrganizationId())
                .orElseThrow(() -> new NotFoundException("Workspace topilmadi")));
    }

    @Transactional(readOnly = true)
    public List<MemberResponse> members(User current) {
        return users.findByOrganizationId(current.getOrganizationId()).stream()
                .map(u -> new MemberResponse(u.getId(), u.getEmail(), u.getFullName(), u.getRole()))
                .toList();
    }

    /** ORG_ADMIN o'z kompaniyasiga ORG_MEMBER xodim qo'shadi. */
    @Transactional
    public MemberResponse addMember(User admin, AddMemberRequest request) {
        if (users.existsByEmail(request.email())) {
            throw new IllegalArgumentException("Bu email allaqachon ro'yxatdan o'tgan");
        }
        User member = users.save(User.builder()
                .email(request.email())
                .passwordHash(passwordEncoder.encode(request.password()))
                .fullName(request.fullName())
                .role(Role.ORG_MEMBER)
                .organizationId(admin.getOrganizationId())
                .enabled(true)
                .build());
        return new MemberResponse(member.getId(), member.getEmail(), member.getFullName(), member.getRole());
    }

    private WorkspaceResponse toResponse(Organization org) {
        return new WorkspaceResponse(org.getId(), org.getName(), org.getType());
    }
}
