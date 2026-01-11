import { resonators, rankedTeams, roles, elements } from './data.js';

// --- Global State ---
let currentTeam = { 1: null, 2: null, 3: null };
let activeSlot = null;

// --- DOM Elements ---
const modal = document.getElementById('char-modal');
const modalGrid = document.getElementById('modal-grid');
const searchInput = document.getElementById('search-input');
const suggestionsGrid = document.getElementById('suggestions-grid');
const suggestionsArea = document.getElementById('suggestions-area');
const tierListContainer = document.getElementById('tier-list-container');
const resonancePanel = document.getElementById('resonance-panel');
const resonanceText = document.getElementById('resonance-text');

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderTierList('all');
    searchInput.addEventListener('input', (e) => renderModalGrid(e.target.value));

    // Expose functions to window for HTML onclicks
    window.openSelector = openSelector;
    window.closeModal = closeModal;
    window.selectChar = selectChar;
    window.clearSlot = clearSlot;
    window.filterTierList = filterTierList;
    window.switchTab = switchTab;
    window.applyTeam = applyTeam;
    window.resetBuilder = resetBuilder;
});

// --- Helper: Elements Colors ---
function getElementColor(element) {
    const map = {
        [elements.GLACIO]: 'text-sky-500 bg-sky-50 border-sky-200',
        [elements.FUSION]: 'text-orange-500 bg-orange-50 border-orange-200',
        [elements.ELECTRO]: 'text-purple-500 bg-purple-50 border-purple-200',
        [elements.AERO]: 'text-teal-500 bg-teal-50 border-teal-200',
        [elements.SPECTRO]: 'text-yellow-500 bg-yellow-50 border-yellow-200',
        [elements.HAVOC]: 'text-rose-900 bg-rose-50 border-rose-200'
    };
    return map[element] || 'text-slate-500';
}

// --- Modal & Selection ---
function openSelector(slotId) {
    activeSlot = slotId;
    modal.classList.remove('hidden');
    renderModalGrid();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    activeSlot = null;
    document.body.style.overflow = '';
}

function renderModalGrid(filter = '') {
    modalGrid.innerHTML = '';
    const existingIds = Object.values(currentTeam).filter(r => r).map(r => r.id);

    const matches = resonators.filter(r => {
        const nameMatch = r.name.toLowerCase().includes(filter.toLowerCase());
        const notSelected = !existingIds.includes(r.id);
        return nameMatch && notSelected;
    });

    matches.forEach(res => {
        const div = document.createElement('div');
        div.className = "cursor-pointer group bg-white border border-slate-200 rounded-xl p-3 hover:shadow-lg hover:border-wuwa-500 transition-all flex flex-col items-center";
        div.onclick = () => selectChar(res.id);
        
        div.innerHTML = `
            <div class="relative w-14 h-14 mb-2">
                <img src="${res.img}" class="w-full h-full rounded-full object-cover border-2 ${res.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}">
            </div>
            <div class="text-center">
                <p class="text-xs font-bold text-slate-800 leading-tight">${res.name}</p>
                <span class="text-[10px] ${getElementColor(res.element)} px-1 rounded mt-1 inline-block">${res.element}</span>
            </div>
        `;
        modalGrid.appendChild(div);
    });
}

function selectChar(id) {
    const char = resonators.find(r => r.id === id);
    if(char) {
        currentTeam[activeSlot] = char;
        updateSlotUI(activeSlot, char);
        checkResonance();
        updateSuggestions(); // Trigger Team Search
        closeModal();
    }
}

