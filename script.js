import { resonators, rankedTeams, roles, elements } from './data.js';

// --- Global State ---
const currentTeam = {
    1: null, // Holds resonator object or null
    2: null,
    3: null
};

let activeSlot = null; // Which slot is currently being modified

// --- DOM Elements ---
const modal = document.getElementById('char-modal');
const modalGrid = document.getElementById('modal-grid');
const searchInput = document.getElementById('search-input');
const suggestionsGrid = document.getElementById('suggestions-grid');
const suggestionsArea = document.getElementById('suggestions-area');
const tierListContainer = document.getElementById('tier-list-container');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Render Tier List initially
    renderTierList('all');
    
    // Setup Search Listener
    searchInput.addEventListener('input', (e) => {
        renderModalGrid(e.target.value);
    });

    // Make functions globally available for HTML onclick attributes
    window.openSelector = openSelector;
    window.closeModal = closeModal;
    window.selectChar = selectChar;
    window.clearSlot = clearSlot;
    window.filterTierList = filterTierList;
});

// --- Helper: Get Colors based on Element ---
function getElementColor(element) {
    switch(element) {
        case elements.GLACIO: return 'text-sky-400 bg-sky-50 border-sky-200';
        case elements.FUSION: return 'text-orange-500 bg-orange-50 border-orange-200';
        case elements.ELECTRO: return 'text-purple-500 bg-purple-50 border-purple-200';
        case elements.AERO: return 'text-teal-400 bg-teal-50 border-teal-200';
        case elements.SPECTRO: return 'text-yellow-500 bg-yellow-50 border-yellow-200';
        case elements.HAVOC: return 'text-rose-900 bg-rose-50 border-rose-200';
        default: return 'text-slate-500 bg-slate-50';
    }
}

// --- Modal Logic ---

function openSelector(slotId) {
    activeSlot = slotId;
    modal.classList.remove('hidden');
    renderModalGrid();
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.add('hidden');
    activeSlot = null;
    document.body.style.overflow = '';
}

function renderModalGrid(filterText = '') {
    modalGrid.innerHTML = '';
    
    // Filter logic
    const filtered = resonators.filter(r => {
        const matchesName = r.name.toLowerCase().includes(filterText.toLowerCase());
        // Don't show characters already in other slots
        const isAlreadyPicked = Object.values(currentTeam).some(member => member && member.id === r.id);
        return matchesName && !isAlreadyPicked;
    });

    if (filtered.length === 0) {
        modalGrid.innerHTML = `<p class="col-span-full text-center text-slate-400 py-8">No resonators found.</p>`;
        return;
    }

    filtered.forEach(res => {
        const elColors = getElementColor(res.element);
        const card = document.createElement('div');
        card.className = `cursor-pointer group relative bg-white border border-slate-200 rounded-xl p-3 hover:shadow-lg transition-all hover:border-wuwa-500 flex flex-col items-center`;
        card.onclick = () => selectChar(res.id);

        card.innerHTML = `
            <div class="relative w-16 h-16 mb-2">
                <img src="${res.img}" class="w-full h-full rounded-full object-cover border-2 ${res.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}">
                <span class="absolute -bottom-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${elColors}">${res.element}</span>
            </div>
            <h4 class="font-semibold text-sm text-center leading-tight">${res.name}</h4>
            <span class="text-xs text-slate-400 mt-1">${res.role}</span>
        `;
        modalGrid.appendChild(card);
    });
}

// --- Selection Logic ---

function selectChar(resId) {
    const resonator = resonators.find(r => r.id === resId);
    if (!resonator) return;

    // Update State
    currentTeam[activeSlot] = resonator;

    // Update UI for the Slot
    updateSlotUI(activeSlot, resonator);
    
    // Trigger AI Suggestions
    updateSuggestions();

    closeModal();
}

