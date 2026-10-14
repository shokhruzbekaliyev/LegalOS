# LegalOS backend — MVP reja

Backend: **Java 17, Spring Boot 4**. Maqsad — 5 ta MVP moduli (pitch-deck, 15-slayd) uchun ishlaydigan REST API.

Loyihada 3 kishi ishlaydi:
- **Siz** — bu backend (Java/Spring Boot)
- **Sherik #1** — AI agentlar + dataset (Python/FastAPI), backend bilan faqat REST/gRPC orqali gaplashadi
- **Sherik #2** — Web + Mobile UI, backendning REST API'siga (Swagger: `/swagger-ui.html`) ulanadi

## Rollar (RBAC) — o'zgarmas asos

| Rol | Kim | Izoh |
|---|---|---|
| `CITIZEN` | Oddiy fuqaro | O'z-o'zidan ro'yxatdan o'tadi, `organizationId = null` |
| `LAWYER` | Mustaqil yurist | O'z-o'zidan ro'yxatdan o'tadi, `organizationId = null` |
| `ORG_MEMBER` | Kompaniya xodimi | Faqat workspace ichida yaratiladi (`POST /api/workspaces/{id}/members`) |
| `ORG_ADMIN` | Kompaniya/korxona admini | Workspace yaratganda avtomatik beriladi |

Buто'rttasi hech qachon o'zgarmasligi kerak — barcha keyingi modullar (`@PreAuthorize("hasRole('ORG_ADMIN')")` kabi) shu rollarga tayanadi.

## Bosqichlar

### ✅ Bosqich 0 — Skelet
- Spring Initializr orqali loyiha yaratildi (`pom.xml`, `compose.yaml` — Postgres+Redis)
- `common/` — BaseEntity (UUID + createdAt/updatedAt auditing), GlobalExceptionHandler, ApiError

### ✅ Bosqich 1 — Auth & RBAC (hozir)
- `auth/` — `User` entity, `Role` enum (4 rol, yuqorida), `UserRepository`
- JWT: `JwtService` (token yaratish/tekshirish), `JwtAuthFilter` (har so'rovda header o'qish)
- `AuthService` + `AuthController` — `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- `config/SecurityConfig` — stateless JWT, CORS, `PasswordEncoder` (BCrypt)
- `config/MethodSecurityConfig` — `@PreAuthorize` yoqilgan (keyingi modullar shundan foydalanadi)
- `config/OpenApiConfig` — Swagger UI, sherik #2 uchun API hujjat
- Flyway: `V1__auth.sql` — `app_user` jadvali
- ✅ `mvnw clean compile` — xatosiz o'tdi

**✅ Real muhitda tekshirildi:**
- Kompyuterda mahalliy **PostgreSQL 17** allaqachon o'rnatilgan bo'lib chiqdi (port **5433**, standart 5432 emas) — Docker o'rniga shundan foydalanildi
- `legalos` roli/bazasi yaratildi va ulandi
- `spring.docker.compose.enabled=false` qo'shildi (compose.yaml bor, lekin Docker o'rnatilmagani uchun avto-ishga tushirish o'chirildi — Docker keyin o'rnatilsa yoqiladi)
- `./mvnw spring-boot:run` bilan ishga tushirildi → Flyway `V1__auth.sql` muvaffaqiyatli qo'llandi (`flyway_schema_history`, `app_user` jadvallari yaratildi)
- `POST /api/auth/register`, `POST /api/auth/login` (to'g'ri va noto'g'ri parol — 401), `GET /api/auth/me` — barchasi kutilganidek ishladi

**Qolgan ish (ixtiyoriy, keyinroq):** `AuthServiceTest`/`AuthControllerTest` yozish (avtomatik testlar).

### ⏳ Bosqich 2 — Workspace (Company)
- `Organization` entity (`name`, `type`: BUSINESS/ENTERPRISE_GOV), `OrganizationRepository`
- `POST /api/workspaces` (ORG_ADMIN yaratadi, o'zi shu workspace'ga bog'lanadi)
- `POST /api/workspaces/{id}/members` — faqat ORG_ADMIN, yangi `ORG_MEMBER` yaratadi
- `app_user.organization_id` ustuniga FK qo'shiladi (V2 migration)

### ⏳ Bosqich 3 — AI orchestration client
- `ai/AiClient` — sherik #1'ning FastAPI xizmatiga `WebClient` orqali murojaat
- DTO: `AiQueryRequest`(savol, agent turi) / `AiQueryResponse`(javob, citations, confidence)
- Xato/timeout holatlarini boshqarish (AI xizmati hali tayyor bo'lmasa ham backend ishlab tursin — fallback/mock rejim)

### ⏳ Bosqich 4 — Legal Chat
- `ChatSession`, `ChatMessage` entity'lari
- `POST /api/chat/sessions`, `POST /api/chat/sessions/{id}/messages` (AiClient chaqiradi, javobni citation bilan saqlaydi)

### ⏳ Bosqich 5 — Document Generator
- `GeneratedDocument` entity (turi: ARIZA/SHARTNOMA/XULOSA)
- `POST /api/documents/generate` — AiClient orqali matn generatsiya qiladi

### ⏳ Bosqich 6 — Contract Analyzer
- `Contract`, `ContractRisk` entity'lari, fayl yuklash (Object storage — MinIO/S3)
- `POST /api/contracts` (yuklash) → `POST /api/contracts/{id}/analyze` (AI tahlili) → risk/redline natija

### ⏳ Bosqich 7 — Sayqal
- Har bir modul uchun test, xatolarni tekshirish
- `README.md` — sherik #2 uchun ishga tushirish yo'riqnomasi, `.env.example`
- Docker'da to'liq ishga tushirish (`docker compose up` + `./mvnw spring-boot:run`)

## Demo qilish uchun

Bosqich 1 tugagach: `./mvnw spring-boot:run` + Postgres/Redis (`docker compose up -d`) bilan ishga tushirib, Postman/Swagger orqali `register → login → /me` oqimini ko'rsatish mumkin.
