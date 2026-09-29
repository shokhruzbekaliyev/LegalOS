# LegalOS Uzbekistan — Web Client (Frontend)

O‘zbekiston qonunchiligiga ixtisoslashgan to‘liq AI yuridik operatsion tizimi (LegalOS)ning veb foydalanuvchi interfeysi (UI).

---

## 🎨 Dizayn Tizimi (Color Palette & Tokens)
Foydalanuvchi talabiga asosan interfeys **Ko‘k**, **Oq** va **Yashil** ranglar uyg‘unligida ishlab chiqildi:
* **Ko‘k (Royal Blue & Navy - `#2563eb`, `#1d4ed8`, `#0f172a`):** Jiddiylik, adolat va texnologik LegalTech poydevori.
* **Oq (Pure White & Clean Slate - `#ffffff`, `#f8fafc`):** Aniq, chalg‘itmaydigan qonuniy matnlar va kartalar.
* **Yashil (Emerald Green & Verified Stamp - `#10b981`, `#059669`):** Lex.uz bilan 100% verifikatsiya, xavfsiz bandlar, tasdiqlangan huquqiy normalar.

---

## 🚀 Qamrab Olingan Asosiy Modullar
1. **Foydalanuvchi Rollari (RBAC):**
   * `CITIZEN` (Oddiy fuqaro)
   * `LAWYER` (Mustaqil yurist)
   * `ORG_MEMBER` (Kompaniya xodimi)
   * `ORG_ADMIN` (Kompaniya bosh yurist/admini)
2. **Legal AI Chat & Research:** Manba havolalari (`[FK 333-modda]`, `[MK 161-modda]`), verifikatsiya muhri (Verifier Seal), yon panelda ochiluvchi Lex.uz drawer.
3. **Contract Intelligence & Redline:** Xavfli bandlarni aniqlash (`HIGH RISK: 8.3-band`), qizil va yashil solishtirma diff, "Accept Change" tugmasi.
4. **AI Court Strategy Simulator:** 3 tomonlama simulyator (`Your Lawyer AI` ➔ `Opponent AI` ➔ `Judge AI stress-test`).
5. **Proactive Compliance Engine:** Lex.uz qonun o‘zgarishi bildirishnomasi, ta’sirlangan shartnomalar ro‘yxati va avto-tuzatish.
6. **Legal Time Machine:** Tarixiy sanalar bo‘yicha (`effective_from` / `effective_to`) tahrirni retrieval qilish va Knowledge Graph xaritasi.
7. **Human Yurist Marketplace:** AI yecholmaydigan holatlarda tayyor case paketi bilan real advokatga uzatish (Human handoff).
8. **Workspace & RBAC:** Kompaniya xodimlarining ruxsatnomalari va audit jurnali.

---

## 📂 Fayllar Strukturasi
```
legalos-web/
├── index.html            # Asosiy SPA sahifasi (barcha modullar bilan)
├── serve.py              # Mahalliy test qilish uchun Python HTTP server
├── css/
│   ├── variables.css     # Ranglar (Ko'k, Oq, Yashil), shriftlar va radiuslar
│   ├── base.css          # Reset, tugmalar, kartalar, yorliqlar
│   ├── layout.css        # Header, sidebar, proaktiv banner
│   ├── components.css    # Citations, verifier seal, redline diff, modal/drawer
│   └── views.css         # 7 ta modulning maxsus dizaynlari
└── js/
    ├── data.js           # Lex.uz normalari, shartnomalar, case'lar dataseti
    ├── state.js          # Reaktiv holat (Role, tab, chat, redline)
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
Ilovani mahalliy kompyuteringizda ishga tushirish uchun quyidagi usullardan birini tanlang:

### 1-usul: Python Server bilan (Tavsiya etiladi)
```bash
cd legalos-web
python serve.py
```
Brauzerda oching: **`http://localhost:3000`**

### 2-usul: To'g'ridan-to'g'ri brauzerda ochish
`index.html` faylini istalgan zamonaviy brauzerda (Chrome, Edge, Safari) ikki marta bosib ochishingiz mumkin.
