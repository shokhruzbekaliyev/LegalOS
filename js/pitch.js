// AI-chat namunalari va "Nusxa" tugmalari. Bu jonli model emas — prototip namunalari.
const SAMPLES = [
  {
    q: "Shartnomada kechikkan to'lov uchun bir tomonlama og'ir jarima belgilangan. Bu muammomi?",
    agent: "AI Orchestrator · Contracts + Legal + Verifier",
    a: `Bu band <b>yuqori xavfli</b> deb baholanadi: javobgarlik faqat bir tomonga yuklangan. Fuqarolik qonunchiligida nomutanosib jarima sud tartibida kamaytirilishi mumkin <span class="cite">FK-333</span>.<br><br><b>Tavsiya:</b> bandni ikki tomonlama javobgarlik va jarima chegarasi (limit) bilan qayta yozing — tizim tayyor redline variantini taklif qiladi.`,
    seal: "Verifier: manba tasdiqlandi · rasmiy manba"
  },
  {
    q: "Qonun o'zgarsa, qaysi hujjatlarim ta'sirlanishini qanday bilaman?",
    agent: "Compliance Engine",
    a: `Siz so'ramasangiz ham tizim o'zi kuzatadi: <b>Rasmiy platformadagi qonun o'zgarishi aniqlanadi → eski va yangi tahrir solishtiriladi → kompaniya hujjatlari bilan moslashtiriladi.</b><br><br>Natija ogohlantirish ko'rinishida chiqadi, masalan: «Ta'sir: 14 ta shartnoma · 1 ta Accounting Policy · 3 ta HR template» va har biri uchun tuzatish taklifi.`,
    seal: "Verifier: o'zgarish manbasi tasdiqlandi"
  },
  {
    q: "Ariza yozishim kerak, lekin qanday boshlashni bilmayman.",
    agent: "Documents agent",
    a: `Tizim bir necha oddiy savol beradi (kim, kimga, nima haqida, qaysi asosda) va ma'lumotlaringiz asosida <b>ariza loyihasini</b> tayyorlaydi. Har bir huquqiy asos manbaga bog'lanadi <span class="cite">Rasmiy manba</span>.<br><br>Loyiha tayyor bo'lgach, uni tahrirlab yuklab olishingiz yoki real yuristga ko'rsatishingiz mumkin.`,
    seal: "Verifier: asoslar tekshirildi"
  },
  {
    q: "Ishim murakkab — AI yetarlimi, yurist kerakmi?",
    agent: "Human handoff",
    a: `AI hal qila olmaydigan joyda siz ishni yo'qotmaysiz. ELAW <b>tayyor case paketini</b> yig'adi — muammo, manbalar, xronologiya va hujjatlar — va mutaxassisligi hamda hududiga mos yuristni tanlaydi.<br><br>Yurist noldan boshlamaydi: maslahat, billing va keyingi kuzatuv bir platformada qoladi.`,
    seal: "Case paketi yig'ildi"
  }
];

const qs = document.getElementById('qs');
const msgs = document.getElementById('msgs');

function show(i) {
  const s = SAMPLES[i];
  [...qs.children].forEach((b, j) => b.classList.toggle('on', j === i));
  msgs.innerHTML = '';
  const u = document.createElement('div');
  u.className = 'bub u'; u.textContent = s.q;
  msgs.appendChild(u);
  const t = document.createElement('div');
  t.className = 'bub a'; t.innerHTML = '<div class="dots"><span></span><span></span><span></span></div>';
  msgs.appendChild(t);
  setTimeout(() => {
    t.innerHTML = `<div class="agent">${s.agent}</div>${s.a}<br><span class="seal">✔ ${s.seal}</span>`;
  }, 700);
}

if (qs) {
  SAMPLES.forEach((s, i) => {
    const b = document.createElement('button');
    b.className = 'q'; b.type = 'button'; b.textContent = s.q;
    b.addEventListener('click', () => show(i));
    qs.appendChild(b);
  });
}

document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.parentElement.innerText.replace(/^Nusxa\s*/, '');
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = 'Nusxalandi ✓';
      setTimeout(() => (btn.textContent = 'Nusxa'), 1500);
    });
  });
});

// Jamoa rasmlari: assets/team/ ichida fayl bo'lsa ko'rsatiladi, bo'lmasa bosh harflar qoladi.
document.querySelectorAll('[data-photo]').forEach((el) => {
  const img = new Image();
  img.onload = () => { el.style.backgroundImage = `url("${el.dataset.photo}")`; el.classList.add('has-photo'); };
  img.src = el.dataset.photo;
});
