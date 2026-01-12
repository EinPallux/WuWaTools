import { resonators, rankedTeams, elements } from './data.js';

let currentTeam = { 1: null, 2: null, 3: null };
let activeSlot = null;
let currentTierState = { type: 'all', element: 'all', sort: 'tier' };

// DOM
const modal = document.getElementById('char-modal');
const modalGrid = document.getElementById('modal-grid');
const searchInput = document.getElementById('search-input');
const suggestionsGrid = document.getElementById('suggestions-grid');
const suggestionsArea = document.getElementById('suggestions-area');
const tierListContainer = document.getElementById('tier-list-container');
const resonancePanel = document.getElementById('resonance-panel');
const resonanceText = document.getElementById('resonance-text');
const dashboard = document.getElementById('team-dashboard');
const tacticalPanel = document.getElementById('tactical-analysis');
const rotationModal = document.getElementById('rotation-modal');
const rotationSteps = document.getElementById('rotation-steps');

document.addEventListener('DOMContentLoaded', () => {
    refreshTierList();
    searchInput.addEventListener('input', (e) => renderModalGrid(e.target.value));

    Object.assign(window, {
        openSelector, closeModal, selectChar, clearSlot, 
        updateTierFilters, switchTab, applyTeam, resetBuilder, 
        openRotationModal, closeRotationModal
    });
});

function formatNumber(num) { return new Intl.NumberFormat('en-US').format(num); }

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
        showBuildGuide(activeSlot, char);
        refreshDashboard();
        closeModal();
    }
}

