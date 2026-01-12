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
        openRotationModal, closeRotationModal, showCharacterStats
    });
});

function showCharacterStats() {
    // Count character appearances in teams
    const charUsage = {};
    resonators.forEach(char => charUsage[char.id] = 0);
    
    rankedTeams.forEach(team => {
        team.members.forEach(memberId => {
            if (charUsage[memberId] !== undefined) {
                charUsage[memberId]++;
            }
        });
    });
    
    // Get top 10 most used
    const sorted = Object.entries(charUsage)
        .map(([id, count]) => ({ char: resonators.find(r => r.id === id), count }))
        .filter(item => item.char && item.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    
    console.log('Top 10 Most Used Characters:', sorted);
    return sorted;
}

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

function getElementGradient(element) {
    const map = {
        [elements.GLACIO]: 'from-sky-600 to-sky-800',
        [elements.FUSION]: 'from-orange-600 to-orange-800',
        [elements.ELECTRO]: 'from-purple-700 to-purple-900',
        [elements.AERO]: 'from-teal-600 to-teal-800',
        [elements.SPECTRO]: 'from-yellow-600 to-yellow-800',
        [elements.HAVOC]: 'from-rose-900 to-slate-900'
    };
    return map[element] || 'from-slate-600 to-slate-800';
}

function getTierColor(tier) {
    const map = {
        'T0': 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
        'T0.5': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
        'T1': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
        'T1.5': 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
        'T2': 'bg-gradient-to-r from-slate-400 to-slate-500 text-white'
    };
    return map[tier] || 'bg-slate-200 text-slate-800';
}

function openSelector(slotId) {
    activeSlot = slotId;
    modal.classList.remove('hidden');
    renderModalGrid();
    searchInput.value = '';
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

    // Sort: 5-star first, then alphabetically
    matches.sort((a, b) => {
        if (a.rarity !== b.rarity) return b.rarity - a.rarity;
        return a.name.localeCompare(b.name);
    });

    matches.forEach(res => {
        const div = document.createElement('div');
        div.className = "cursor-pointer group bg-white border border-slate-200 rounded-xl p-3 hover:shadow-lg hover:border-wuwa-500 transition-all flex flex-col items-center";
        div.onclick = () => selectChar(res.id);
        
        div.innerHTML = `
            <div class="relative w-14 h-14 mb-2">
                <img src="${res.img}" class="w-full h-full rounded-full object-cover border-2 ${res.rarity === 5 ? 'border-yellow-400' : 'border-purple-400'}">
                <div class="absolute -top-1 -right-1 w-5 h-5 rounded-full ${res.rarity === 5 ? 'bg-yellow-400' : 'bg-purple-400'} text-white text-[10px] font-bold flex items-center justify-center shadow">${res.rarity}</div>
            </div>
            <div class="text-center">
                <p class="text-xs font-bold text-slate-800 leading-tight">${res.name}</p>
                <span class="text-[10px] ${getElementColor(res.element)} px-1 rounded mt-1 inline-block">${res.element}</span>
            </div>
        `;
        modalGrid.appendChild(div);
    });

    if (matches.length === 0) {
        modalGrid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400">No characters found</div>`;
    }
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

function applyTeam(teamId) {
    const team = rankedTeams.find(t => t.id === teamId);
    if(!team) return;

    // Reset all slots first
    [1, 2, 3].forEach(slotId => {
        if (currentTeam[slotId]) {
            clearSlot(slotId);
        }
    });

    // Apply new team
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
        const gradient = getElementGradient(activeResonance);
        resonancePanel.className = `rounded-xl p-4 text-white shadow-lg flex items-center gap-4 bg-gradient-to-r transition-colors duration-500 ${gradient}`;
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

    // Sort by tier quality
    const tierOrder = { 'T0': 0, 'T0.5': 1, 'T1': 2, 'T1.5': 3, 'T2': 4 };
    relevantTeams.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    if (relevantTeams.length === 0) {
        suggestionsGrid.innerHTML = `<div class="col-span-full text-center text-slate-500 py-4">No pre-defined meta teams found with your current selections.</div>`;
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
                        <span class="text-xs font-bold px-2 py-1 rounded ${getTierColor(team.tier)}">${team.tier}</span>
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
    [1, 2, 3].forEach(id => {
        if (currentTeam[id]) {
            clearSlot(id);
        }
    });
    tacticalPanel.classList.add('hidden');
    suggestionsArea.classList.add('hidden');
}

function openRotationModal(teamId) {
    const team = rankedTeams.find(t => t.id === teamId);
    if(!team || !team.rotation) return;
    rotationSteps.innerHTML = '';
    team.rotation.forEach((step, index) => {
        const li = document.createElement('li');
        li.className = "pl-6 relative pb-4";
        li.innerHTML = `
            <span class="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">${index + 1}</span>
            <p class="text-slate-800 font-medium">${step}</p>
        `;
        rotationSteps.appendChild(li);
    });
    rotationModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
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

    // Enhanced sorting
    list.sort((a, b) => {
        switch(currentTierState.sort) {
            case 'dps': 
                return b.stats.dps - a.stats.dps;
            case 'ease': 
                return (b.radar?.ease || 50) - (a.radar?.ease || 50);
            default: 
                const tierOrder = { 'T0': 0, 'T0.5': 1, 'T1': 2, 'T1.5': 3, 'T2': 4 };
                return tierOrder[a.tier] - tierOrder[b.tier];
        }
    });

    // Update statistics
    updateTierStatistics();

    if(list.length === 0) {
        tierListContainer.innerHTML = `<div class="text-center py-10 text-slate-500">No teams found matching these filters.</div>`;
        return;
    }

    list.forEach(team => {
        const memberObjs = team.members.map(id => resonators.find(r => r.id === id));
        const div = document.createElement('div');
        div.className = "bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:border-wuwa-500 transition-all";
        
        div.innerHTML = `
            <div class="flex-shrink-0 text-center md:text-left min-w-[100px]">
                <span class="inline-block px-3 py-1 rounded-lg text-sm font-black ${getTierColor(team.tier)}">${team.tier}</span>
                <div class="text-xs font-bold text-slate-400 uppercase mt-1">${team.type}</div>
            </div>
            <div class="flex -space-x-3">
                ${memberObjs.map(m => `<img src="${m.img}" class="w-14 h-14 rounded-full border-2 border-white shadow-sm" title="${m.name}">`).join('')}
            </div>
            <div class="flex-grow text-center md:text-left">
                <div class="flex items-center gap-2 justify-center md:justify-start mb-1">
                    <h3 class="font-bold text-slate-900">${team.name}</h3>
                    ${team.rotation ? `<button onclick="openRotationModal('${team.id}')" class="text-xs text-wuwa-600 bg-wuwa-50 px-2 py-0.5 rounded hover:bg-wuwa-100"><i data-lucide="book-open" class="inline w-3 h-3"></i> Guide</button>` : ''}
                </div>
                <p class="text-sm text-slate-500 leading-snug">${team.desc}</p>
            </div>
             <div class="grid grid-cols-4 gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 min-w-[280px]">
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">DPS</div>
                    <div class="font-mono font-bold text-slate-800 text-sm">${formatNumber(team.stats.dps)}</div>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Total</div>
                    <div class="font-mono font-bold text-slate-800 text-sm">${formatNumber(team.stats.total_dmg)}</div>
                </div>
                 <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Time</div>
                    <div class="font-mono font-bold text-slate-800 text-sm">${team.stats.rot_time}s</div>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 uppercase font-bold">Ease</div>
                    <div class="font-mono font-bold text-slate-800 text-sm">${team.radar ? team.radar.ease : 50}/100</div>
                </div>
            </div>
        `;
        tierListContainer.appendChild(div);
    });
    lucide.createIcons();
}

function updateTierStatistics() {
    const tierCounts = { 'T0': 0, 'T0.5': 0, 'T1': 0, 'T1.5': 0, 'T2': 0 };
    rankedTeams.forEach(team => {
        if (tierCounts[team.tier] !== undefined) {
            tierCounts[team.tier]++;
        }
    });
    
    const statElements = {
        'T0': document.getElementById('stat-t0'),
        'T0.5': document.getElementById('stat-t05'),
        'T1': document.getElementById('stat-t1'),
        'T1.5': document.getElementById('stat-t15'),
        'T2': document.getElementById('stat-t2')
    };
    
    Object.keys(statElements).forEach(tier => {
        if (statElements[tier]) {
            statElements[tier].textContent = tierCounts[tier];
        }
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
        bBtn.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
        bBtn.classList.remove('text-slate-500', 'hover:bg-slate-200/50');
        tBtn.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
        tBtn.classList.add('text-slate-500', 'hover:bg-slate-200/50');
    } else {
        tierlistView.classList.remove('hidden');
        builderView.classList.add('hidden');
        tBtn.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
        tBtn.classList.remove('text-slate-500', 'hover:bg-slate-200/50');
        bBtn.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
        bBtn.classList.add('text-slate-500', 'hover:bg-slate-200/50');
    }
}