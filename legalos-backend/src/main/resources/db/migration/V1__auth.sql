-- Auth & RBAC: the four LegalOS roles (CITIZEN, LAWYER, ORG_MEMBER, ORG_ADMIN).
-- organization_id has no FK yet — the "workspace" module (next migration) adds the
-- organization table and backfills the constraint.
create table app_user (
    id              uuid primary key,
    email           varchar(255) not null unique,
    password_hash   varchar(255) not null,
    full_name       varchar(255) not null,
    role            varchar(32)  not null check (role in ('CITIZEN', 'LAWYER', 'ORG_MEMBER', 'ORG_ADMIN')),
    organization_id uuid,
    enabled         boolean      not null default true,
    created_at      timestamptz  not null default now(),
    updated_at      timestamptz  not null default now()
);

create index idx_app_user_organization_id on app_user (organization_id);