function clearSlot(slotId, e) {
    if(e) e.stopPropagation();
    currentTeam[slotId] = null;
    
    document.getElementById(`slot-${slotId}-empty`).classList.remove('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.add('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.remove('flex');
    
    checkResonance();
    updateSuggestions();
}

function updateSlotUI(slot, char) {
    document.getElementById(`slot-${slot}-empty`).classList.add('hidden');
    const filled = document.getElementById(`slot-${slot}-filled`);
    filled.classList.remove('hidden');
    filled.classList.add('flex');

    document.getElementById(`slot-${slot}-img`).src = char.img;
    document.getElementById(`slot-${slot}-img`).className = `w-20 h-20 rounded-full border-4 shadow-sm mb-2 object-cover ${char.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}`;
    document.getElementById(`slot-${slot}-name`).innerText = char.name;
    document.getElementById(`slot-${slot}-role`).innerText = char.role;
}

function resetBuilder() {
    [1,2,3].forEach(id => clearSlot(id));
}

// --- NEW FEATURE: Resonance Checker ---
function checkResonance() {
    const activeChars = Object.values(currentTeam).filter(c => c);
    if(activeChars.length < 2) {
        resonancePanel.classList.add('hidden');
        return;
    }

    const counts = {};
    activeChars.forEach(c => {
        counts[c.element] = (counts[c.element] || 0) + 1;
    });

    let activeResonance = null;
    for(const [el, count] of Object.entries(counts)) {
        if(count >= 2) activeResonance = el;
    }

    if(activeResonance) {
        resonancePanel.classList.remove('hidden');
        resonancePanel.className = `rounded-xl p-4 text-white shadow-lg flex items-center gap-4 animate-slide-up bg-gradient-to-r`;
        
        // Dynamic Gradient based on element
        if(activeResonance === elements.HAVOC) resonancePanel.classList.add('from-rose-900', 'to-slate-900');
        else if(activeResonance === elements.SPECTRO) resonancePanel.classList.add('from-yellow-600', 'to-yellow-800');
        else if(activeResonance === elements.GLACIO) resonancePanel.classList.add('from-sky-600', 'to-sky-800');
        else if(activeResonance === elements.ELECTRO) resonancePanel.classList.add('from-purple-700', 'to-purple-900');
        else if(activeResonance === elements.AERO) resonancePanel.classList.add('from-teal-600', 'to-teal-800');
        else if(activeResonance === elements.FUSION) resonancePanel.classList.add('from-orange-600', 'to-orange-800');

        resonanceText.innerText = `${activeResonance} Resonance Active (+ DMG)`;
    } else {
        resonancePanel.classList.add('hidden');
    }
}

// --- NEW LOGIC: Team Suggestions (Full Teams) ---
function updateSuggestions() {
    const activeChars = Object.values(currentTeam).filter(c => c);
    suggestionsGrid.innerHTML = '';
    
    if (activeChars.length === 0) {
        suggestionsArea.classList.add('hidden');
        return;
    }

    suggestionsArea.classList.remove('hidden');

    // Find teams in database that contain ANY of the selected characters
    const relevantTeams = rankedTeams.filter(team => {
        const teamIds = team.members;
        // Check if currently selected characters are inside this team
        return activeChars.every(char => teamIds.includes(char.id));
    });

    if (relevantTeams.length === 0) {
        suggestionsGrid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-4">No specific meta teams found for this combination. Try mixing standard supports like Verina.</div>`;
        return;
    }

    relevantTeams.forEach(team => {
        const memberObjs = team.members.map(id => resonators.find(r => r.id === id));
        
        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 justify-between items-center";
        
        const memberHtml = memberObjs.map(m => `
            <div class="flex flex-col items-center">
                <img src="${m.img}" class="w-12 h-12 rounded-full border-2 border-white shadow-sm" title="${m.name}">
                <span class="text-[10px] text-slate-500 mt-1">${m.role.split(' ')[0]}</span>
            </div>
        `).join('');

        card.innerHTML = `
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${team.tier}</span>
                    <h4 class="font-bold text-slate-900">${team.name}</h4>
                </div>
                <div class="flex gap-2 mt-3">
                    ${memberHtml}
                </div>
            </div>
            <button onclick="applyTeam('${team.id}')" class="w-full sm:w-auto px-4 py-2 bg-wuwa-50 text-wuwa-600 font-bold text-sm rounded-lg hover:bg-wuwa-100 transition flex items-center justify-center gap-2">
                Apply Team <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </button>
        `;
        suggestionsGrid.appendChild(card);
    });
    lucide.createIcons();
}

// Applies a full team to the slots
function applyTeam(teamId) {
    const team = rankedTeams.find(t => t.id === teamId);
    if(!team) return;

    // Map members to slots based on roles (simple heuristic)
    // We assume the order in data.js is Main -> Sub -> Support roughly, 
    // but let's just map index 0->Slot1, 1->Slot2, 2->Slot3 for simplicity
    
    // Clear current
    currentTeam = { 1: null, 2: null, 3: null };
    
    const m1 = resonators.find(r => r.id === team.members[0]);
    const m2 = resonators.find(r => r.id === team.members[1]);
    const m3 = resonators.find(r => r.id === team.members[2]);

    if(m1) { currentTeam[1] = m1; updateSlotUI(1, m1); }
    if(m2) { currentTeam[2] = m2; updateSlotUI(2, m2); }
    if(m3) { currentTeam[3] = m3; updateSlotUI(3, m3); }

    checkResonance();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Tier List Logic (Fixed) ---
function filterTierList(type) {
    // Update Button Styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if(btn.dataset.filter === type) {
            btn.classList.remove('text-slate-500', 'hover:bg-slate-100');
            btn.classList.add('bg-slate-800', 'text-white');
        } else {
            btn.classList.add('text-slate-500', 'hover:bg-slate-100');
            btn.classList.remove('bg-slate-800', 'text-white');
        }
    });

    renderTierList(type);
}

