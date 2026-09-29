/* ==========================================================================
   LegalOS Uzbekistan - Application Reactive State Management
   ========================================================================== */

class AppState {
  constructor() {
    this.currentRole = 'ORG_ADMIN'; // Default role ('CITIZEN', 'LAWYER', 'ORG_MEMBER', 'ORG_ADMIN')
    this.activeTab = 'chat';        // Default active view
    this.selectedCitation = null;   // Active citation for side drawer
    this.contractRedlineAccepted = false;
    this.selectedClauseId = 'c3';   // Default to the 8.3-band high-risk clause
    this.timeMachineDate = '2024-03-17';
    this.impactDrawerOpen = false;
    this.listeners = [];

    // Preloaded chat messages demonstrating LegalOS capability
    this.chatMessages = [
      {
        id: "msg-1",
        sender: "user",
        time: "14:22",
        text: "Bizda xizmat ko'rsatish shartnomasida bir tomonlama 50% jarima belgilangan. Agar to'lov 1 kunga kechiksa, bajaruvchi shartnomani bekor qilishini aytyapti. Bu O'zbekiston qonunlariga to'g'rimi va buni qanday tahrir qilish kerak?"
      },
      {
        id: "msg-2",
        sender: "assistant",
        time: "14:22",
        agent: "AI Orchestrator (Contracts + Legal + Verifier)",
        text: `O‘zbekiston Respublikasi qonunchiligiga ko‘ra, bu band **yuqori xavfli (High Risk)** va noqonuniy hisoblanadi.

Asosiy xulosalar:
1. **Nomutanosiblik va tenglik printsipi:** Fuqarolik Kodeksiga muvofiq, bir tomonlama nomutanosib og‘ir shartlarni yuklash sud tartibida bekor qilinishi yoki jarima miqdori pasaytirilishi mumkin [FK-333].
2. **Kechiktirilgan 1 kun uchun 50% jarima:** Sud amaliyotida bunday jarima asossiz boylik orttirish deb baholanadi. Odatda shartnomalarda har bir kechiktirilgan kun uchun 0.1% dan 0.5% gacha (lekin umumiy summaning 10% idan oshmagan holda) penya belgilanadi.
3. **Tavsiya:** Bandni har ikki tomon uchun teng javobgarlik va jarima chegarasi (limit) bilan qayta yozish lozim.`,
        citations: ["FK-333"],
        verifierStamp: {
          verified: true,
          source: "Lex.uz (Fuqarolik Kodeksi 333-modda)",
          hash: "VER-98421-UZ"
        },
        hasContractAction: true
      }
    ];
  }

  // Subscribe to state changes
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  // Notify all listeners
  notify() {
    for (const listener of this.listeners) {
      listener(this);
    }
  }

  // Set User Role
  setRole(newRole) {
    this.currentRole = newRole;
    // Default appropriate landing view for each role
    if (newRole === 'CITIZEN') {
      this.activeTab = 'chat';
    } else if (newRole === 'LAWYER') {
      this.activeTab = 'court';
    } else if (newRole === 'ORG_MEMBER') {
      this.activeTab = 'contracts';
    } else if (newRole === 'ORG_ADMIN') {
      this.activeTab = 'workspace';
    }
    this.notify();
  }

  // Set Current Tab
  setActiveTab(tabId) {
    this.activeTab = tabId;
    this.notify();
  }

  // Open Citation Drawer
  openCitation(citationId) {
    if (LegalData.citations[citationId]) {
      this.selectedCitation = LegalData.citations[citationId];
      this.notify();
    }
  }

  // Close Citation Drawer
  closeCitation() {
    this.selectedCitation = null;
    this.notify();
  }

  // Accept Contract Redline
  acceptContractRedline() {
    this.contractRedlineAccepted = true;
    LegalData.contractSample.highlightedClause.accepted = true;
    this.notify();
  }

  // Add Chat Message
  addChatMessage(userText) {
    const userMsg = {
      id: "msg-" + Date.now(),
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: userText
    };
    this.chatMessages.push(userMsg);
    this.notify();

    // Simulate AI Multi-Agent & Verifier response after 900ms
    setTimeout(() => {
      let aiText = "";
      let citations = [];

      const lower = userText.toLowerCase();
      if (lower.includes("mehnat") || lower.includes("xodim") || lower.includes("sinov")) {
        aiText = `Mehnat Kodeksiga muvofiq, xodim bilan mehnat shartnomasini bekor qilish yoki sinov muddati belgilashda [MK-161] talablariga qat'iy rioya qilinishi shart. Xodimga kamida 2 hafta oldin yozma xabarnoma berilishi kafolatlangan.`;
        citations = ["MK-161"];
      } else if (lower.includes("soliq") || lower.includes("chek") || lower.includes("jarima")) {
        aiText = `Soliq kodeksining yangilangan tahririga muvofiq [SK-227], fiskal cheklar va integratsiya qoidalari buzilganida dastlabki ogohlantirish va belgilangan stavkada moliyaviy sanksiya qo'llaniladi.`;
        citations = ["SK-227"];
      } else {
        aiText = `Savolingiz qabul qilindi. AI Orchestrator tegishli agentlarni (Legal, Research va Verifier) jalb qildi. Qonunchilik normalari va sud amaliyoti tahlil qilindi [FK-333]. Hujjat loyihasini yaratish yoki Contract Analyzer'ga yuklash mumkin.`;
        citations = ["FK-333"];
      }

      this.chatMessages.push({
        id: "msg-" + (Date.now() + 1),
        sender: "assistant",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        agent: "AI Orchestrator (Legal & Verifier)",
        text: aiText,
        citations: citations,
        verifierStamp: {
          verified: true,
          source: "Lex.uz bazasi bilan solishtirildi",
          hash: "VER-" + Math.floor(10000 + Math.random() * 90000) + "-UZ"
        }
      });
      this.notify();
    }, 850);
  }
}

// Global state singleton
const appState = new AppState();
