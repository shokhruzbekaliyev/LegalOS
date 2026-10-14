package uz.legalos.auth;

/**
 * The four LegalOS user modes from the concept deck, mapped onto RBAC roles.
 * ORG_ADMIN/ORG_MEMBER apply inside a {@link uz.legalos.workspace.Organization}
 * (Business or Enterprise/Gov workspace); CITIZEN and LAWYER act without one.
 */
public enum Role {
    CITIZEN,
    LAWYER,
    ORG_MEMBER,
    ORG_ADMIN
}