function clearSlot(slotId, event) {
    if (event) event.stopPropagation(); // Prevent opening modal again
    currentTeam[slotId] = null;
    
    // Reset UI
    document.getElementById(`slot-${slotId}-empty`).classList.remove('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.add('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.remove('flex');
    
    // Refresh Suggestions
    updateSuggestions();
}

function updateSlotUI(slotId, resonator) {
    const emptyDiv = document.getElementById(`slot-${slotId}-empty`);
    const filledDiv = document.getElementById(`slot-${slotId}-filled`);
    
    emptyDiv.classList.add('hidden');
    filledDiv.classList.remove('hidden');
    filledDiv.classList.add('flex');

    document.getElementById(`slot-${slotId}-img`).src = resonator.img;
    document.getElementById(`slot-${slotId}-name`).innerText = resonator.name;
    document.getElementById(`slot-${slotId}-role`).innerText = resonator.role;
    
    // Add border color based on rarity
    const imgEl = document.getElementById(`slot-${slotId}-img`);
    imgEl.className = `w-24 h-24 rounded-full border-4 shadow-lg mb-4 object-cover ${resonator.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}`;
}

// --- The "Brain": Suggestion Algorithm ---

function updateSuggestions() {
    // 1. Check if we have any team members
    const activeMembers = Object.values(currentTeam).filter(m => m !== null);
    
    if (activeMembers.length === 0) {
        suggestionsArea.classList.add('hidden');
        return;
    }

    suggestionsArea.classList.remove('hidden');
    
    // 2. Calculate Synergy Score for all other characters
    const scores = {};
    
    // Initialize scores
    resonators.forEach(r => {
        // Exclude current team members
        if (activeMembers.find(m => m.id === r.id)) return;
        scores[r.id] = { score: 0, reasons: [], char: r };
    });

    // Scoring Loop
    activeMembers.forEach(member => {
        // Look at the member's synergy list
        member.synergy_ids.forEach(synId => {
            if (scores[synId]) {
                scores[synId].score += 10; // Base synergy points
                scores[synId].reasons.push(`Synergy with ${member.name}`);
            }
        });

        // Small Bonus for matching element (sometimes good, sometimes bad, keeping it low)
        resonators.forEach(r => {
            if (scores[r.id] && r.element === member.element && r.role === roles.SUPPORT && member.role === roles.MAIN_DPS) {
                scores[r.id].score += 2; // Slight bias for mono-element support
            }
        });
    });

    // 3. Convert to array and sort
    const suggestions = Object.values(scores)
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6); // Top 6 suggestions

    // 4. Render Suggestions
    suggestionsGrid.innerHTML = '';
    
    if (suggestions.length === 0) {
        suggestionsGrid.innerHTML = `<p class="col-span-full text-slate-500">No specific high-synergy recommendations found. Try standard supports like Verina or Shorekeeper.</p>`;
        return;
    }

    suggestions.forEach(item => {
        const r = item.char;
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 transition hover:shadow-md";
        
        // Determine which slot is empty to offer "Add to Slot X" button
        let targetSlot = null;
        if (!currentTeam[2]) targetSlot = 2;
        else if (!currentTeam[3]) targetSlot = 3;
        else if (!currentTeam[1]) targetSlot = 1;

        const addButton = targetSlot 
            ? `<button onclick="assignToSlot(${targetSlot}, '${r.id}')" class="ml-auto text-xs bg-wuwa-50 text-wuwa-600 px-3 py-1.5 rounded-lg font-bold hover:bg-wuwa-100 transition">Add to Slot ${targetSlot}</button>`
            : `<span class="ml-auto text-xs text-slate-400">Team Full</span>`;

        card.innerHTML = `
            <img src="${r.img}" class="w-12 h-12 rounded-full border border-slate-200">
            <div>
                <div class="flex items-center gap-2">
                    <h4 class="font-bold text-slate-900">${r.name}</h4>
                    <span class="text-[10px] px-1.5 bg-slate-100 rounded text-slate-500">${r.role}</span>
                </div>
                <p class="text-xs text-green-600 mt-0.5 flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-3 h-3"></i> ${item.reasons[0]} ${item.reasons.length > 1 ? `+${item.reasons.length - 1}` : ''}
                </p>
            </div>
            ${addButton}
        `;
        suggestionsGrid.appendChild(card);
    });

    lucide.createIcons();
}

