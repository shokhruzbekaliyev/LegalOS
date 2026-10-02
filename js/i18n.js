/* ==========================================================================
   LegalOS Uzbekistan - Localization & Translation System (i18n)
   Languages: Uzbek (uz - Default) and Russian (ru)
   English removed per user requirement.
   ========================================================================== */

const I18N_DICTIONARY = {
  uz: {
    // Brand & Common
    appName: "LegalOS",
    appSubtitle: "O‘zbekiston LegalTech • AI Platformasi",
    platformSubtitle: "O‘zbekiston LegalTech • AI Platformasi",
    zeroHallucination: "Zero-Hallucination Rejimi",
    verifiedLexuz: "Lex.uz (100% Sinxron)",
    syncStatus: "Lex.uz RAG: Sinxron",
    activeStatus: "Lex.uz RAG: Faol",
    courtRagStatus: "Sud Amaliyoti RAG: Faol",
    protectedStatus: "RBAC & Audit: Himoyalangan",
    companyProtectedStatus: "ABC Textile MCHJ: Himoyalangan",
    supremeCourt: "Oliy Sud",
    justiceMinistry: "Adliya Vazirligi",
    oneid: "OneID",
    orText: "Yoki",
    logout: "Chiqish",
    active: "Faol",
    authButton: "Kirish / Kabinet",
    searchPlaceholderGlobal: "Qonunlar (Lex.uz), moddalar, shartnomalar yoki case qidiruvi...",
    searchPlaceholderCitizen: "Qonuniy savolingizni yozing...",
    searchPlaceholderLawyer: "Sud qarorlari, pretsedentlar, moddalar yoki case ID qidirish...",
    searchPlaceholderBusiness: "Shartnomalar, ichki siyosatlar yoki xavflarni qidirish...",
    searchPlaceholderAdmin: "Xodimlar, audit jurnallari, billing yoki API sozlamalari...",
    
    // Roles & Titles
    roleCitizen: "Fuqaro",
    roleLawyer: "Yurist",
    roleBusiness: "Biznes",
    roleMember: "Xodim",
    roleAdmin: "Admin",
    citizenUserRole: "👤 FUQARO • Oddiy fuqaro",
    lawyerUserRole: "⚖️ YURIST • Mustaqil Advokat",
    memberUserRole: "🏢 XODIM • HR Bo‘limi Boshlig‘i",
    adminUserRole: "🛡️ BOSH ADMIN • Bosh Yurist",
    portalSubtitleCitizen: "Fuqaro Portali",
    portalSubtitleLawyer: "Yurist Ish Paneli",
    portalSubtitleBusiness: "Biznes & Shartnomalar",
    portalSubtitleAdmin: "Tashkilot Admini",

    // Auth & Login (login.html)
    leftBannerTagline: "O‘zbekiston LegalTech • AI Platformasi",
    leftBannerHeading: "Yuridik ishlaringizni LegalOS bilan tezlashtiring",
    leftBannerDesc: "Savoldan — hujjatga. Hujjatdan — case’ga. Case’dan — proaktiv compliance va real yuristgacha bo‘lgan to‘liq yuridik operatsion tizim.",
    partnersLabel: "Rasmiy Manbalar va Integratsiyalar",
    getStartedTitle: "Tizimga Kirish",
    createAccountTitle: "Ro‘yxatdan O‘tish",
    getStartedSubtitle: "Davom etish uchun hisobingizga kiring.",
    createAccountSubtitle: "Yangi hisob yarating va LegalOS imkoniyatlaridan foydalaning.",
    selectRoleLabel: "Foydalanuvchi Roli (Tanlang):",
    nameLabel: "Ism-familiya / Tashkilot nomi",
    namePlaceholder: "Ismingiz yoki kompaniya nomini kiriting...",
    emailLabel: "Elektron pochta manzili",
    emailPlaceholder: "workmail@company.uz",
    passwordLabel: "Parol",
    forgotPassword: "Parolni unutdingizmi?",
    agreeTerms: "Foydalanish shartlari va Maxfiylik siyosatiga roziman",
    loginBtn: "Tizimga Kirish",
    signupBtn: "Ro‘yxatdan O‘tish",
    haveAccountPrompt: "Hisobingiz bormi? ",
    noAccountPrompt: "Hisobingiz yo‘qmi? ",
    signInLink: "Kirish",
    signUpLink: "Ro‘yxatdan o‘tish",
    loginWithOneID: "OneID orqali kirish",
    loginWithGoogle: "Google orqali kirish",
    backToHome: "Bosh sahifa",
    tabLogin: "Tizimga Kirish",
    tabRegister: "Ro‘yxatdan O‘tish",
    confirmPasswordLabel: "Parolni tasdiqlang",
    
    // Landing Page (index.html)
    heroBadge: "✨ O‘zbekistonning Birinchi Milliy Yuridik AI Operatsion Tizimi",
    heroTitle: "Yuridik jarayonlaringizni Sun’iy Intellekt bilan yangi bosqichga olib chiqing",
    heroSubtitle: "Lex.uz qonunchiligi bilan 100% sinxronlashgan, shartnomalardagi xatarlarni aniqlovchi va sud amaliyotini simulyatsiya qiluvchi milliy platforma.",
    btnGetStarted: "🚀 Bepul Boshlash",
    btnLiveDemo: "⚡ Jonli Demo Ko‘rish",
    statSync: "100% Sinxron",
    statSyncDesc: "Lex.uz milliy qonunchilik bazasi",
    statRisk: "Zero-Risk",
    statRiskDesc: "Shartnoma xatarlarini oldini olish",
    statAccuracy: "100% Aniqlik",
    statAccuracyDesc: "Nol gallyutsinatsiya kafolati",
    statPortals: "4 ta Portal",
    statPortalsDesc: "Fuqaro, Yurist, Biznes, Admin",
    
    portalsSectionTitle: "Kimlar Uchun Mo‘ljallangan?",
    portalsSectionSubtitle: "LegalOS jamiyatning barcha qatlamlari — oddiy fuqarolardan tortib yirik korxonalargacha mo‘ljallangan.",
    portalCardCitizenTitle: "Fuqarolar Uchun",
    portalCardCitizenDesc: "Kundalik shaxsiy huquqiy savollarga sodda tushuntirishlar, tayyor ariza va da'vo shablonlari hamda professional yurist topish.",
    portalCardCitizenAction: "Fuqaro Portaliga Kirish →",
    portalCardLawyerTitle: "Yuristlar & Advokatlar",
    portalCardLawyerDesc: "Sud strategiyasi simulyatori, amaliyot pretsedentlari qidiruvi, da'vo arizalarini generatsiya qilish va soatlik billing.",
    portalCardLawyerAction: "Yurist Paneliga Kirish →",
    portalCardBusinessTitle: "Biznes & Korxonalar",
    portalCardBusinessDesc: "Korporativ shartnomalarni soniyalarda tahlil qilish (Redline), proaktiv soliq/huquqiy komplaens va ichki me'yoriy hujjatlar RAG.",
    portalCardBusinessAction: "Biznes Portaliga Kirish →",
    portalCardAdminTitle: "Tashkilot Boshqaruvi & Admin",
    portalCardAdminDesc: "Xodimlar ruxsatnomalari (RBAC), tizim audit jurnali, xavfsizlik va korporativ API integratsiyalari nazorati.",
    portalCardAdminAction: "Admin Paneliga O‘tish →",
    
    featuresSectionTitle: "Kuchli AI Imkoniyatlar",
    featuresSectionSubtitle: "Zamonaviy LLM va O‘zbekiston qonunchilik korpusining mukammal uyg‘unligi.",
    featRedlineTitle: "Avtomatik Redline Tahlili",
    featRedlineDesc: "Shartnomalardagi nomutanosib penya, bir tomonlama xavfli bandlar va yashirin majburiyatlarni 3 soniyada aniqlaydi.",
    featVerifierTitle: "Lex.uz Verifier AI",
    featVerifierDesc: "Har bir tavsiya va javob O‘zbekiston Respublikasi Kodekslari va qonunlari moddasiga 100% asoslanadi.",
    featCourtTitle: "Sud Strategiyasi Simulyatori",
    featCourtDesc: "Ish bo‘yicha Oliy Sud va iqtisodiy sudlar amaliyotini tahlil qilib, sudda g‘alaba qozonish ehtimolini hisoblaydi.",
    featComplianceTitle: "Proaktiv Komplaens",
    featComplianceDesc: "Qonunchilikda yangilik bo‘lsa, u sizning qaysi shartnomangizga yoki siyosatingizga ta'sir qilishini avtomat ogohlantiradi.",
    
    ctaBannerTitle: "Yuridik xatarlardan himoyalanishni bugunoq boshlang",
    ctaBannerSubtitle: "LegalOS orqali shartnomalaringizni tekshiring va huquqlaringizni kafolatlang.",
    navFeatures: "Xizmatlar",
    navAudience: "Kimlar uchun",
    navSecurity: "Xavfsizlik",

    // Banner
    proactiveAlertTitle: "Proaktiv Ogohlantirish",
    proactiveAlertText: "Soliq qonunchiligida o‘zgarish aniqlandi:",
    proactiveAlertImpact: "Ta’sir: 14 ta shartnoma • 1 ta Ichki hisob siyosati • 3 ta HR shablon",
    reviewImpactBtn: "Ta’sirlarni ko‘rish",

    // Navigation & Tabs
    navMainProcesses: "Asosiy Jarayonlar",
    navLegalChat: "Legal AI Maslahatchi",
    navContracts: "Shartnomalar Tahlili (Redline)",
    navCourtSimulator: "Sud Strategiyasi Simulyatori",
    navCompliance: "Proaktiv Compliance",
    navTimeMachine: "Vaqt Mashinasi (Tarixiy)",
    navMarketplace: "Yuristlar Bozori (Marketplace)",
    navWorkspace: "Tashkilot Boshqaruvi & RBAC",
    navCases: "Sud Ishlari (Case) Boshqaruvi",
    navResearch: "Chuqur Huquqiy Qidiruv",
    navBillingCRM: "Mijozlar & Hisob-Kitoblar (CRM)",
    navInternalPolicies: "Kompaniya Ichki Siyosatlari",
    navAuditLogs: "Tizim Auditi va Loglar",
    navBilling: "Tariflar va Obuna",
    navApi: "API va Integratsiyalar",
    activeAgentsTitle: "Faol AI Agentlar",

    // Chat
    orchestratorLabel: "Orkestr:",
    agentCivil: "📘 Umumiy Huquq",
    agentContracts: "📑 Shartnomalar",
    agentVerifier: "✓ Lex.uz Tekshiruvchi",
    sendBtn: "Yuborish",
    chatInputPlaceholder: "O‘zbekiston qonunchiligi bo‘yicha savolingizni yozing yoki modda qidiring...",
    prompt1: "⚠️ 50% jarima bandi qonuniymi?",
    prompt2: "👔 Xodim sinov muddati tartibi",
    prompt3: "🧾 Soliq va fiskal cheklar",

    // Contract Intelligence
    contractTitle: "Shartnomalar Tahlili & Redline Tahlili",
    contractDocSubtitle: "Hujjat: Axborot xizmatlari ko‘rsatish shartnomasi #42-UZ (Global Supply Cloud LLC bilan)",
    btnUploadContract: "Yangi Shartnoma Yuklash",
    btnDownloadDocx: "DOCX Yuklab Olish",
    clausesListTitle: "Shartnoma Bandlari",
    clause1: "1. Shartnoma predmeti",
    clause2: "2. Xizmatlar qiymati",
    clause3: "8.3. Javobgarlik",
    clause4: "9. Fors-major",
    clause5: "11. Maxfiylik (NDA)",
    clauseSafe: "Xavfsiz",
    clauseHighRisk: "YUQORI XAVF",
    riskTitle: "8.3-band — Bir tomonlama nomutanosib javobgarlik",
    riskProblemLabel: "Muammo:",
    riskProblemText: "Band majburiyat va kompensatsiya yukini asosan bir tomonga (Buyurtmachiga) yuklaydi. Bajaruvchi tomonidan kechikish yuz bersa, hech qanday penya yoki javobgarlik nazarda tutilmagan.",
    riskLegalBasisLabel: "Huquqiy Asos:",
    riskLegalBasisText: "Tadbirkorlikda majburiyatlarni buzganlik uchun tenglik va mutanosiblik printsipi",
    riskAiProposalLabel: "AI Redline Taklifi:",
    btnReject: "Rad etish",
    btnAcceptChange: "Tahrirni Qabul Qilish",
    liveContractVersion: "Shartnoma Matni (Jonli Versiya)",
    pendingReview: "Tahrir kutilmoqda",
    verifiedSafeBadge: "Muvofiqlashtirildi (Xavfsiz)",

    // Court Simulator
    caseSummaryTitle: "Sud Ishtiroki & Case Workbench",
    caseTitle: "CASE #UZ-2048: ABC Textile vs Supplier LLC",
    caseSubtitle: "Toshkent tumanlararo iqtisodiy sudi • Xomashyo yetkazib berishdagi 180,000,000 so‘mlik nizo",
    evidenceStat: "📁 12 ta dalil biriktirilgan",
    deadlineStat: "⏱️ 3 ta sud muddati (14-oktyabr)",
    missingDocStat: "⚠️ 2 ta yetishmayotgan hujjat",
    draftReadyStat: "✓ Da’vo arizasi loyihasi tayyor",
    courtTitle: "AI Sud Strategiyasi Simulyatori",
    courtSubtitle: "Sizning dalilingiz ➔ Qarshi tomon ehtimoliy himoyasi ➔ Sudya stress-testi",
    yourLawyerAiTitle: "Sizning Advokatingiz AI",
    yourPositionBadge: "Sizning pozitsiyangiz",
    opponentAiTitle: "Qarshi Tomon AI",
    opponentDefenseBadge: "Qarshi tomon himoyasi",
    judgeAiTitle: "Sudya AI (Stress-Test)",
    judgeAssessmentBadge: "Sudya bahosi",
    evidenceGapsTitle: "Aniqlangan Dalil Bo‘shliqlari:",
    hearingChecklistTitle: "Sud Majlisi Nazorat Ro‘yxati:",
    btnResimulate: "Qayta Simulyatsiya Qilish",
    btnToSimulator: "Strategiya Simulyatoriga O‘tish ➔",

    // Compliance
    complianceTitle: "Proaktiv Compliance Tizimi",
    complianceSubtitle: "Foydalanuvchi so‘rashini kutmaydi — Lex.uz qonun o‘zgarishlarini kompaniya shartnomalariga avtomatik bog‘laydi.",
    btnUpdateAllContracts: "Barcha Ta’sirlangan Shartnomalarni Yangilash",
    tableThAsset: "Ta’sirlangan Aktiv / Hujjat",
    tableThType: "Hujjat Turi",
    tableThRisk: "Xavf Darajasi",
    tableThAction: "Tavsiya Etilgan Amal",
    tableThBtn: "Harakat",

    // Time Machine
    timeMachineTitle: "Legal Time Machine (Qonunlar Tarixi)",
    timeMachineSubtitle: "Yuridik javob faqat 'hozir'ni emas, balki nizo yuz bergan sanadagi aniq tahrir va normativ bog‘liqliklarni biladi.",
    disputeDateLabel: "NIZO YUZ BERGAN SANA:",
    historicalVersionTitle: "Tarixiy Tahrir Tekshiruvchisi",
    effectiveFromAware: "effective_from / effective_to aniqlangan",
    knowledgeGraphTitle: "Bog‘liqliklar Xaritasi (Knowledge Graph)",

    // Citizen Portal
    citizenTitle: "Fuqarolar uchun Huquqiy AI Maslahatchi",
    citizenSubtitle: "Oddiy tilda tushuntiradi, qonun moddalariga asoslanadi.",
    freeModeTitle: "Bepul Rejim",
    freeModeDesc: "Sizda 15 ta bepul savol va ariza generatsiyasi mavjud.",
    templatesTitle: "Tayyor Ariza va Shablonlar Generatori",
    templatesSubtitle: "Bir necha savolga javob bering — LegalOS avtomatik ravishda tayyor huquqiy ariza shakllantiradi.",
    findLawyerTitle: "Professional Yurist Topish va Bog‘lanish",
    findLawyerSubtitle: "Agar sizga sudga vakil yoki yozma xulosa kerak bo‘lsa, tajribali mutaxassisni tanlang.",
    myDocumentsTitle: "Mening Hujjatlarim va Yozishmalarim",
    myDocumentsSubtitle: "Siz shakllantirgan arizalar va AI maslahatlari arxivi.",
    btnFillDoc: "Arizani To‘ldirish ➔",
    btnBookLawyer: "Konsultatsiya Belgilash ➔",

    // Admin & Workspace
    adminPanelBtn: "Admin Panel",
    navAdminDashboard: "Umumiy Boshqaruv (Dashboard)",
    navAdminUsers: "Foydalanuvchilar & RBAC",
    navAdminLawyers: "Yuristlar Moderatsiyasi",
    navAdminLexSync: "Lex.uz & RAG Sinxronlash",
    navAdminAiModels: "AI Modellari & Tokenlar",
    navAdminAudit: "Xavfsizlik & Audit Loglar",
    navAdminBilling: "Tariflar & Tushumlar",
    navAdminApi: "API & Integratsiyalar",
    adminPortalSwitcher: "Portallarga O‘tish",
    btnSyncNow: "Hozir Sinxronlash",
    btnCreateUserModal: "+ Yangi Foydalanuvchi",
    workspaceTitle: "Tashkilot Foydalanuvchilari va Rollar (RBAC)",
    workspaceSubtitle: "Kompaniyadagi xodimlarga kirish huquqlarini belgilang yoki yangi taklifnoma yuboring.",
    btnInviteMember: "+ Yangi Xodim Qo‘shish",
    kpiUsers: "Faol Xodimlar",
    kpiContracts: "Tahlil Qilingan Hujjatlar",
    kpiSecurity: "Xavfsizlik Ko‘rsatkichi",
    auditLogsTitle: "Tizim Auditi va Xavfsizlik Jurnali (Audit Trail)",
    auditLogsSubtitle: "Kompaniyadagi har bir huquqiy harakat va AI tahlili qat’iy qayd etiladi.",
    billingTitle: "Tariflar va Obuna (Billing)",
    billingSubtitle: "Kompaniyangiz LegalOS platformasida Business Plan tarifida ishlamoqda.",
    apiTitle: "Tashqi Tizimlar bilan API Integratsiyasi",
    apiSubtitle: "1C Buxgalteriya, HRM yoki korporativ ERP tizimingizga LegalOS yuridik aqlini to‘g‘ridan-to‘g‘ri ulang.",

    // Citation Drawer
    drawerOfficialLex: "Rasmiy Lex.uz Manbasi",
    drawerSourceDoc: "Manba Hujjati:",
    drawerArticleOfficial: "Modda Matni (Rasmiy Tahrir):",
    drawerVerifiedWith: "Lex.uz bilan solishtirildi",
    drawerOpenLex: "Lex.uz da Ochish ↗",
    closeBtn: "Yopish"
  },

  ru: {
    // Brand & Common
    appName: "LegalOS",
    appSubtitle: "LegalTech • ИИ Узбекистана",
    platformSubtitle: "Платформа LegalTech • ИИ Узбекистана",
    zeroHallucination: "Режим Без Галлюцинаций",
    verifiedLexuz: "Lex.uz (100% Синхронизация)",
    syncStatus: "Lex.uz RAG: Синхронно",
    activeStatus: "Lex.uz RAG: Активен",
    courtRagStatus: "RAG Судебной Практики: Активен",
    protectedStatus: "RBAC & Аудит: Защищено",
    companyProtectedStatus: "ООО ABC Textile: Защищено",
    supremeCourt: "Верховный Суд",
    justiceMinistry: "Министерство Юстиции",
    oneid: "OneID",
    orText: "Или",
    logout: "Выйти",
    active: "Активен",
    authButton: "Вход / Кабинет",
    searchPlaceholderGlobal: "Поиск законов (Lex.uz), статей, договоров или дел...",
    searchPlaceholderCitizen: "Напишите ваш правовой вопрос...",
    searchPlaceholderLawyer: "Поиск судебных решений, прецедентов, статей или дел...",
    searchPlaceholderBusiness: "Поиск договоров, внутренних регламентов или рисков...",
    searchPlaceholderAdmin: "Сотрудники, журналы аудита, биллинг или настройки API...",

    // Roles & Titles
    roleCitizen: "Гражданин",
    roleLawyer: "Юрист",
    roleBusiness: "Бизнес",
    roleMember: "Сотрудник",
    roleAdmin: "Админ",
    citizenUserRole: "👤 ГРАЖДАНИН • Физическое лицо",
    lawyerUserRole: "⚖️ ЮРИСТ • Независимый Адвокат",
    memberUserRole: "🏢 СОТРУДНИК • Руководитель HR",
    adminUserRole: "🛡️ ГЛАВНЫЙ АДМИН • Главный Юрист",
    portalSubtitleCitizen: "Портал Гражданина",
    portalSubtitleLawyer: "Кабинет Юриста",
    portalSubtitleBusiness: "Бизнес & Договоры",
    portalSubtitleAdmin: "Администратор Организации",

    // Auth & Login (login.html)
    leftBannerTagline: "Платформа LegalTech • ИИ Узбекистана",
    leftBannerHeading: "Ускорьте вашу юридическую работу с LegalOS",
    leftBannerDesc: "От вопроса — к документу. От документа — к делу. От дела — к проактивному комплаенсу и реальному юристу в единой ОС.",
    partnersLabel: "Официальные Источники и Интеграции",
    getStartedTitle: "Вход в Систему",
    createAccountTitle: "Регистрация",
    getStartedSubtitle: "Пожалуйста, войдите в аккаунт для продолжения.",
    createAccountSubtitle: "Создайте аккаунт и начните работу в LegalOS.",
    selectRoleLabel: "Роль Пользователя (Выберите):",
    nameLabel: "ФИО / Название организации",
    namePlaceholder: "Введите ваше имя или компанию...",
    emailLabel: "Электронная почта",
    emailPlaceholder: "workmail@company.uz",
    passwordLabel: "Пароль",
    forgotPassword: "Забыли пароль?",
    agreeTerms: "Я согласен с Условиями использования и Политикой конфиденциальности",
    loginBtn: "Войти",
    signupBtn: "Зарегистрироваться",
    haveAccountPrompt: "Уже есть аккаунт? ",
    noAccountPrompt: "Нет аккаунта? ",
    signInLink: "Войти",
    signUpLink: "Регистрация",
    loginWithOneID: "Войти через OneID",
    loginWithGoogle: "Войти через Google",
    backToHome: "Главная страница",
    tabLogin: "Вход в систему",
    tabRegister: "Регистрация",
    confirmPasswordLabel: "Подтвердите пароль",
    
    // Landing Page (index.html)
    heroBadge: "✨ Первая в Узбекистане Национальная Юридическая ИИ Операционная Система",
    heroTitle: "Выведите юридические процессы на новый уровень с Искусственным Интеллектом",
    heroSubtitle: "Национальная правовая платформа, синхронизированная с Lex.uz, анализирующая риски в договорах и симулирующая судебную практику.",
    btnGetStarted: "🚀 Начать Бесплатно",
    btnLiveDemo: "⚡ Смотреть Демо",
    statSync: "100% Синхронизация",
    statSyncDesc: "Законодательная база Lex.uz",
    statRisk: "Zero-Risk",
    statRiskDesc: "Предотвращение рисков в договорах",
    statAccuracy: "100% Точность",
    statAccuracyDesc: "Гарантия отсутствия галлюцинаций",
    statPortals: "4 Портала",
    statPortalsDesc: "Гражданин, Юрист, Бизнес, Админ",
    
    portalsSectionTitle: "Для Кого Создан LegalOS?",
    portalsSectionSubtitle: "Решения для всех категорий пользователей — от граждан до крупных корпораций.",
    portalCardCitizenTitle: "Для Граждан",
    portalCardCitizenDesc: "Ответы на бытовые правовые вопросы простым языком, готовые шаблоны заявлений и поиск проверенных юристов.",
    portalCardCitizenAction: "Кабинет Гражданина →",
    portalCardLawyerTitle: "Юристам и Адвокатам",
    portalCardLawyerDesc: "Симулятор судебных стратегий, прецедентный анализ, автогенерация процессуальных документов и учет часов.",
    portalCardLawyerAction: "Панель Юриста →",
    portalCardBusinessTitle: "Бизнесу и Компаниям",
    portalCardBusinessDesc: "Мгновенный редлайн-анализ договоров, проактивный комплаенс изменений в законодательстве и корпоративный RAG.",
    portalCardBusinessAction: "Кабинет Бизнеса →",
    portalCardAdminTitle: "Управление и Админ",
    portalCardAdminDesc: "Управление доступом сотрудников (RBAC), журнал системного аудита, безопасность и контроль API-ключей.",
    portalCardAdminAction: "Панель Админа →",
    
    featuresSectionTitle: "Мощные Возможности ИИ",
    featuresSectionSubtitle: "Идеальная синергия передовых языковых моделей и правового корпуса Узбекистана.",
    featRedlineTitle: "Автоматический Redline Анализ",
    featRedlineDesc: "Выявляет скрытые штрафы, несоразмерную ответственность и кабальные условия за 3 секунды.",
    featVerifierTitle: "Верификатор Lex.uz",
    featVerifierDesc: "Каждая рекомендация подкреплена ссылкой на конкретную действующую статью Кодексов РУз.",
    featCourtTitle: "Симулятор Судебной Стратегии",
    featCourtDesc: "Анализирует судебную практику Верховного Суда и оценивает шансы на победу по вашему делу.",
    featComplianceTitle: "Проактивный Комплаенс",
    featComplianceDesc: "Автоматически предупреждает, какие контракты требуют правок при выходе новых законов.",
    
    ctaBannerTitle: "Защитите свой бизнес и права уже сегодня",
    ctaBannerSubtitle: "Проверьте договоры и исключите юридические риски вместе с LegalOS.",
    navFeatures: "Возможности",
    navAudience: "Для кого",
    navSecurity: "Безопасность",

    // Banner
    proactiveAlertTitle: "Проактивное Оповещение",
    proactiveAlertText: "Обнаружены изменения в налоговом законодательстве:",
    proactiveAlertImpact: "Влияние: 14 договоров • 1 Учетная политика • 3 HR шаблона",
    reviewImpactBtn: "Посмотреть влияние",

    // Navigation & Tabs
    navMainProcesses: "Основные Процессы",
    navLegalChat: "Правовой ИИ Ассистент",
    navContracts: "Анализ Договоров (Redline)",
    navCourtSimulator: "Симулятор Судебной Стратегии",
    navCompliance: "Проактивный Комплаенс",
    navTimeMachine: "Машина Времени (История)",
    navMarketplace: "Маркетплейс Юристов",
    navWorkspace: "Управление Компанией & RBAC",
    navCases: "Управление Делами (Cases)",
    navResearch: "Глубокий Правовой Поиск",
    navBillingCRM: "Клиенты и Биллинг (CRM)",
    navInternalPolicies: "Внутренние Политики Компании",
    navAuditLogs: "Аудит Системы и Логи",
    navBilling: "Тарифы и Подписка",
    navApi: "API и Интеграции",
    activeAgentsTitle: "Активные ИИ-Агенты",

    // Chat
    orchestratorLabel: "Оркестр:",
    agentCivil: "📘 Гражданское Право",
    agentContracts: "📑 Договоры",
    agentVerifier: "✓ Проверка Lex.uz",
    sendBtn: "Отправить",
    chatInputPlaceholder: "Задайте вопрос по законам Узбекистана или укажите статью...",
    prompt1: "⚠️ Законна ли неустойка 50%?",
    prompt2: "👔 Порядок испытательного срока",
    prompt3: "🧾 Налоговые и фискальные чеки",

    // Contract Intelligence
    contractTitle: "Анализ Договоров & Редлайн Анализ",
    contractDocSubtitle: "Документ: Договор возмездного оказания IT-услуг № 42-UZ (с Global Supply Cloud LLC)",
    btnUploadContract: "Загрузить Договор",
    btnDownloadDocx: "Скачать DOCX",
    clausesListTitle: "Пункты Договора",
    clause1: "1. Предмет договора",
    clause2: "2. Стоимость услуг",
    clause3: "8.3. Ответственность",
    clause4: "9. Форс-мажор",
    clause5: "11. Конфиденциальность (NDA)",
    clauseSafe: "Безопасно",
    clauseHighRisk: "ВЫСОКИЙ РИСК",
    riskTitle: "Пункт 8.3 — Односторонняя несоразмерная ответственность",
    riskProblemLabel: "Проблема:",
    riskProblemText: "Пункт возлагает бремя ответственности исключительно на Заказчика. При просрочке со стороны Исполнителя ответственность отсутствует.",
    riskLegalBasisLabel: "Правовая Основа:",
    riskLegalBasisText: "Принцип соразмерности и равенства ответственности в предпринимательской деятельности",
    riskAiProposalLabel: "Предложение ИИ (Редлайн):",
    btnReject: "Отклонить",
    btnAcceptChange: "Принять Правку",
    liveContractVersion: "Текст Договора (Текущая Версия)",
    pendingReview: "Ожидает правки",
    verifiedSafeBadge: "Согласовано (Безопасно)",

    // Court Simulator
    caseSummaryTitle: "Судебное Участие & Case Workbench",
    caseTitle: "ДЕЛО № UZ-2048: ООО ABC Textile vs Поставщик LLC",
    caseSubtitle: "Межрайонный экономический суд г. Ташкента • Спор по поставке сырья на 180,000,000 сумов",
    evidenceStat: "📁 12 доказательств прикреплено",
    deadlineStat: "⏱️ 3 судебных дедлайна (14 октября)",
    missingDocStat: "⚠️ 2 недостающих документа",
    draftReadyStat: "✓ Проект иска готов",
    courtTitle: "ИИ Симулятор Судебной Стратегии",
    courtSubtitle: "Ваш довод ➔ Возможная защита оппонента ➔ Стресс-тест от Судьи",
    yourLawyerAiTitle: "Ваш Адвокат ИИ",
    yourPositionBadge: "Ваша позиция",
    opponentAiTitle: "Оппонент ИИ",
    opponentDefenseBadge: "Защита оппонента",
    judgeAiTitle: "Судья ИИ (Стресс-Тест)",
    judgeAssessmentBadge: "Оценка судьи",
    evidenceGapsTitle: "Выявленные Пробелы в Доказательствах:",
    hearingChecklistTitle: "Чек-лист Судебного Заседания:",
    btnResimulate: "Пересчитать Симуляцию",
    btnToSimulator: "Перейти к Симулятору ➔",

    // Compliance
    complianceTitle: "Система Проактивного Комплаенса",
    complianceSubtitle: "Не ждет запроса пользователя — связывает изменения Lex.uz с договорами компании в реальном времени.",
    btnUpdateAllContracts: "Обновить Все Затронутые Договоры",
    tableThAsset: "Затронутый Документ / Актив",
    tableThType: "Тип Документа",
    tableThRisk: "Уровень Риска",
    tableThAction: "Рекомендуемое Действие",
    tableThBtn: "Действие",

    // Time Machine
    timeMachineTitle: "Legal Time Machine (История Законов)",
    timeMachineSubtitle: "Юридический ответ учитывает редакцию закона именно на дату инцидента, а не только текущую норму.",
    disputeDateLabel: "ДАТА СПОРА / ИНЦИДЕНТА:",
    historicalVersionTitle: "Проверка Исторической Редакции",
    effectiveFromAware: "Учтены effective_from / effective_to",
    knowledgeGraphTitle: "Граф Нормативных Связей (Knowledge Graph)",

    // Citizen Portal
    citizenTitle: "Правовой ИИ Консультант для Граждан",
    citizenSubtitle: "Объясняет простым языком, ссылаясь на официальные нормы.",
    freeModeTitle: "Бесплатный Режим",
    freeModeDesc: "Вам доступно 15 бесплатных вопросов и генераций заявлений.",
    templatesTitle: "Генератор Готовых Заявлений и Шаблонов",
    templatesSubtitle: "Ответьте на несколько вопросов — LegalOS автоматически составит заявление.",
    findLawyerTitle: "Поиск и Связь с Юристом",
    findLawyerSubtitle: "Если вам требуется представитель в суде или заключение, выберите специалиста.",
    myDocumentsTitle: "Мои Документы и Запросы",
    myDocumentsSubtitle: "Архив сформированных заявлений и консультаций ИИ.",
    btnFillDoc: "Заполнить Заявление ➔",
    btnBookLawyer: "Записаться на Консультацию ➔",

    // Admin & Workspace
    adminPanelBtn: "Админ-Панель",
    navAdminDashboard: "Общая Панель (Дашборд)",
    navAdminUsers: "Пользователи и RBAC",
    navAdminLawyers: "Модерация Юристов",
    navAdminLexSync: "Синхронизация Lex.uz и RAG",
    navAdminAiModels: "ИИ Модели и Токены",
    navAdminAudit: "Безопасность и Аудит-лог",
    navAdminBilling: "Тарифы и Биллинг",
    navAdminApi: "API и Интеграции",
    adminPortalSwitcher: "Перейти в Порталы",
    btnSyncNow: "Синхронизировать Сейчас",
    btnCreateUserModal: "+ Новый Пользователь",
    workspaceTitle: "Сотрудники Организации и Роли (RBAC)",
    workspaceSubtitle: "Настройте права доступа для сотрудников или отправьте приглашение.",
    btnInviteMember: "+ Добавить Сотрудника",
    kpiUsers: "Активные Сотрудники",
    kpiContracts: "Проверенные Документы",
    kpiSecurity: "Показатель Безопасности",
    auditLogsTitle: "Аудит Системы и Журнал Безопасности (Audit Trail)",
    auditLogsSubtitle: "Каждое юридическое действие и анализ ИИ фиксируются в неизменяемом журнале.",
    billingTitle: "Тарифы и Подписка (Billing)",
    billingSubtitle: "Ваша компания работает по тарифу Business Plan.",
    apiTitle: "API Интеграция с Внешними Системами",
    apiSubtitle: "Подключите юридический интеллект LegalOS напрямую к 1С, HRM или ERP компании.",

    // Citation Drawer
    drawerOfficialLex: "Официальный Источник Lex.uz",
    drawerSourceDoc: "Документ-источник:",
    drawerArticleOfficial: "Текст Статьи (Официальная Редакция):",
    drawerVerifiedWith: "Сверено с базой Lex.uz",
    drawerOpenLex: "Открыть на Lex.uz ↗",
    closeBtn: "Закрыть"
  }
};

