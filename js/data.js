/* ==========================================================================
   LegalOS Uzbekistan - Mock Legal Data & Datasets
   All data structured for Spring Boot Backend & FastAPI Agent ingestion
   ========================================================================== */

const LegalData = {
  // 1. Lex.uz Articles & Citation Database
  citations: {
    "FK-333": {
      code: "FK 333-modda",
      title: "Majburiyatlarni buzganlik uchun javobgarlik asoslari",
      source: "O‘zbekiston Respublikasi Fuqarolik Kodeksi",
      status: "Amalda (O‘zgarishsiz)",
      effectiveDate: "1997-03-01",
      lexUrl: "https://lex.uz/docs/111189#111745",
      summary: "Qarzdor majburiyatni bajarmagan yoki lozim darajada bajarmagan taqdirda, agar qonunchilikda yoki shartnomada boshqacha tartib nazarda tutilmagan bo‘lsa, aybi bo‘lgandagina javobgar bo‘ladi. Tadbirkorlik faoliyatini amalga oshirishda majburiyatni bajarmagan shaxs, agar yengib bo‘lmas kuch (fors-major) oqibatida ekanligini isbotlay olmasa, javobgar bo‘ladi.",
      verifierVerified: true,
      lastChecked: "2026-09-29 08:30"
    },
    "MK-161": {
      code: "MK 161-modda",
      title: "Mehnat shartnomasini ish beruvchining tashabbusi bilan bekor qilish asoslari",
      source: "O‘zbekiston Respublikasi Mehnat Kodeksi (Yangi tahrir)",
      status: "Amalda (2023-yil 30-apreldan kuchga kirgan)",
      effectiveDate: "2023-04-30",
      lexUrl: "https://lex.uz/docs/6257288#6262431",
      summary: "Mehnat shartnomasi quyidagi asoslarga ko‘ra bekor qilinishi mumkin: texnologiya, ishlab chiqarish va mehnatni tashkil etishdagi o‘zgarishlar, xodimlar soni (shtati) qisqarganligi yoki korxonaning tugatilganligi munosabati bilan...",
      verifierVerified: true,
      lastChecked: "2026-09-29 11:15"
    },
    "SK-227": {
      code: "SK 227-1-modda",
      title: "Fiskal belgilarni aks ettirish yoki xarid cheklarini bermaslik uchun javobgarlik",
      source: "O‘zbekiston Respublikasi Soliq Kodeksi",
      status: "Amalda (Oxirgi tahrir 2026-yil)",
      effectiveDate: "2024-01-01",
      lexUrl: "https://lex.uz/docs/4674902",
      summary: "Fiskal belgilarni aks ettirmasdan yoki elektron to‘lov tizimlari bilan integratsiyasiz savdo va xizmat ko‘rsatish jarayonida jarima sanksiyalari qo‘llanilishi shartlari belgilangan.",
      verifierVerified: true,
      lastChecked: "2026-09-29 09:00"
    }
  },

  // 2. Active AI Specialist Agents
  agents: [
    { id: "legal", name: "Legal", desc: "Umumiy huquq", active: true, color: "#2563eb" },
    { id: "tax", name: "Tax", desc: "Soliq", active: true, color: "#059669" },
    { id: "contracts", name: "Contracts", desc: "Shartnoma", active: true, color: "#7c3aed" },
    { id: "court", name: "Court", desc: "Sud", active: false, color: "#f59e0b" },
    { id: "research", name: "Research", desc: "Deep research", active: true, color: "#0891b2" },
    { id: "compliance", name: "Compliance", desc: "Monitoring", active: true, color: "#16a34a" },
    { id: "documents", name: "Documents", desc: "Drafting", active: false, color: "#475569" },
    { id: "corporate", name: "Corporate", desc: "Korporativ", active: false, color: "#4f46e5" },
    { id: "hr", name: "HR Law", desc: "Mehnat", active: false, color: "#ea580c" },
    { id: "verifier", name: "Verifier", desc: "Citation check", active: true, color: "#10b981" }
  ],

  // 3. Contract Sample & Clause Redline Data
  contractSample: {
    id: "CONT-2026-042",
    title: "Axborot-texnologiyalari xizmatlari ko‘rsatish shartnomasi",
    client: "ABC Textile MCHJ",
    counterparty: "Global Supply Cloud LLC",
    date: "2026-09-20",
    status: "Ko'rib chiqilmoqda (Review required)",
    riskScore: "High (1 ta jiddiy xavf)",
    clauses: [
      { id: "c1", num: "1-band", title: "Shartnoma predmeti", risk: "LOW" },
      { id: "c2", num: "2-band", title: "Xizmatlar qiymati va hisob-kitoblar", risk: "LOW" },
      { id: "c3", num: "8.3-band", title: "Bir tomonlama javobgarlik", risk: "HIGH", hasRisk: true },
      { id: "c4", num: "9-band", title: "Fors-major va nizolarni hal qilish", risk: "LOW" },
      { id: "c5", num: "11-band", title: "Maxfiylik (NDA)", risk: "LOW" }
    ],
    highlightedClause: {
      num: "8.3-band — Tomonlarning javobgarligi",
      originalText: "Agar Buyurtmachi to‘lovni 1 (bir) kun kechiktirsa, Bajaruvchi shartnomani darhol bir tomonlama bekor qilishga va Buyurtmachidan shartnoma umumiy summasining 50 foizi miqdorida jarima hamda barcha yetkazilgan zararlarni to‘liq qoplashni talab qilishga haqli. Bajaruvchi tomonidan xizmatlar kechiktirilganda esa hech qanday jarima qo‘llanilmaydi.",
      problem: "Band majburiyat va kompensatsiya yukini asosan bir tomonga (Buyurtmachiga) yuklaydi. Bajaruvchi uchun esa javobgarlik butunlay istisno qilingan.",
      legalBasis: "O‘zbekiston Respublikasi FK 333-moddasi va 327-moddasi. Fuqarolik qonunchiligida tomonlarning tengligi va nomutanosib jarimalarni kamaytirish huquqi kafolatlangan.",
      citationRef: "FK-333",
      aiSuggestedEdit: "Agar Tomonlardan biri o‘z majburiyatlarini bajarmasa yoki lozim darajada bajarmasa, aybdor Tomon ikkinchi Tomonga har bir kechiktirilgan kun uchun kechiktirilgan majburiyat qiymatining 0.1% miqdorida penya to‘laydi, biroq umumiy penya summasi shartnoma summasining 10% idan oshmasligi shart. Barcha hollarda har ikki tomon uchun teng javobgarlik choralari qo‘llaniladi.",
      accepted: false
    }
  },

  // 4. Court Case & Strategy Simulator Data
  courtSimulator: {
    caseId: "CASE #UZ-2048",
    title: "ABC Textile vs Supplier LLC (Xomashyo yetkazib berishdagi kechikish)",
    stats: {
      evidenceCount: 12,
      deadlinesCount: 3,
      missingDocs: 2,
      claimDraftReady: true
    },
    simulator: {
      lawyerAI: {
        agent: "Your Lawyer AI",
        tag: "Sizning asosiy argumentingiz",
        text: "Supplier LLC 2026-yil 12-avgustdagi shartnoma bo‘yicha 40 tonna paxta tolasini o‘z vaqtida yetkazib bermagan. Natijada korxona konveyeri 5 kunga to‘xtab, 180,000,000 so‘m to‘g‘ridan-to‘g‘ri zarar ko‘rildi. Dalil sifatida bank to‘lov topshirig‘i va kassa xarajatlari orderlari ilova qilindi.",
        citation: "FK-333"
      },
      opponentAI: {
        agent: "Opponent AI",
        tag: "Qarshi tomonning ehtimoliy himoyasi",
        text: "Kechikish temir yo‘l logistikasidagi rasmiy blokirovka (bojxona nazorati) tufayli sodir bo‘lganini va bu shartnomaning 9.1-bandiga ko‘ra fors-major holati deb topilishini da’vo qiladi. Shuningdek, 180 mln so‘m zararning hisob-kitob metodikasi bahsli deb ta’kidlanadi."
      },
      judgeAI: {
        agent: "Judge AI (Stress-Test)",
        tag: "Sudya nuqtai nazaridan tekshiruv va kamchiliklar",
        status: "E'tibor talab bo'shliqlar aniqlandi",
        findings: [
          "1. Qarshi tomon bojxonadan fors-major sertifikatini (SSP ma'lumotnomasini) taqdim eta oladimi? Sud buni qat'iy talab qiladi.",
          "2. 180,000,000 so‘m zarar bo‘yicha mustaqil auditor yoki buxgalteriya ekspertizasi xulosasi yetishmayapti.",
          "3. Shartnomada nazarda tutilgan 10 kunlik nizoni sudsiz hal qilish (talabnoma) xati jo'natilganligini tasdiqlovchi pochta kvitansiyasi mavjud emas."
        ],
        checklist: [
          "Savdo-sanoat palatasi orqali fors-major asossizligini tekshirish",
          "Zararni hisoblash dalil hujjati (Buxgalteriya akti)ni ilova qilish",
          "Da'vo arizasiga elektron pochta xabarnomasi keshini qo'shish"
        ]
      }
    }
  },

  // 5. Proactive Compliance Alerts
  complianceAlert: {
    id: "COMP-2026-09",
    active: true,
    title: "Soliq qonunchiligida o‘zgarish aniqlandi",
    category: "Soliq va buxgalteriya",
    source: "Lex.uz (O‘zR Qonuni № O‘RQ-954)",
    dateDetected: "2026-09-28 22:40",
    summary: "2026-yil 1-oktyabrdan boshlab korxonalar o‘rtasida xizmat ko‘rsatish shartnomalarida elektron hisob-faktura (EHF) va fiskal rekvizitlarni kiritish majburiy tartibga aylandi.",
    impactSummary: "Ta’sir: 14 ta shartnoma • 1 ta Accounting Policy • 3 ta HR template",
    affectedAssets: [
      { name: "Axborot xizmatlari shartnomasi #42", type: "Shartnoma", risk: "Medium", action: "EHF bandi qo'shish" },
      { name: "Ijara shartnomasi (Bosh ofis)", type: "Shartnoma", risk: "Medium", action: "Fiskal modul kiritish" },
      { name: "Kompaniya ichki hisob siyosati 2026", type: "Policy", risk: "High", action: "Tahrir kiritish" },
      { name: "Xodimlarni mukofotlash tartibi (HR)", type: "HR Template", risk: "Low", action: "Soliq stavkasi yangilash" }
    ]
  },

  // 6. Legal Time Machine (Historical Versioning)
  timeMachineData: {
    selectedDate: "2024-03-17",
    article: "MK 161-modda (Mehnat Kodeksi)",
    versionAtDate: {
      date: "2024-yil 17-mart",
      effectiveFrom: "2023-04-30",
      effectiveTo: "2025-01-01",
      editionName: "Yangi tahrir (2023-yilgi qabul qilingan matn)",
      content: "Xodim bilan mehnat shartnomasini bekor qilish to‘g‘risida kamida 2 hafta oldin yozma ogohlantirish berilishi kerak. Ushbu muddat davomida xodimga boshqa ish qidirish uchun haftasiga kamida bir kun ish haqi saqlangan holda bo‘sh vaqt beriladi.",
      citationAware: "effective_from / effective_to metadata orqali AI aynan o‘sha sanadagi tahrirni topdi."
    }
  },

  // 7. Yurist Marketplace Directory
  lawyers: [
    {
      id: "law-1",
      name: "Sardor Rahimov",
      title: "Katta Yuridik Maslahatchi",
      specialty: "Korporativ huquq & Shartnomalar",
      experience: "9 yil tajriba",
      rating: "4.9 (124 ta case)",
      region: "Toshkent shahri",
      verified: true,
      price: "350,000 UZS / konsultatsiya"
    },
    {
      id: "law-2",
      name: "Nilufar Karimova",
      title: "Soliq Yuristi va Auditor",
      specialty: "Soliq nizolari & Compliance",
      experience: "12 yil tajriba",
      rating: "5.0 (88 ta case)",
      region: "Toshkent / Masofaviy",
      verified: true,
      price: "450,000 UZS / konsultatsiya"
    },
    {
      id: "law-3",
      name: "Jamshid Aliyev",
      title: "Sud Advokati (Litigator)",
      specialty: "Iqtisodiy sudlar & Arbitraj",
      experience: "15 yil tajriba",
      rating: "4.8 (210 ta case)",
      region: "Samarqand / Toshkent",
      verified: true,
      price: "500,000 UZS / konsultatsiya"
    }
  ],

  // 8. Workspace Members & RBAC
  teamMembers: [
    { id: "u-1", name: "Azamat Usmonov", email: "azamat@abctextile.uz", role: "ORG_ADMIN", title: "Bosh Yuridik Maslahatchi", status: "Active" },
    { id: "u-2", name: "Malika Saidova", email: "malika.hr@abctextile.uz", role: "ORG_MEMBER", title: "HR Bo'limi Boshlig'i", status: "Active" },
    { id: "u-3", name: "Bekzod Qosimov", email: "bekzod@abctextile.uz", role: "ORG_MEMBER", title: "Moliyaviy Nazoratchi", status: "Active" }
  ]
};
