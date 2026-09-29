/* ==========================================================================
   LegalOS Uzbekistan - Main Controller Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize App
  initApp();
});

function initApp() {
  // 1. Initial State Render
  renderAll();

  // 2. Subscribe to State Changes
  appState.subscribe((state) => {
    renderOnStateChange(state);
  });

  // 3. Render Knowledge Graph
  const graphCanvas = document.getElementById('knowledge-graph-canvas');
  if (graphCanvas) {
    graphCanvas.innerHTML = UIComponents.renderKnowledgeGraphSVG();
  }

  // 4. Render Lawyers Grid
  renderLawyers();

  // 5. Render Workspace Members
  renderWorkspaceMembers();

  // 6. Setup Global Search Input
  setupSearch();
}

// Render everything on state change
function renderOnStateChange(state) {
  // 1. Update Tabs Visibility
  const viewContainers = document.querySelectorAll('.view-container');
  viewContainers.forEach((container) => {
    container.classList.remove('active');
  });

  const activeView = document.getElementById(`view-${state.activeTab}`);
  if (activeView) {
    activeView.classList.add('active');
  }

  // 2. Update Sidebar Active Button
  const navBtns = document.querySelectorAll('.nav-item-btn');
  navBtns.forEach((btn) => {
    if (btn.dataset.tab === state.activeTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 3. Update Role Switcher Buttons & Header
  updateRoleDisplay(state.currentRole);

  // 4. Render Chat Messages
  renderChatMessages(state.chatMessages);

  // 5. Update Citation Drawer
  updateCitationDrawer(state.selectedCitation);

  // 6. Update Contract Status if accepted
  if (state.contractRedlineAccepted) {
    updateContractAcceptedUI();
  }
}

// Initial full render
function renderAll() {
  renderOnStateChange(appState);
}

// Update Role Display
function updateRoleDisplay(role) {
  const roleButtons = document.querySelectorAll('.role-tab-btn');
  roleButtons.forEach((btn) => {
    if (btn.dataset.role === role) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const userAvatar = document.getElementById('header-avatar');
  const userName = document.getElementById('header-username');
  const userRole = document.getElementById('header-userrole');

  if (role === 'CITIZEN') {
    userAvatar.textContent = 'OF';
    userAvatar.style.background = 'linear-gradient(135deg, #3b82f6, #0284c7)';
    userName.textContent = 'Otabek Fayzullayev';
    userRole.textContent = 'CITIZEN • Fuqaro rejimi';
  } else if (role === 'LAWYER') {
    userAvatar.textContent = 'SR';
    userAvatar.style.background = 'linear-gradient(135deg, #1d4ed8, #2563eb)';
    userName.textContent = 'Sardor Rahimov';
    userRole.textContent = 'LAWYER • Mustaqil Advokat';
  } else if (role === 'ORG_MEMBER') {
    userAvatar.textContent = 'MS';
    userAvatar.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    userName.textContent = 'Malika Saidova';
    userRole.textContent = 'ORG_MEMBER • HR Boshlig‘i';
  } else if (role === 'ORG_ADMIN') {
    userAvatar.textContent = 'AU';
    userAvatar.style.background = 'linear-gradient(135deg, #1e40af, #047857)';
    userName.textContent = 'Azamat Usmonov';
    userRole.textContent = 'ORG_ADMIN • ABC Textile';
  }
}

// Render Chat Messages
function renderChatMessages(messages) {
  const container = document.getElementById('chat-messages-box');
  if (!container) return;

  container.innerHTML = messages.map((msg) => {
    const isAssistant = msg.sender === 'assistant';
    const formattedText = UIComponents.formatLegalText(msg.text).replace(/\n/g, '<br>');
    const verifierHTML = isAssistant && msg.verifierStamp ? UIComponents.renderVerifierSeal(msg.verifierStamp) : '';

    return `
      <div class="message-row ${msg.sender}">
        <div class="message-avatar">
          ${isAssistant ? 'AI' : 'Siz'}
        </div>
        <div class="message-bubble">
          <div class="message-meta">
            <span class="message-sender">${isAssistant ? (msg.agent || 'LegalOS AI') : 'Siz'}</span>
            <span style="color: ${isAssistant ? '#64748b' : '#bfdbfe'}; font-size: 0.72rem;">${msg.time}</span>
          </div>
          <div style="font-size: 0.93rem;">${formattedText}</div>
          ${verifierHTML}
          ${isAssistant && msg.hasContractAction ? `
            <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid #e2e8f0; display: flex; gap: 8px;">
              <button class="btn btn-primary btn-sm" onclick="appState.setActiveTab('contracts')">
                Contract Intelligence'da Ochish ➔
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

// Handle Chat Submit
window.handleChatSubmit = function() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (text.length === 0) return;

  appState.addChatMessage(text);
  input.value = '';
};

// Handle Contract Redline Acceptance
window.handleAcceptRedline = function() {
  appState.acceptContractRedline();
  UIComponents.showToast('8.3-band muvaffaqiyatli tahrirlandi va xavf bartaraf etildi!', 'success');
};

function updateContractAcceptedUI() {
  const badge = document.getElementById('contract-status-badge');
  if (badge) {
    badge.className = 'badge badge-green';
    badge.textContent = '✓ Muvofiqlashtirildi (Safe)';
  }

  const liveText = document.getElementById('contract-live-text');
  if (liveText) {
    liveText.innerHTML = `<strong>8.3-band:</strong> Agar Tomonlardan biri o‘z majburiyatlarini bajarmasa yoki lozim darajada bajarmasa, aybdor Tomon ikkinchi Tomonga har bir kechiktirilgan kun uchun kechiktirilgan majburiyat qiymatining 0.1% miqdorida penya to‘laydi, biroq umumiy penya summasi shartnoma summasining 10% idan oshmasligi shart. Barcha hollarda har ikki tomon uchun teng javobgarlik choralari qo‘llaniladi.`;
  }

  const riskBox = document.getElementById('risk-alert-box');
  if (riskBox) {
    riskBox.style.borderColor = '#a7f3d0';
    riskBox.style.borderLeftColor = '#10b981';
    riskBox.style.background = '#f0fdf4';
    riskBox.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="color: #065f46; font-weight: 700; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">✓</span> 8.3-band: Qonunchilikka to‘liq muvofiqlashtirildi
        </div>
        <span class="badge badge-green">VERIFIED SAFE</span>
      </div>
      <p style="font-size: 0.88rem; color: #047857; margin-top: 4px;">
        Bir tomonlama og‘ir shart bekor qilindi. O‘zbekiston FK 333-moddasi bo‘yicha tenglik va 10% lik jarima limiti o‘rnatildi.
      </p>
    `;
  }
}

// Update Citation Drawer
function updateCitationDrawer(citation) {
  const overlay = document.getElementById('citation-drawer-overlay');
  if (!overlay) return;

  if (!citation) {
    overlay.classList.remove('active');
    return;
  }

  overlay.classList.add('active');
  document.getElementById('drawer-citation-title').textContent = citation.code;
  document.getElementById('drawer-citation-status').textContent = citation.status;
  document.getElementById('drawer-citation-date').textContent = `Kuchga kirgan: ${citation.effectiveDate}`;
  document.getElementById('drawer-citation-source').textContent = citation.source;
  document.getElementById('drawer-citation-summary').textContent = citation.summary;
  document.getElementById('drawer-citation-check').textContent = `Oxirgi verifikatsiya: ${citation.lastChecked}`;
  document.getElementById('drawer-lex-link').href = citation.lexUrl;
}

// Handle Time Machine Date Change
window.handleTimeMachineDateChange = function(dateVal) {
  const display = document.getElementById('timemachine-display-date');
  if (display) {
    display.textContent = dateVal + " (Tarixiy tahrir)";
  }
  UIComponents.showToast(`${dateVal} sanasidagi rasmiy tahrir retrieval qilindi`, 'info');
};

// Render Lawyers in Marketplace
function renderLawyers() {
  const grid = document.getElementById('lawyers-grid-box');
  if (!grid) return;

  grid.innerHTML = LegalData.lawyers.map((lawyer) => {
    return `
      <div class="lawyer-card">
        <div>
          <div class="lawyer-card-top">
            <div class="lawyer-portrait">
              ${lawyer.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 1.05rem; color: #0f172a;">${lawyer.name}</div>
              <div style="font-size: 0.82rem; color: #2563eb; font-weight: 600;">${lawyer.title}</div>
              <div style="font-size: 0.78rem; color: #64748b; margin-top: 2px;">📍 ${lawyer.region}</div>
            </div>
          </div>
          <div style="margin-top: 14px; font-size: 0.85rem; color: #334155;">
            <strong>Mutaxassislik:</strong> ${lawyer.specialty}<br>
            <strong>Tajriba:</strong> ${lawyer.experience}
          </div>
        </div>

        <div style="padding-top: 12px; border-top: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-size: 0.75rem; color: #64748b;">Reyting / Case'lar:</div>
            <div style="font-weight: 700; font-size: 0.85rem; color: #059669;">★ ${lawyer.rating}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="UIComponents.showToast('${lawyer.name} ga case paketi jo‘natildi. Bog‘lanish kutilmoqda.', 'success')">
            Case'ni Biriktirish ➔
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Workspace Members
function renderWorkspaceMembers() {
  const tbody = document.getElementById('workspace-members-tbody');
  if (!tbody) return;

  tbody.innerHTML = LegalData.teamMembers.map((m) => {
    const isAdmin = m.role === 'ORG_ADMIN';
    return `
      <tr>
        <td><strong>${m.name}</strong></td>
        <td style="color: #64748b; font-family: var(--font-mono); font-size: 0.82rem;">${m.email}</td>
        <td>${m.title}</td>
        <td>
          <span class="badge ${isAdmin ? 'badge-blue' : 'badge-green'}">
            ${isAdmin ? 'ORG_ADMIN (Kompaniya Admini)' : 'ORG_MEMBER (Xodim)'}
          </span>
        </td>
        <td>
          <span style="display: inline-flex; align-items: center; gap: 5px; color: #10b981; font-weight: 600; font-size: 0.8rem;">
            <span style="width: 7px; height: 7px; background: #10b981; border-radius: 50%;"></span>
            Faol
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

// Setup Global Search
function setupSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q.length > 0) {
        appState.setActiveTab('chat');
        appState.addChatMessage(`Qidiruv: ${q}`);
        searchInput.value = '';
      }
    }
  });
}