function renderTierList(type) {
    tierListContainer.innerHTML = '';
    
    const list = rankedTeams.filter(t => {
        if(type === 'all') return true;
        return t.type.toLowerCase() === type.toLowerCase();
    });

    list.forEach(team => {
        const memberObjs = team.members.map(id => resonators.find(r => r.id === id));
        
        const div = document.createElement('div');
        div.className = "bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:border-wuwa-500 transition-all";
        
        div.innerHTML = `
            <div class="flex-shrink-0 text-center md:text-left min-w-[80px]">
                <span class="text-2xl font-black text-slate-900">${team.tier}</span>
                <div class="text-xs font-bold text-slate-400 uppercase">${team.type}</div>
            </div>

            <div class="flex -space-x-3">
                ${memberObjs.map(m => `<img src="${m.img}" class="w-14 h-14 rounded-full border-2 border-white shadow-sm" title="${m.name}">`).join('')}
            </div>

            <div class="flex-grow text-center md:text-left">
                <h3 class="font-bold text-slate-900">${team.name}</h3>
                <p class="text-sm text-slate-500 leading-snug">${team.desc}</p>
            </div>

             <div class="flex gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[150px]">
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">DPS</div>
                    <div class="font-mono font-bold text-slate-800">${team.dps_score}</div>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Ease</div>
                    <div class="font-mono font-bold text-slate-800">${team.ease_score}</div>
                </div>
            </div>
        `;
        tierListContainer.appendChild(div);
    });
}

function switchTab(tab) {
    const builderView = document.getElementById('view-builder');
    const tierlistView = document.getElementById('view-tierlist');
    const bBtn = document.getElementById('nav-builder');
    const tBtn = document.getElementById('nav-tierlist');

    if(tab === 'builder') {
        builderView.classList.remove('hidden');
        tierlistView.classList.add('hidden');
        bBtn.classList.replace('text-slate-500', 'text-slate-900');
        bBtn.classList.replace('hover:bg-slate-200/50', 'bg-white');
        bBtn.classList.add('shadow-sm');
        
        tBtn.classList.replace('text-slate-900', 'text-slate-500');
        tBtn.classList.replace('bg-white', 'hover:bg-slate-200/50');
        tBtn.classList.remove('shadow-sm');
    } else {
        tierlistView.classList.remove('hidden');
        builderView.classList.add('hidden');
        
        tBtn.classList.replace('text-slate-500', 'text-slate-900');
        tBtn.classList.replace('hover:bg-slate-200/50', 'bg-white');
        tBtn.classList.add('shadow-sm');

        bBtn.classList.replace('text-slate-900', 'text-slate-500');
        bBtn.classList.replace('bg-white', 'hover:bg-slate-200/50');
        bBtn.classList.remove('shadow-sm');
    }
}