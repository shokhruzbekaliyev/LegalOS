-- Workspace (company): organization jadvali va app_user.organization_id uchun FK.
create table organization (
    id          uuid primary key,
    name        varchar(255) not null,
    type        varchar(32)  not null check (type in ('BUSINESS', 'ENTERPRISE_GOV')),
    created_at  timestamptz  not null default now(),
    updated_at  timestamptz  not null default now()
);

alter table app_user
    add constraint fk_app_user_organization foreign key (organization_id) references organization (id);

-- ORG_* rollari faqat tashkilot bilan birga bo'ladi, CITIZEN/LAWYER esa tashkilotsiz.
alter table app_user
    add constraint chk_app_user_role_org
    check ((role in ('ORG_MEMBER', 'ORG_ADMIN')) = (organization_id is not null));
