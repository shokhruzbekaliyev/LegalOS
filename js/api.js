/* ==========================================================================
   ELAW — Backend API klienti (Spring Boot, /api/v1)
   Manzilni o'zgartirish: sahifada  window.LEGALOS_API_BASE = 'https://api.example.uz'
   ========================================================================== */

const API_BASE = window.LEGALOS_API_BASE || 'http://localhost:8090';

const ROLE_PORTAL = {
  CITIZEN: 'citizen.html',
  LAWYER: 'lawyer.html',
  ORG_MEMBER: 'business.html',
  ORG_ADMIN: 'admin.html'
};

async function apiFetch(path, { method = 'GET', body, auth = true } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const token = sessionStorage.getItem('legalos_token');
  if (auth && token) headers.Authorization = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${API_BASE}/api/v1${path}`, { method, headers, body: body ? JSON.stringify(body) : undefined });
  } catch (e) {
    throw new Error(`Serverga ulanib bo‘lmadi (${API_BASE}). Backend ishlayotganini tekshiring.`);
  }
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    if (res.status === 401 && auth) { sessionStorage.clear(); }
    throw new Error((data && data.message) || `Xatolik (${res.status})`);
  }
  return data;
}

const Auth = {
  /** Server javobini (token, rol, ism) brauzer sessiyasiga yozadi — portal himoyasi shu kalitlarni o'qiydi. */
  saveSession(auth) {
    sessionStorage.setItem('legalos_token', auth.token);
    sessionStorage.setItem('legalos_role', auth.role);
    sessionStorage.setItem('legalos_username', auth.fullName);
    sessionStorage.setItem('legalos_email', auth.email);
    sessionStorage.setItem('legalos_is_authenticated', 'true');
  },
  portalFor(role) { return ROLE_PORTAL[role] || 'citizen.html'; },

  async login(email, password) {
    const auth = await apiFetch('/auth/login', { method: 'POST', body: { email, password }, auth: false });
    this.saveSession(auth);
    return auth;
  },

  async register({ email, password, fullName, role }) {
    const auth = await apiFetch('/auth/register', { method: 'POST', body: { email, password, fullName, role }, auth: false });
    this.saveSession(auth);
    return auth;
  },

  /** Fuqaro/yurist kompaniya yaratadi va ORG_ADMIN bo'ladi (server yangi token qaytaradi). */
  async createWorkspace(name, type = 'BUSINESS') {
    const res = await apiFetch('/workspaces', { method: 'POST', body: { name, type } });
    this.saveSession(res.auth);
    return res;
  }
};

/** Login/ro'yxatdan o'tish oqimi: rolga qarab to'g'ri backend chaqiruvlarini bajaradi. */
Auth.submit = async function (mode, role, fullName, email, password) {
  if (mode === 'login') return this.login(email, password);

  if (role === 'ORG_MEMBER') {
    throw new Error('Xodim hisobini kompaniya admini yaratadi. Admin sizga login va parol beradi — "Tizimga kirish" orqali kiring.');
  }
  if (role === 'ORG_ADMIN') {
    const company = (window.prompt('Kompaniya nomini kiriting:') || '').trim();
    if (!company) throw new Error('Kompaniya nomi kiritilmadi.');
    await this.register({ email, password, fullName, role: 'CITIZEN' });
    return (await this.createWorkspace(company)).auth;
  }
  return this.register({ email, password, fullName, role });
};