function clearSlot(slotId, e) {
    if(e) e.stopPropagation();
    currentTeam[slotId] = null;
    document.getElementById(`slot-${slotId}-empty`).classList.remove('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.add('hidden');
    document.getElementById(`slot-${slotId}-filled`).classList.remove('flex');
    document.getElementById(`build-${slotId}`).classList.add('hidden');
    
    // Remove glow
    document.getElementById(`slot-${slotId}`).classList.remove('slot-glow-havoc', 'slot-glow-spectro', 'slot-glow-glacio', 'slot-glow-fusion', 'slot-glow-aero', 'slot-glow-electro');
    
    refreshDashboard();
}

function updateSlotUI(slot, char) {
    document.getElementById(`slot-${slot}-empty`).classList.add('hidden');
    const filled = document.getElementById(`slot-${slot}-filled`);
    filled.classList.remove('hidden');
    filled.classList.add('flex');

    document.getElementById(`slot-${slot}-img`).src = char.img;
    document.getElementById(`slot-${slot}-img`).className = `w-20 h-20 rounded-full border-4 shadow-sm mb-2 object-cover ${char.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}`;
    document.getElementById(`slot-${slot}-name`).innerText = char.name;

    // Apply Glow
    const slotDiv = document.getElementById(`slot-${slot}`);
    slotDiv.className = `relative group cursor-pointer transition-all duration-300 rounded-2xl slot-glow-${char.element.toLowerCase()}`;
}

function showBuildGuide(slot, char) {
    const card = document.getElementById(`build-${slot}`);
    card.classList.remove('hidden');
    if(char.build) {
        document.getElementById(`build-${slot}-set`).innerText = char.build.set;
        document.getElementById(`build-${slot}-echo`).innerText = char.build.echo;
        document.getElementById(`build-${slot}-w5`).innerText = char.build.weapon_5;
        document.getElementById(`build-${slot}-w4`).innerText = char.build.weapon_4;
    }
}

function refreshDashboard() {
    checkResonance();
    updateCostMeter();
    updateSuggestions();
    
    const activeChars = Object.values(currentTeam).filter(c => c);
    if(activeChars.length > 0) dashboard.classList.remove('hidden');
    else dashboard.classList.add('hidden');

    // Hide tactical if team is incomplete
    if(activeChars.length < 3) tacticalPanel.classList.add('hidden');
}

// --- FIXED APPLY TEAM LOGIC ---
function applyTeam(teamId) {
    const team = rankedTeams.find(t => t.id === teamId);
    if(!team) return;

    // Reset Data directly
    const m1 = resonators.find(r => r.id === team.members[0]);
    const m2 = resonators.find(r => r.id === team.members[1]);
    const m3 = resonators.find(r => r.id === team.members[2]);

    currentTeam[1] = m1;
    currentTeam[2] = m2;
    currentTeam[3] = m3;

    // Force Update UI for all slots
    if(m1) { updateSlotUI(1, m1); showBuildGuide(1, m1); }
    if(m2) { updateSlotUI(2, m2); showBuildGuide(2, m2); }
    if(m3) { updateSlotUI(3, m3); showBuildGuide(3, m3); }

    refreshDashboard();
    renderTacticalAnalysis(team);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTacticalAnalysis(team) {
    if(!team.radar) return;
    
    tacticalPanel.classList.remove('hidden');
    document.getElementById('analysis-team-name').innerText = team.name;

    // Animate bars
    setTimeout(() => {
        document.getElementById('bar-burst').style.width = `${team.radar.burst}%`;
        document.getElementById('val-burst').innerText = `${team.radar.burst}/100`;

        document.getElementById('bar-sustain').style.width = `${team.radar.sustain}%`;
        document.getElementById('val-sustain').innerText = `${team.radar.sustain}/100`;

        document.getElementById('bar-aoe').style.width = `${team.radar.aoe}%`;
        document.getElementById('val-aoe').innerText = `${team.radar.aoe}/100`;

        document.getElementById('bar-ease').style.width = `${team.radar.ease}%`;
        document.getElementById('val-ease').innerText = `${team.radar.ease}/100`;
    }, 100);
}

function updateCostMeter() {
    const chars = Object.values(currentTeam).filter(c => c);
    if(chars.length === 0) return;
    let score = 0;
    chars.forEach(c => score += (c.rarity === 5 ? 20 : 5));
    const percentage = Math.min((score / 60) * 100, 100);
    const bar = document.getElementById('cost-bar');
    const badge = document.getElementById('cost-badge');
    
    bar.style.width = `${percentage}%`;
    
    if(score <= 20) {
        bar.className = "h-2.5 rounded-full transition-all duration-500 bg-green-500";
        badge.innerText = "F2P Friendly";
        badge.className = "text-xs font-bold px-2 py-0.5 rounded bg-green-100 text-green-700";
    } else if (score <= 40) {
        bar.className = "h-2.5 rounded-full transition-all duration-500 bg-yellow-500";
        badge.innerText = "Moderate Investment";
        badge.className = "text-xs font-bold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700";
    } else {
        bar.className = "h-2.5 rounded-full transition-all duration-500 bg-rose-600";
        badge.innerText = "Whale / P2W";
        badge.className = "text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700";
    }
}

function checkResonance() {
    const activeChars = Object.values(currentTeam).filter(c => c);
    if(activeChars.length < 2) {
        resonancePanel.classList.add('hidden');
        return;
    }
    const counts = {};
    activeChars.forEach(c => counts[c.element] = (counts[c.element] || 0) + 1);
    let activeResonance = null;
    for(const [el, count] of Object.entries(counts)) {
        if(count >= 2) activeResonance = el;
    }
    if(activeResonance) {
        resonancePanel.classList.remove('hidden');
        resonancePanel.className = `rounded-xl p-4 text-white shadow-lg flex items-center gap-4 bg-gradient-to-r transition-colors duration-500`;
        
        if(activeResonance === elements.HAVOC) resonancePanel.classList.add('from-rose-900', 'to-slate-900');
        else if(activeResonance === elements.SPECTRO) resonancePanel.classList.add('from-yellow-600', 'to-yellow-800');
        else if(activeResonance === elements.GLACIO) resonancePanel.classList.add('from-sky-600', 'to-sky-800');
        else if(activeResonance === elements.ELECTRO) resonancePanel.classList.add('from-purple-700', 'to-purple-900');
        else if(activeResonance === elements.AERO) resonancePanel.classList.add('from-teal-600', 'to-teal-800');
        else if(activeResonance === elements.FUSION) resonancePanel.classList.add('from-orange-600', 'to-orange-800');

        resonanceText.innerText = `${activeResonance} Resonance`;
    } else {
        resonancePanel.classList.add('hidden');
    }
}

function updateSuggestions() {
    const activeChars = Object.values(currentTeam).filter(c => c);
    suggestionsGrid.innerHTML = '';
    
    if (activeChars.length === 0) {
        suggestionsArea.classList.add('hidden');
        return;
    }
    suggestionsArea.classList.remove('hidden');

    const relevantTeams = rankedTeams.filter(team => {
        const teamIds = team.members;
        return activeChars.every(char => teamIds.includes(char.id));
    });

    if (relevantTeams.length === 0) {
        suggestionsGrid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-4">No pre-defined meta teams found.</div>`;
        return;
    }

    relevantTeams.forEach(team => {
        const memberObjs = team.members.map(id => resonators.find(r => r.id === id));
        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all flex flex-col gap-4";
        
        const memberHtml = memberObjs.map(m => `
            <div class="flex flex-col items-center">
                <img src="${m.img}" class="w-12 h-12 rounded-full border-2 border-white shadow-sm">
            </div>
        `).join('');

        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${team.tier}</span>
                        <h4 class="font-bold text-slate-900">${team.name}</h4>
                    </div>
                    <div class="flex gap-2 mt-2">${memberHtml}</div>
                </div>
                <div class="flex flex-col gap-2">
                    <button onclick="applyTeam('${team.id}')" class="text-xs bg-wuwa-50 text-wuwa-600 font-bold px-3 py-1.5 rounded-lg hover:bg-wuwa-100 transition">Apply</button>
                    ${team.rotation ? `<button onclick="openRotationModal('${team.id}')" class="text-xs border border-slate-200 text-slate-600 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-50 transition flex items-center gap-1"><i data-lucide="book-open" class="inline w-3 h-3"></i> Guide</button>` : ''}
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                <div class="text-center">
                    <p class="text-[10px] text-slate-400 uppercase font-bold">DPS</p>
                    <p class="text-sm font-mono font-bold text-slate-800">${formatNumber(team.stats.dps)}</p>
                </div>
                <div class="text-center border-l border-slate-100">
                    <p class="text-[10px] text-slate-400 uppercase font-bold">Total</p>
                    <p class="text-sm font-mono font-bold text-slate-800">${formatNumber(team.stats.total_dmg)}</p>
                </div>
                <div class="text-center border-l border-slate-100">
                    <p class="text-[10px] text-slate-400 uppercase font-bold">Time</p>
                    <p class="text-sm font-mono font-bold text-slate-800">${team.stats.rot_time}s</p>
                </div>
            </div>
        `;
        suggestionsGrid.appendChild(card);
    });
    lucide.createIcons();
}

function resetBuilder() {
    [1,2,3].forEach(id => clearSlot(id));
    tacticalPanel.classList.add('hidden');
}

function openRotationModal(teamId) {
    const team = rankedTeams.find(t => t.id === teamId);
    if(!team || !team.rotation) return;
    rotationSteps.innerHTML = '';
    team.rotation.forEach((step, index) => {
        const li = document.createElement('li');
        li.className = "pl-6 relative";
        li.innerHTML = `
            <span class="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">${index + 1}</span>
            <p class="text-slate-800 font-medium">${step}</p>
        `;
        rotationSteps.appendChild(li);
    });
    rotationModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeRotationModal() {
    rotationModal.classList.add('hidden');
    document.body.style.overflow = '';
}

function updateTierFilters(key, value) {
    currentTierState[key] = value;
    if(key === 'type') {
        document.querySelectorAll('.type-btn').forEach(btn => {
            if(btn.dataset.type === value) {
                btn.classList.add('active', 'bg-white', 'shadow', 'text-slate-900');
                btn.classList.remove('text-slate-500', 'hover:bg-white');
            } else {
                btn.classList.remove('active', 'bg-white', 'shadow', 'text-slate-900');
                btn.classList.add('text-slate-500', 'hover:bg-white');
            }
        });
    }
    refreshTierList();
}

function refreshTierList() {
    tierListContainer.innerHTML = '';
    let list = rankedTeams.filter(t => {
        if(currentTierState.type !== 'all') {
            const isF2P = t.type.includes('F2P');
            if(currentTierState.type === 'F2P' && !isF2P) return false;
            if(currentTierState.type === 'P2W' && isF2P) return false;
        }
        if(currentTierState.element !== 'all' && t.element !== currentTierState.element) return false;
        return true;
    });

    list.sort((a, b) => {
        switch(currentTierState.sort) {
            case 'dps': return b.stats.dps - a.stats.dps;
            case 'ease': return b.ease_score - a.ease_score; // Now using ease_score from data
            default: return 0;
        }
    });

    if(list.length === 0) {
        tierListContainer.innerHTML = `<div class="text-center py-10 text-slate-500">No teams found matching these filters.</div>`;
        return;
    }

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
                ${memberObjs.map(m => `<img src="${m.img}" class="w-14 h-14 rounded-full border-2 border-white shadow-sm">`).join('')}
            </div>
            <div class="flex-grow text-center md:text-left">
                <div class="flex items-center gap-2 justify-center md:justify-start">
                    <h3 class="font-bold text-slate-900">${team.name}</h3>
                    ${team.rotation ? `<button onclick="openRotationModal('${team.id}')" class="text-xs text-wuwa-600 bg-wuwa-50 px-2 py-0.5 rounded hover:bg-wuwa-100"><i data-lucide="book-open" class="inline w-3 h-3"></i> Guide</button>` : ''}
                </div>
                <p class="text-sm text-slate-500 leading-snug mt-1">${team.desc}</p>
            </div>
             <div class="grid grid-cols-4 gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[280px]">
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">DPS</div>
                    <div class="font-mono font-bold text-slate-800">${formatNumber(team.stats.dps)}</div>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Total</div>
                    <div class="font-mono font-bold text-slate-800">${formatNumber(team.stats.total_dmg)}</div>
                </div>
                 <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Time</div>
                    <div class="font-mono font-bold text-slate-800">${team.stats.rot_time}s</div>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Ease</div>
                    <div class="font-mono font-bold text-slate-800">${team.radar ? team.radar.ease : 50}/100</div>
                </div>
            </div>
        `;
        tierListContainer.appendChild(div);
    });
    lucide.createIcons();
}

function switchTab(tab) {
    const builderView = document.getElementById('view-builder');
    const tierlistView = document.getElementById('view-tierlist');
    const bBtn = document.getElementById('nav-builder');
    const tBtn = document.getElementById('nav-tierlist');

    if(tab === 'builder') {
        builderView.classList.remove('hidden');
        tierlistView.classList.add('hidden');
        bBtn.classList.replace('text-slate-900', 'text-slate-900');
        bBtn.classList.replace('bg-white', 'bg-white');
        tBtn.classList.replace('text-slate-900', 'text-slate-500');
        tBtn.classList.replace('bg-white', 'hover:bg-slate-200/50');
    } else {
        tierlistView.classList.remove('hidden');
        builderView.classList.add('hidden');
        tBtn.classList.replace('text-slate-500', 'text-slate-900');
        tBtn.classList.replace('hover:bg-slate-200/50', 'bg-white');
        bBtn.classList.replace('text-slate-900', 'text-slate-500');
        bBtn.classList.replace('bg-white', 'hover:bg-slate-200/50');
    }
}