// Global function for the "Add" button in suggestions
window.assignToSlot = function(slot, charId) {
    activeSlot = slot;
    selectChar(charId);
}


// --- Tier List Logic ---

function renderTierList(filterType) {
    tierListContainer.innerHTML = '';
    
    const filteredTeams = rankedTeams.filter(t => {
        if (filterType === 'all') return true;
        if (filterType === 'f2p') return t.type === 'F2P';
        if (filterType === 'p2w') return t.type === 'P2W';
        return true;
    });

    filteredTeams.forEach(team => {
        // Get character objects to show images
        const memberObjs = team.members.map(id => resonators.find(r => r.id === id));
        
        const div = document.createElement('div');
        div.className = "bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-wuwa-200 transition-colors";
        
        // Tier Badge Color
        let tierColor = 'bg-slate-100 text-slate-700';
        if(team.tier.includes('T0')) tierColor = 'bg-rose-100 text-rose-700 border-rose-200';
        else if(team.tier.includes('T1')) tierColor = 'bg-amber-100 text-amber-700 border-amber-200';

        div.innerHTML = `
            <div class="flex-shrink-0 min-w-[120px]">
                <span class="px-3 py-1 rounded-full text-sm font-extrabold border ${tierColor} inline-block mb-2">${team.tier}</span>
                <div class="text-xs font-semibold text-slate-400 uppercase tracking-wide">${team.type}</div>
            </div>

            <div class="flex -space-x-4">
                ${memberObjs.map(m => `
                    <div class="relative group/tooltip">
                        <img src="${m.img}" class="w-16 h-16 rounded-full border-4 border-white shadow-md relative z-10 transition transform hover:scale-110 hover:z-20 cursor-help" title="${m.name}">
                    </div>
                `).join('')}
            </div>

            <div class="flex-grow">
                <h3 class="text-lg font-bold text-slate-900">${team.name}</h3>
                <p class="text-sm text-slate-500 mt-1">${team.desc}</p>
            </div>

            <div class="flex gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[150px]">
                <div>
                    <div class="text-xs text-slate-400 uppercase">DPS Score</div>
                    <div class="font-mono font-bold text-lg text-slate-800">${team.dps_score}/100</div>
                </div>
                <div>
                    <div class="text-xs text-slate-400 uppercase">Ease</div>
                    <div class="font-mono font-bold text-lg text-slate-800">${team.ease_score}/100</div>
                </div>
            </div>
        `;
        tierListContainer.appendChild(div);
    });
}

function filterTierList(type) {
    // Update active button styles (simplified for this snippet)
    // In a real app, you'd toggle classes on the buttons passed in event
    renderTierList(type);
}

// Hook up filter buttons (Quick hack for the demo)
window.switchTab = function(tab) {
    // ... existing switch logic logic from HTML ...
    // Re-implemented properly if needed, but the HTML one works for visibility
    const builderBtn = document.getElementById('nav-builder');
    const tierlistBtn = document.getElementById('nav-tierlist');
    const builderView = document.getElementById('view-builder');
    const tierlistView = document.getElementById('view-tierlist');

    if (tab === 'builder') {
        builderBtn.className = "px-4 py-2 text-sm font-semibold rounded-lg bg-white shadow-sm text-slate-900 transition-all duration-200";
        tierlistBtn.className = "px-4 py-2 text-sm font-semibold rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-all duration-200";
        builderView.classList.remove('hidden');
        tierlistView.classList.add('hidden');
    } else {
        tierlistBtn.className = "px-4 py-2 text-sm font-semibold rounded-lg bg-white shadow-sm text-slate-900 transition-all duration-200";
        builderBtn.className = "px-4 py-2 text-sm font-semibold rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-all duration-200";
        tierlistView.classList.remove('hidden');
        builderView.classList.add('hidden');
    }
}