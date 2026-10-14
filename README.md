# LegalOS Uzbekistan — Web Client (Frontend)

O‘zbekiston qonunchiligiga ixtisoslashgan to‘liq AI yuridik operatsion tizimi (LegalOS)ning veb foydalanuvchi interfeysi (UI).

---

## 🎨 Dizayn Tizimi (Color Palette & Tokens)
Interfeys **Ko‘k**, **Oq** va **Yashil** ranglar uyg‘unligida ishlab chiqilgan:
* **Ko‘k (Royal Blue & Navy - `#2563EB`, `#1D4ED8`, `#0F172A`):** Jiddiylik, adolat va texnologik LegalTech poydevori.
* **Oq (Pure White & Clean Slate - `#FFFFFF`, `#F8FAFC`):** Aniq, chalg‘itmaydigan qonuniy matnlar va kartalar.
* **Yashil (Emerald Green & Verified Stamp - `#10B981`, `#059669`):** Lex.uz bilan 100% verifikatsiya, xavfsiz bandlar, tasdiqlangan huquqiy normalar.

---

## 🔐 Alohida Sahifalar va Avtorizatsiya Tizimi (Multi-Portal Architecture)

Loyiha har bir foydalanuvchi toifasi uchun **alohida to‘liq HTML oynalariga** va markazlashtirilgan avtorizatsiyaga ega:

| Sahifa | Maqsad | Foydalanuvchi Toifasi | Asosiy Xususiyatlar |
| :--- | :--- | :--- | :--- |
| **`templates/login.html`** | **Avtorizatsiya Portali** | Barcha rollar | 4 ta rolni tanlash, 1-Click tezkor Demo kirish, OneID davlat integratsiyasi, Login/Parol |
| **`templates/citizen.html`** | **Fuqaro Portali** | `CITIZEN` | Oddiy huquqiy AI yordamchi, tayyor arizalar va shablonlar (mehnat, iste'molchi, qarz), yurist topish |
| **`templates/lawyer.html`** | **Yurist Workbench** | `LAWYER` | Case management (12 ta dalil, 3 deadline), AI Court Strategy Simulator (3-Agent), sud amaliyoti, billing CRM |
| **`templates/business.html`** | **Biznes Portali** | `ORG_MEMBER` | Contract Intelligence, High-risk 8.3-band redline diff, Proaktiv Compliance alertlari, Ichki siyosat RAG |
| **`templates/admin.html`** | **Tashkilot Admini** | `ORG_ADMIN` | Xodimlar va RBAC huquqlari, tizim audit jurnali (Audit trail), tariflar va obuna, API tokenlar |
| **`templates/studio.html`** | **AI Studio (Universal SPA)** | Barchasi | 7 ta modulni bitta boshqaruv panelida birlashtirgan dinamik SPA ko‘rinishi |

---

## 📂 Loyiha Fayllar Strukturasi
```
legalos-web/
├── templates/            # Barcha HTML sahifalar
│   ├── index.html        # Landing sahifa (bosh sahifa)
│   ├── login.html        # Avtorizatsiya portali (Role switcher, Demo login, OneID)
│   ├── register.html     # Ro'yxatdan o'tish
│   ├── citizen.html      # Fuqarolar uchun maxsus kabinet
│   ├── lawyer.html       # Mustaqil yuristlar uchun sud & case workbench
│   ├── business.html     # Kompaniya xodimlari uchun shartnomalar & compliance
│   ├── admin.html        # Tashkilot admini uchun RBAC & audit boshqaruvi
│   └── studio.html       # AI Studio (7 modulli SPA dashboard)
├── assets/               # Rasmlar
├── serve.py              # Mahalliy test serveri
├── css/
│   ├── auth.css          # Login va ro'yxatdan o'tish dizayni
│   ├── variables.css     # Ranglar (Ko'k, Oq, Yashil), shriftlar va radiuslar
│   ├── base.css          # Reset, tugmalar, kartalar
│   ├── layout.css        # Header, sidebar, proaktiv banner
│   ├── components.css    # Citations, verifier seal, redline diff, drawer
│   └── views.css         # 7 ta modulning maxsus ko'rinishlari
└── js/
    ├── data.js           # Lex.uz normalari, shartnoma va case'lar dataseti
    ├── state.js          # Reaktiv holat (Role, Tab, Redline, Chat)
    ├── components.js     # Dinamik renderlar (SVG Graph, iqtiboslar, toast)
    └── app.js            # Asosiy controller va event listenerlar
```

---

## 🔗 Backend (Spring Boot) va AI (FastAPI) bilan Integratsiya Nuqtalari
Sheriklaringiz bilan ulash uchun quyidagi REST API endpointlar ko‘zda tutilgan:
* `POST /api/v1/auth/login` va `POST /api/v1/auth/refresh` — JWT va rollar (`CITIZEN`, `LAWYER`, `ORG_MEMBER`, `ORG_ADMIN`).
* `POST /api/v1/ai/chat/stream` — SSE orqali AI orkestratsiya va iqtiboslar.
* `POST /api/v1/contracts/analyze` — Shartnomani (DOCX/PDF) yuklash va risk/redline tahlili.
* `POST /api/v1/court/simulate` — Sud strategiyasini simulyatsiya qilish.
* `GET /api/v1/compliance/impacts` — Lex.uz qonun o‘zgarishlarining ta’sir tahlili.
* `GET /api/v1/legal/timemachine?article={code}&date={YYYY-MM-DD}` — Tarixiy tahrir.

---

## ⚡ Qanday Ishga Tushiriladi?
```bash
python serve.py
```
Brauzerda quyidagi manzillarga kirishingiz mumkin:
* Avtorizatsiya: **`http://localhost:3000/login.html`**
* Fuqaro: **`http://localhost:3000/citizen.html`**
* Yurist: **`http://localhost:3000/lawyer.html`**
* Biznes: **`http://localhost:3000/business.html`**
* Admin: **`http://localhost:3000/admin.html`**
* Bosh sahifa: **`http://localhost:3000/index.html`**
