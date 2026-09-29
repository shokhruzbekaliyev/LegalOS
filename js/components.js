/* ==========================================================================
   LegalOS Uzbekistan - Dynamic Component Renderers
   ========================================================================== */

const UIComponents = {
  // Render Citation pill in text
  renderCitationBadge(citationKey) {
    const citation = LegalData.citations[citationKey];
    if (!citation) return `[${citationKey}]`;
    return `<button class="legal-citation" onclick="appState.openCitation('${citationKey}')" title="${citation.title}">
      ${citation.code}
    </button>`;
  },

  // Parse text and replace [KEY] with interactive citations
  formatLegalText(text) {
    return text.replace(/\[([A-Z0-9\-]+)\]/g, (match, p1) => {
      if (LegalData.citations[p1]) {
        return UIComponents.renderCitationBadge(p1);
      }
      return match;
    });
  },

  // Render Verifier Seal Stamp
  renderVerifierSeal(stamp) {
    if (!stamp || !stamp.verified) return '';
    return `
      <div class="verifier-seal">
        <div class="verifier-seal-left">
          <div class="verifier-icon-badge">✓</div>
          <div>
            <div class="verifier-title">Verifier AI: Manba 100% solishtirildi</div>
            <div class="verifier-subtitle">${stamp.source}</div>
          </div>
        </div>
        <div class="verifier-timestamp">Hash: ${stamp.hash}</div>
      </div>
    `;
  },

  // Render Knowledge Graph SVG
  renderKnowledgeGraphSVG() {
    return `
      <svg width="100%" height="100%" viewBox="0 0 540 340" style="overflow: visible;">
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
          <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#d97706" />
          </linearGradient>
        </defs>

        <!-- Connecting Lines -->
        <line x1="160" y1="170" x2="320" y2="90" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="4" />
        <line x1="160" y1="170" x2="320" y2="250" stroke="#cbd5e1" stroke-width="3" />
        <line x1="320" y1="90" x2="440" y2="170" stroke="#cbd5e1" stroke-width="3" />
        <line x1="320" y1="250" x2="440" y2="170" stroke="#cbd5e1" stroke-width="3" />

        <!-- Node 1: Mehnat Kodeksi (Root) -->
        <g transform="translate(160, 170)" style="cursor: pointer;">
          <circle r="46" fill="url(#blueGrad)" filter="drop-shadow(0 4px 10px rgba(37,99,235,0.3))" />
          <text text-anchor="middle" y="-4" fill="#ffffff" font-weight="700" font-size="12">Mehnat</text>
          <text text-anchor="middle" y="14" fill="#ffffff" font-weight="700" font-size="12">Kodeksi</text>
        </g>

        <!-- Node 2: 161-modda -->
        <g transform="translate(320, 90)" style="cursor: pointer;" onclick="appState.openCitation('MK-161')">
          <circle r="40" fill="#2563eb" filter="drop-shadow(0 4px 8px rgba(37,99,235,0.25))" />
          <text text-anchor="middle" y="5" fill="#ffffff" font-weight="700" font-size="12">161-modda</text>
        </g>

        <!-- Node 3: Vazirlar Mahkamasi Qarori -->
        <g transform="translate(320, 250)" style="cursor: pointer;">
          <circle r="42" fill="url(#greenGrad)" filter="drop-shadow(0 4px 8px rgba(16,185,129,0.25))" />
          <text text-anchor="middle" y="-4" fill="#ffffff" font-weight="600" font-size="11">Cabinet</text>
          <text text-anchor="middle" y="12" fill="#ffffff" font-weight="600" font-size="11">Resolution</text>
        </g>

        <!-- Node 4: Sud Qarori (Court Decision) -->
        <g transform="translate(440, 170)" style="cursor: pointer;">
          <circle r="38" fill="url(#amberGrad)" filter="drop-shadow(0 4px 8px rgba(245,158,11,0.25))" />
          <text text-anchor="middle" y="-4" fill="#ffffff" font-weight="600" font-size="11">Court</text>
          <text text-anchor="middle" y="12" fill="#ffffff" font-weight="600" font-size="11">Precedent</text>
        </g>
      </svg>
    `;
  },

  // Show Toast
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div style="color: ${type === 'success' ? '#10b981' : '#2563eb'}; font-size: 1.2rem;">
        ${type === 'success' ? '✓' : 'ℹ'}
      </div>
      <div>
        <div style="font-weight: 700; font-size: 0.85rem; color: #0f172a;">${message}</div>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3500);
  }
};