class LegalOS_I18n {
  constructor() {
    this.supportedLanguages = ['uz', 'ru'];
    this.currentLanguage = localStorage.getItem('legalos_lang') || 'uz';
    if (!this.supportedLanguages.includes(this.currentLanguage)) {
      this.currentLanguage = 'uz';
    }
  }

  getLang() {
    return this.currentLanguage;
  }

  t(key) {
    const dict = I18N_DICTIONARY[this.currentLanguage] || I18N_DICTIONARY['uz'];
    return dict[key] || I18N_DICTIONARY['uz'][key] || key;
  }

  setLang(lang) {
    if (!this.supportedLanguages.includes(lang)) return;
    this.currentLanguage = lang;
    localStorage.setItem('legalos_lang', lang);
    this.applyTranslations();
    this.updateSwitcherUI();
    window.dispatchEvent(new CustomEvent('legalos-lang-changed', { detail: { lang } }));
  }

  toggle() {
    const nextLang = this.currentLanguage === 'uz' ? 'ru' : 'uz';
    this.setLang(nextLang);
  }

  applyTranslations() {
    // 1. Text content replacement by data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.textContent = val;
      }
    });

    // 2. HTML content replacement by data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.t(key);
      if (val !== undefined && val !== null) {
        el.innerHTML = val;
      }
    });

    // 3. Placeholder replacement by data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val) {
        el.setAttribute('placeholder', val);
      }
    });

    // 4. Title attribute replacement by data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = this.t(key);
      if (val) {
        el.setAttribute('title', val);
      }
    });

    // 5. Update html lang attribute
    document.documentElement.setAttribute('lang', this.currentLanguage);
  }

  updateSwitcherUI() {
    document.querySelectorAll('.lang-btn-option').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLanguage) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Inject language switcher HTML component into a container
  renderSwitcher(targetContainerId) {
    const container = document.getElementById(targetContainerId);
    if (!container) return;

    container.innerHTML = `
      <div class="lang-switcher-pill" title="Tilni tanlang / Выберите язык">
        <button type="button" class="lang-btn-option ${this.currentLanguage === 'uz' ? 'active' : ''}" data-lang="uz" onclick="i18n.setLang('uz')">
          O‘Z
        </button>
        <button type="button" class="lang-btn-option ${this.currentLanguage === 'ru' ? 'active' : ''}" data-lang="ru" onclick="i18n.setLang('ru')">
          РУ
        </button>
      </div>
    `;
  }

  // Auto mount switchers into known containers or .lang-switcher-mount elements
  autoMount() {
    const targets = [
      'login-lang-switcher',
      'auth-lang-switcher',
      'citizen-lang-switcher',
      'lawyer-lang-switcher',
      'business-lang-switcher',
      'admin-lang-switcher',
      'index-lang-switcher',
      'lang-switcher'
    ];
    targets.forEach(id => {
      if (document.getElementById(id)) {
        this.renderSwitcher(id);
      }
    });

    document.querySelectorAll('.lang-switcher-mount').forEach((mountEl) => {
      if (!mountEl.id) {
        mountEl.id = 'mount-' + Math.random().toString(36).substring(2, 7);
      }
      this.renderSwitcher(mountEl.id);
    });
  }
}

// Global Singleton
const i18n = new LegalOS_I18n();
window.i18n = i18n;

// Auto apply translations and mount switchers on page load
document.addEventListener('DOMContentLoaded', () => {
  i18n.autoMount();
  i18n.applyTranslations();
  i18n.updateSwitcherUI();
});
