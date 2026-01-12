/**
 * Wuthering Waves Team Builder Data - Patch 3.0 Complete Database
 * Updated with ALL characters and extensive team compositions
 */

export const elements = {
    HAVOC: "Havoc",
    SPECTRO: "Spectro",
    GLACIO: "Glacio",
    FUSION: "Fusion",
    AERO: "Aero",
    ELECTRO: "Electro"
};

export const roles = {
    MAIN_DPS: "Main DPS",
    SUB_DPS: "Sub DPS",
    SUPPORT: "Support / Healer"
};

// --- ALL CHARACTERS (Complete Patch 3.0 Roster) ---
export const resonators = [
    // === 3.0 NEW CHARACTERS ===
    { 
        id: "lynae", name: "Lynae", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Lynae",
        build: { set: "Pact of Neonlight Leap", echo: "Jue", weapon_5: "Echoes of Time", weapon_4: "Rectifier #25" }
    },
    { 
        id: "mornye", name: "Mornye", element: elements.FUSION, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Mornye",
        build: { set: "Halo of Starry Radiance", echo: "Bell-Borne", weapon_5: "Stellar Symphony", weapon_4: "Broadblade #41" }
    },
    
    // === 2.X CHARACTERS ===
    { 
        id: "cartethyia", name: "Cartethyia", element: elements.AERO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/86efac/000000?text=Cartethyia",
        build: { set: "Sierra Gale", echo: "Feilian Beringal", weapon_5: "Abyss Surges", weapon_4: "Gauntlets #21" }
    },
    { 
        id: "ciaccona", name: "Ciaccona", element: elements.AERO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/86efac/000000?text=Ciaccona",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Static Mist", weapon_4: "Pistols #26" }
    },
    { 
        id: "augusta", name: "Augusta", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Augusta",
        build: { set: "Void Thunder", echo: "Mephis", weapon_5: "Thunderclap", weapon_4: "Autumntrace" }
    },
    { 
        id: "iuno", name: "Iuno", element: elements.ELECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Iuno",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Origin", weapon_4: "Variation" }
    },
    { 
        id: "zani", name: "Zani", element: elements.SPECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Zani",
        build: { set: "Rite of Gilded Revelation", echo: "Jue", weapon_5: "Verdant Summit", weapon_4: "Autumntrace" }
    },
    { 
        id: "phoebe", name: "Phoebe", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Phoebe",
        build: { set: "Celestial Light", echo: "Fallacy of No Return", weapon_5: "Cosmic Ripples", weapon_4: "Rectifier #25" }
    },
    { 
        id: "brant", name: "Brant", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Brant",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Blazing Brilliance", weapon_4: "Emerald of Genesis" }
    },
    { 
        id: "lupa", name: "Lupa", element: elements.FUSION, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Lupa",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Abyss Surges", weapon_4: "Broadblade #41" }
    },
    { 
        id: "carlotta", name: "Carlotta", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Carlotta",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Frosty Justice", weapon_4: "Lunar Cutter" }
    },
    { 
        id: "roccia", name: "Roccia", element: elements.HAVOC, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Roccia",
        build: { set: "Sun-sinking Eclipse", echo: "Dreamless", weapon_5: "Cosmic Ripples", weapon_4: "Rectifier #25" }
    },
    { 
        id: "camellya", name: "Camellya", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Camellya",
        build: { set: "Sun-sinking Eclipse", echo: "Dreamless", weapon_5: "Red Spring", weapon_4: "Commando" }
    },
    { 
        id: "shorekeeper", name: "Shorekeeper", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Shorekeeper",
        build: { set: "Rejuvenating Glow", echo: "Fallacy of No Return", weapon_5: "Stellar Symphony", weapon_4: "Variation" }
    },
    { 
        id: "phrolova", name: "Phrolova", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Phrolova",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Rime-Draped Sprouts", weapon_4: "Augment" }
    },
    { 
        id: "cantarella", name: "Cantarella", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Cantarella",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Stringmaster", weapon_4: "Augment" }
    },
    
    // === 1.X CORE CHARACTERS ===
    { 
        id: "jinhsi", name: "Jinhsi", element: elements.SPECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Jinhsi",
        build: { set: "Celestial Light", echo: "Jue", weapon_5: "Ages of Harvest", weapon_4: "Helios Cleaver" }
    },
    { 
        id: "changli", name: "Changli", element: elements.FUSION, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Changli",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Blazing Brilliance", weapon_4: "Emerald of Genesis" }
    },
    { 
        id: "jiyan", name: "Jiyan", element: elements.AERO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/86efac/000000?text=Jiyan",
        build: { set: "Sierra Gale", echo: "Feilian Beringal", weapon_5: "Verdant Summit", weapon_4: "Autumntrace" }
    },
    { 
        id: "yinlin", name: "Yinlin", element: elements.ELECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Yinlin",
        build: { set: "Void Thunder", echo: "Tempest Mephis", weapon_5: "Stringmaster", weapon_4: "Augment" }
    },
    { 
        id: "xiangli_yao", name: "Xiangli Yao", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Xiangli",
        build: { set: "Void Thunder", echo: "Tempest Mephis", weapon_5: "Verity's Handle", weapon_4: "Stonard" }
    },
    { 
        id: "zhezhi", name: "Zhezhi", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Zhezhi",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Rime-Draped Sprouts", weapon_4: "Augment" }
    },
    { 
        id: "rover_havoc", name: "Rover (Havoc)", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Rover(H)",
        build: { set: "Sun-sinking Eclipse", echo: "Dreamless", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "rover_spectro", name: "Rover (Spec)", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Rover(S)",
        build: { set: "Celestial Light", echo: "Jue", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "rover_aero", name: "Rover (Aero)", element: elements.AERO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/86efac/000000?text=Rover(A)",
        build: { set: "Sierra Gale", echo: "Feilian Beringal", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "verina", name: "Verina", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Verina",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne", weapon_5: "Cosmic Ripples", weapon_4: "Variation" }
    },
    { 
        id: "calcharo", name: "Calcharo", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Calcharo",
        build: { set: "Void Thunder", echo: "Tempest Mephis", weapon_5: "Verdant Summit", weapon_4: "Autumntrace" }
    },
    { 
        id: "encore", name: "Encore", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Encore",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Stringmaster", weapon_4: "Augment" }
    },
    { 
        id: "jianxin", name: "Jianxin", element: elements.AERO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/86efac/000000?text=Jianxin",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Abyss Surges", weapon_4: "Marcato" }
    },
    { 
        id: "lingyang", name: "Lingyang", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Lingyang",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Abyss Surges", weapon_4: "Hollow Mire" }
    },
    { 
        id: "galbrena", name: "Galbrena", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fca5a5/000000?text=Galbrena",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Blazing Brilliance", weapon_4: "Emerald of Genesis" }
    },
    
    // === 4 STARS ===
    { 
        id: "chisa", name: "Chisa", element: elements.HAVOC, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Chisa",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne", weapon_5: "Cosmic Ripples", weapon_4: "Commando" }
    },
    { 
        id: "sanhua", name: "Sanhua", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/bae6fd/000000?text=Sanhua",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "danjin", name: "Danjin", element: elements.HAVOC, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Danjin",
        build: { set: "Sun-sinking Eclipse", echo: "Crownless", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "mortefi", name: "Mortefi", element: elements.FUSION, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/fca5a5/000000?text=Mortefi",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Static Mist", weapon_4: "Novaburst" }
    },
    { 
        id: "baizhi", name: "Baizhi", element: elements.GLACIO, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/bae6fd/000000?text=Baizhi",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne", weapon_5: "Cosmic Ripples", weapon_4: "Rectifier #25" }
    },
    { 
        id: "yangyang", name: "Yangyang", element: elements.AERO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/86efac/000000?text=Yangyang",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "chixia", name: "Chixia", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 4, 
        img: "https://placehold.co/128/fca5a5/000000?text=Chixia",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Static Mist", weapon_4: "Pistols #26" }
    },
    { 
        id: "taoqi", name: "Taoqi", element: elements.HAVOC, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Taoqi",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Dauntless Evernight", weapon_4: "Discord" }
    },
    { 
        id: "yuanwu", name: "Yuanwu", element: elements.ELECTRO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Yuanwu",
        build: { set: "Moonlit Clouds", echo: "Bell-Borne", weapon_5: "Abyss Surges", weapon_4: "Amity Accord" }
    },
    { 
        id: "aalto", name: "Aalto", element: elements.AERO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/86efac/000000?text=Aalto",
        build: { set: "Moonlit Clouds", echo: "Heron", weapon_5: "Static Mist", weapon_4: "Novaburst" }
    },
    { 
        id: "youhu", name: "Youhu", element: elements.GLACIO, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/bae6fd/000000?text=Youhu",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne", weapon_5: "Abyss Surges", weapon_4: "Gauntlets #21" }
    }
];

// --- EXPANDED TEAMS DATABASE (50+ Teams) ---
export const rankedTeams = [
    // ========== T0 - META DEFINING ==========
    {
        id: "t_lynae_augusta_iuno",
        name: "Sun & Moon (3.0 Meta)",
        tier: "T0",
        type: "P2W",
        element: elements.SPECTRO,
        members: ["lynae", "augusta", "iuno"],
        desc: "3.0's flagship team. Tune Break synergy at its finest.",
        stats: { dps: 54200, total_dmg: 1300800, rot_time: 24 },
        radar: { burst: 95, sustain: 95, aoe: 90, ease: 92 },
        rotation: ["Iuno Shield", "Lynae Buffs+Break", "Augusta Execute"]
    },
    {
        id: "t_zani_phoebe_shore",
        name: "Zani Spectro Frazzle",
        tier: "T0",
        type: "P2W",
        element: elements.SPECTRO,
        members: ["zani", "phoebe", "shorekeeper"],
        desc: "Peak Spectro Frazzle stacking for massive damage.",
        stats: { dps: 53800, total_dmg: 1291200, rot_time: 24 },
        radar: { burst: 100, sustain: 90, aoe: 85, ease: 70 },
        rotation: ["Shorekeeper Buffs", "Phoebe Confession", "Zani Frazzle Burst"]
    },
    {
        id: "t_cartethyia_ciaccona_rover",
        name: "Cartethyia Aero Erosion",
        tier: "T0",
        type: "P2W",
        element: elements.AERO,
        members: ["cartethyia", "ciaccona", "rover_aero"],
        desc: "The ultimate Aero Erosion setup. Top Aero DPS.",
        stats: { dps: 53500, total_dmg: 1284000, rot_time: 24 },
        radar: { burst: 95, sustain: 85, aoe: 95, ease: 88 },
        rotation: ["Rover Aero Erosion", "Ciaccona Buffs", "Cartethyia HP Scaling"]
    },
    {
        id: "t_camellya_hyper",
        name: "Camellya Hypercarry",
        tier: "T0",
        type: "P2W",
        element: elements.HAVOC,
        members: ["camellya", "sanhua", "shorekeeper"],
        desc: "Sanhua buffs Basic Atk. Shorekeeper gives Crit.",
        stats: { dps: 52400, total_dmg: 1257600, rot_time: 24 },
        radar: { burst: 80, sustain: 90, aoe: 75, ease: 90 },
        rotation: ["Shorekeeper E+Q", "Sanhua Intro+E+R", "Camellya Intro+Lib Mode"]
    },
    {
        id: "t_augusta_mono",
        name: "Augusta Thunder",
        tier: "T0",
        type: "P2W",
        element: elements.ELECTRO,
        members: ["augusta", "yinlin", "iuno"],
        desc: "Unstoppable Electro force with shields.",
        stats: { dps: 51000, total_dmg: 1275000, rot_time: 25 },
        radar: { burst: 85, sustain: 100, aoe: 85, ease: 95 },
        rotation: ["Iuno Shield", "Yinlin Debuff", "Augusta Smash"]
    },
    {
        id: "t_carlotta_premium",
        name: "Carlotta Freeze",
        tier: "T0",
        type: "P2W",
        element: elements.GLACIO,
        members: ["carlotta", "zhezhi", "shorekeeper"],
        desc: "Peak Glacio synergy with insane buffs.",
        stats: { dps: 50200, total_dmg: 1205000, rot_time: 24 },
        radar: { burst: 95, sustain: 85, aoe: 80, ease: 88 },
        rotation: ["Shorekeeper Buffs", "Zhezhi Stack Build", "Carlotta Execute"]
    },
    {
        id: "t_jinhsi_zhezhi",
        name: "Jinhsi Premium",
        tier: "T0",
        type: "P2W",
        element: elements.SPECTRO,
        members: ["jinhsi", "zhezhi", "verina"],
        desc: "The stack building king. Massive Burst.",
        stats: { dps: 49800, total_dmg: 1145400, rot_time: 23 },
        radar: { burst: 100, sustain: 80, aoe: 90, ease: 85 },
        rotation: ["Verina Buffs", "Zhezhi E3+R", "Jinhsi Nuke"]
    },
    {
        id: "t_brant_changli_lupa",
        name: "Brant Fusion God",
        tier: "T0",
        type: "P2W",
        element: elements.FUSION,
        members: ["brant", "changli", "lupa"],
        desc: "Triple Fusion synergy with self-sustain.",
        stats: { dps: 49500, total_dmg: 1188000, rot_time: 24 },
        radar: { burst: 90, sustain: 95, aoe: 85, ease: 80 },
        rotation: ["Lupa Buffs", "Changli Setup", "Brant Burst"]
    },
    {
        id: "t_cantarella_phrolova_shore",
        name: "Cantarella Echo Spam",
        tier: "T0",
        type: "P2W",
        element: elements.GLACIO,
        members: ["cantarella", "phrolova", "shorekeeper"],
        desc: "Maximize Hecate triggers with Echo spam.",
        stats: { dps: 48900, total_dmg: 1173600, rot_time: 24 },
        radar: { burst: 85, sustain: 90, aoe: 80, ease: 75 },
        rotation: ["Shorekeeper Support", "Phrolova Off-field", "Cantarella Echo Spam"]
    },

    // ========== T0.5 - EXCELLENT PERFORMANCE ==========
    {
        id: "t_jinhsi_yuanwu",
        name: "Jinhsi Budget",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.SPECTRO,
        members: ["jinhsi", "yuanwu", "verina"],
        desc: "Yuanwu builds stacks AFK.",
        stats: { dps: 41200, total_dmg: 906400, rot_time: 22 },
        radar: { burst: 95, sustain: 80, aoe: 85, ease: 95 },
        rotation: ["Verina Buffs", "Yuanwu E", "Jinhsi Nuke"]
    },
    {
        id: "t_changli_encore",
        name: "Changli Dual Fire",
        tier: "T0.5",
        type: "P2W",
        element: elements.FUSION,
        members: ["encore", "changli", "verina"],
        desc: "Fusion Quickswap Madness.",
        stats: { dps: 44500, total_dmg: 1068000, rot_time: 24 },
        radar: { burst: 90, sustain: 75, aoe: 70, ease: 60 },
        rotation: ["Verina Buffs", "Changli Setup", "Encore Burst"]
    },
    {
        id: "t_xiangli_yinlin",
        name: "Xiangli Yao Logic",
        tier: "T0.5",
        type: "P2W",
        element: elements.ELECTRO,
        members: ["xiangli_yao", "yinlin", "verina"],
        desc: "Calculated Destruction.",
        stats: { dps: 46200, total_dmg: 1016400, rot_time: 22 },
        radar: { burst: 90, sustain: 80, aoe: 85, ease: 75 },
        rotation: ["Verina Buffs", "Yinlin Setup", "Xiangli Cube Spam"]
    },
    {
        id: "t_camellya_budget",
        name: "Camellya F2P",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.HAVOC,
        members: ["camellya", "danjin", "verina"],
        desc: "Budget Havoc powerhouse still hits hard.",
        stats: { dps: 43800, total_dmg: 1051200, rot_time: 24 },
        radar: { burst: 75, sustain: 70, aoe: 70, ease: 85 },
        rotation: ["Verina Buffs", "Danjin Intro", "Camellya Liberation"]
    },
    {
        id: "t_carlotta_sanhua",
        name: "Carlotta Budget",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.GLACIO,
        members: ["carlotta", "sanhua", "verina"],
        desc: "Affordable freeze comp with great synergy.",
        stats: { dps: 42100, total_dmg: 1010400, rot_time: 24 },
        radar: { burst: 85, sustain: 75, aoe: 75, ease: 90 },
        rotation: ["Verina Buffs", "Sanhua BA Buff", "Carlotta Combo"]
    },
    {
        id: "t_galbrena_changli_mornye",
        name: "Galbrena Chimera",
        tier: "T0.5",
        type: "P2W",
        element: elements.FUSION,
        members: ["galbrena", "changli", "mornye"],
        desc: "Demon Hypostasis state with strong support.",
        stats: { dps: 43200, total_dmg: 1036800, rot_time: 24 },
        radar: { burst: 88, sustain: 85, aoe: 75, ease: 78 },
        rotation: ["Mornye Support", "Changli Burn", "Galbrena Chimera Mode"]
    },
    {
        id: "t_zani_lynae_verina",
        name: "Zani Spectro F2P",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.SPECTRO,
        members: ["zani", "lynae", "verina"],
        desc: "F2P Spectro Frazzle team with solid damage.",
        stats: { dps: 42800, total_dmg: 1027200, rot_time: 24 },
        radar: { burst: 90, sustain: 75, aoe: 80, ease: 80 },
        rotation: ["Verina Buffs", "Lynae Confession", "Zani Frazzle"]
    },
    {
        id: "t_augusta_yinlin_verina",
        name: "Augusta Budget Thunder",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.ELECTRO,
        members: ["augusta", "yinlin", "verina"],
        desc: "Replace Iuno with Verina for budget option.",
        stats: { dps: 42500, total_dmg: 1062500, rot_time: 25 },
        radar: { burst: 80, sustain: 80, aoe: 85, ease: 90 },
        rotation: ["Verina Heal", "Yinlin Debuff", "Augusta Execute"]
    },
    {
        id: "t_cartethyia_yangyang_jianxin",
        name: "Cartethyia F2P Aero",
        tier: "T0.5",
        type: "F2P Friendly",
        element: elements.AERO,
        members: ["cartethyia", "yangyang", "jianxin"],
        desc: "Full F2P Aero team with decent performance.",
        stats: { dps: 41800, total_dmg: 1003200, rot_time: 24 },
        radar: { burst: 85, sustain: 70, aoe: 90, ease: 85 },
        rotation: ["Jianxin Shield", "Yangyang Battery", "Cartethyia DPS"]
    },
    {
        id: "t_roccia_camellya_shore",
        name: "Roccia Havoc Support",
        tier: "T0.5",
        type: "P2W",
        element: elements.HAVOC,
        members: ["roccia", "camellya", "shorekeeper"],
        desc: "Roccia enables Camellya with Havoc buffs.",
        stats: { dps: 44100, total_dmg: 1058400, rot_time: 24 },
        radar: { burst: 82, sustain: 88, aoe: 72, ease: 87 },
        rotation: ["Shorekeeper Buffs", "Roccia Intro", "Camellya Burst"]
    },

    // ========== T1 - STRONG VIABLE ==========
    {
        id: "t_jiyan_mortefi",
        name: "Jiyan Aero God",
        tier: "T1",
        type: "P2W",
        element: elements.AERO,
        members: ["jiyan", "mortefi", "verina"],
        desc: "AoE King with consistent damage.",
        stats: { dps: 39500, total_dmg: 829500, rot_time: 21 },
        radar: { burst: 70, sustain: 85, aoe: 100, ease: 90 },
        rotation: ["Verina Buffs", "Mortefi R", "Jiyan Dragon Mode"]
    },
    {
        id: "t_rover_havoc_danjin",
        name: "Dark Rover Nuke",
        tier: "T1",
        type: "F2P God",
        element: elements.HAVOC,
        members: ["rover_havoc", "danjin", "verina"],
        desc: "High Risk, High Reward.",
        stats: { dps: 38800, total_dmg: 814800, rot_time: 21 },
        radar: { burst: 90, sustain: 40, aoe: 80, ease: 50 },
        rotation: ["Verina Buffs", "Danjin Drain", "Rover Nuke"]
    },
    {
        id: "t_encore_sanhua",
        name: "Encore Hybrid",
        tier: "T1",
        type: "P2W",
        element: elements.FUSION,
        members: ["encore", "sanhua", "verina"],
        desc: "Budget friendly Encore comp.",
        stats: { dps: 38200, total_dmg: 916800, rot_time: 24 },
        radar: { burst: 80, sustain: 70, aoe: 65, ease: 75 },
        rotation: ["Verina Buffs", "Sanhua Intro", "Encore Spam"]
    },
    {
        id: "t_jiyan_yinlin",
        name: "Jiyan Electro Hybrid",
        tier: "T1",
        type: "P2W",
        element: elements.AERO,
        members: ["jiyan", "yinlin", "verina"],
        desc: "Off-meta but powerful Jiyan variant.",
        stats: { dps: 37900, total_dmg: 796800, rot_time: 21 },
        radar: { burst: 75, sustain: 80, aoe: 95, ease: 85 },
        rotation: ["Verina Buffs", "Yinlin Debuff", "Jiyan Burst"]
    },
    {
        id: "t_lynae_spectro",
        name: "Lynae Quickswap",
        tier: "T1",
        type: "P2W",
        element: elements.SPECTRO,
        members: ["lynae", "rover_spectro", "verina"],
        desc: "Fast-paced Spectro team.",
        stats: { dps: 37500, total_dmg: 862500, rot_time: 23 },
        radar: { burst: 70, sustain: 75, aoe: 80, ease: 70 },
        rotation: ["Verina Setup", "Rover Stack", "Lynae Burst"]
    },
    {
        id: "t_cantarella_sanhua_baizhi",
        name: "Cantarella Budget",
        tier: "T1",
        type: "F2P Friendly",
        element: elements.GLACIO,
        members: ["cantarella", "sanhua", "baizhi"],
        desc: "F2P Glacio Echo spam setup.",
        stats: { dps: 36800, total_dmg: 883200, rot_time: 24 },
        radar: { burst: 75, sustain: 65, aoe: 75, ease: 80 },
        rotation: ["Baizhi Heal", "Sanhua Buff", "Cantarella Echoes"]
    },
    {
        id: "t_brant_mortefi_verina",
        name: "Brant Budget Fusion",
        tier: "T1",
        type: "F2P Friendly",
        element: elements.FUSION,
        members: ["brant", "mortefi", "verina"],
        desc: "Accessible Fusion team for Brant.",
        stats: { dps: 37200, total_dmg: 892800, rot_time: 24 },
        radar: { burst: 80, sustain: 75, aoe: 80, ease: 85 },
        rotation: ["Verina Support", "Mortefi Buffs", "Brant Execute"]
    },
    {
        id: "t_phrolova_carlotta_verina",
        name: "Phrolova Glacio Sub",
        tier: "T1",
        type: "P2W",
        element: elements.GLACIO,
        members: ["phrolova", "carlotta", "verina"],
        desc: "Phrolova supports Carlotta with off-field damage.",
        stats: { dps: 38500, total_dmg: 924000, rot_time: 24 },
        radar: { burst: 78, sustain: 72, aoe: 70, ease: 82 },
        rotation: ["Verina Buffs", "Phrolova Off-field", "Carlotta Main DPS"]
    },
    {
        id: "t_ciaccona_jiyan_jianxin",
        name: "Ciaccona Aero Support",
        tier: "T1",
        type: "P2W",
        element: elements.AERO,
        members: ["ciaccona", "jiyan", "jianxin"],
        desc: "Ciaccona buffs Jiyan for enhanced AoE.",
        stats: { dps: 38100, total_dmg: 800100, rot_time: 21 },
        radar: { burst: 72, sustain: 78, aoe: 95, ease: 88 },
        rotation: ["Jianxin Shield", "Ciaccona Buffs", "Jiyan Burst"]
    },
    {
        id: "t_phoebe_jinhsi_verina",
        name: "Phoebe Spectro Support",
        tier: "T1",
        type: "P2W",
        element: elements.SPECTRO,
        members: ["phoebe", "jinhsi", "verina"],
        desc: "Phoebe enhances Jinhsi's burst damage.",
        stats: { dps: 39200, total_dmg: 901600, rot_time: 23 },
        radar: { burst: 92, sustain: 75, aoe: 85, ease: 80 },
        rotation: ["Verina Heal", "Phoebe Confession", "Jinhsi Nuke"]
    },

    // ========== T1.5 - SITUATIONAL/NICHE ==========
    {
        id: "t_calcharo_yinlin",
        name: "Calcharo Execute",
        tier: "T1.5",
        type: "P2W",
        element: elements.ELECTRO,
        members: ["calcharo", "yinlin", "verina"],
        desc: "Dodge or Die. High skill ceiling.",
        stats: { dps: 37500, total_dmg: 937500, rot_time: 25 },
        radar: { burst: 90, sustain: 60, aoe: 75, ease: 30 },
        rotation: ["Verina Buffs", "Yinlin Setup", "Calcharo DM Spam"]
    },
    {
        id: "t_xiangli_yuanwu",
        name: "Xiangli Budget",
        tier: "T1.5",
        type: "F2P Friendly",
        element: elements.ELECTRO,
        members: ["xiangli_yao", "yuanwu", "baizhi"],
        desc: "F2P Electro option with decent clear.",
        stats: { dps: 35800, total_dmg: 787600, rot_time: 22 },
        radar: { burst: 75, sustain: 70, aoe: 80, ease: 80 },
        rotation: ["Baizhi Heal", "Yuanwu Field", "Xiangli DPS"]
    },
    {
        id: "t_rover_spectro_aalto",
        name: "Spectro Rover Budget",
        tier: "T1.5",
        type: "F2P",
        element: elements.SPECTRO,
        members: ["rover_spectro", "aalto", "verina"],
        desc: "Early game friendly Spectro comp.",
        stats: { dps: 32500, total_dmg: 715000, rot_time: 22 },
        radar: { burst: 65, sustain: 75, aoe: 70, ease: 85 },
        rotation: ["Verina Buffs", "Aalto Setup", "Rover Combo"]
    },
    {
        id: "t_lingyang_youhu",
        name: "Lingyang Glacio",
        tier: "T1.5",
        type: "F2P",
        element: elements.GLACIO,
        members: ["lingyang", "youhu", "baizhi"],
        desc: "Niche Glacio setup for early players.",
        stats: { dps: 30200, total_dmg: 634200, rot_time: 21 },
        radar: { burst: 60, sustain: 80, aoe: 65, ease: 75 },
        rotation: ["Baizhi Heal", "Youhu Buff", "Lingyang Combo"]
    },
    {
        id: "t_jiyan_yangyang",
        name: "Jiyan F2P",
        tier: "T1.5",
        type: "F2P",
        element: elements.AERO,
        members: ["jiyan", "yangyang", "baizhi"],
        desc: "Budget Jiyan for early players.",
        stats: { dps: 33100, total_dmg: 695100, rot_time: 21 },
        radar: { burst: 65, sustain: 75, aoe: 90, ease: 88 },
        rotation: ["Baizhi Heal", "Yangyang Battery", "Jiyan Burst"]
    },
    {
        id: "t_lupa_encore_verina",
        name: "Lupa Support Encore",
        tier: "T1.5",
        type: "P2W",
        element: elements.FUSION,
        members: ["lupa", "encore", "verina"],
        desc: "Lupa enhances Encore with off-field support.",
        stats: { dps: 34200, total_dmg: 820800, rot_time: 24 },
        radar: { burst: 75, sustain: 68, aoe: 62, ease: 72 },
        rotation: ["Verina Support", "Lupa Off-field", "Encore Burst"]
    },
    {
        id: "t_galbrena_mortefi_baizhi",
        name: "Galbrena F2P",
        tier: "T1.5",
        type: "F2P",
        element: elements.FUSION,
        members: ["galbrena", "mortefi", "baizhi"],
        desc: "Budget Galbrena team with basic synergy.",
        stats: { dps: 33800, total_dmg: 811200, rot_time: 24 },
        radar: { burst: 78, sustain: 75, aoe: 70, ease: 80 },
        rotation: ["Baizhi Heal", "Mortefi Buffs", "Galbrena Chimera"]
    },
    {
        id: "t_rover_havoc_roccia",
        name: "Double Havoc Rover",
        tier: "T1.5",
        type: "F2P Friendly",
        element: elements.HAVOC,
        members: ["rover_havoc", "roccia", "verina"],
        desc: "Roccia buffs Rover for enhanced Havoc damage.",
        stats: { dps: 34500, total_dmg: 724500, rot_time: 21 },
        radar: { burst: 82, sustain: 55, aoe: 78, ease: 70 },
        rotation: ["Verina Support", "Roccia Intro Buff", "Rover Execute"]
    },
    {
        id: "t_mornye_changli_encore",
        name: "Mornye Fusion Support",
        tier: "T1.5",
        type: "P2W",
        element: elements.FUSION,
        members: ["mornye", "changli", "encore"],
        desc: "Mornye provides sustain and buffs for Fusion team.",
        stats: { dps: 35200, total_dmg: 844800, rot_time: 24 },
        radar: { burst: 80, sustain: 85, aoe: 65, ease: 75 },
        rotation: ["Mornye Buffs", "Changli Setup", "Encore DPS"]
    },
    {
        id: "t_chisa_rover_havoc_danjin",
        name: "Chisa Havoc Support",
        tier: "T1.5",
        type: "F2P",
        element: elements.HAVOC,
        members: ["chisa", "rover_havoc", "danjin"],
        desc: "Full F2P Havoc team with Chisa support.",
        stats: { dps: 31800, total_dmg: 667800, rot_time: 21 },
        radar: { burst: 75, sustain: 60, aoe: 75, ease: 65 },
        rotation: ["Chisa Heal", "Danjin Drain", "Rover Nuke"]
    },

    // ========== T2 - STARTER/FUN/EXPERIMENTAL ==========
    {
        id: "t_chixia_quick",
        name: "Chixia Revolver",
        tier: "T2",
        type: "F2P",
        element: elements.FUSION,
        members: ["chixia", "yangyang", "baizhi"],
        desc: "Pew Pew Pew. Beginner friendly.",
        stats: { dps: 26800, total_dmg: 536000, rot_time: 20 },
        radar: { burst: 60, sustain: 70, aoe: 50, ease: 90 },
        rotation: ["Baizhi Buffs", "Yangyang Battery", "Chixia Boom"]
    },
    {
        id: "t_encore_mortefi_f2p",
        name: "Encore Starter",
        tier: "T2",
        type: "F2P",
        element: elements.FUSION,
        members: ["encore", "mortefi", "baizhi"],
        desc: "Beginner friendly Fusion team.",
        stats: { dps: 28400, total_dmg: 681600, rot_time: 24 },
        radar: { burst: 70, sustain: 65, aoe: 55, ease: 85 },
        rotation: ["Baizhi Support", "Mortefi Buffs", "Encore DPS"]
    },
    {
        id: "t_calcharo_budget",
        name: "Calcharo F2P",
        tier: "T2",
        type: "F2P",
        element: elements.ELECTRO,
        members: ["calcharo", "yuanwu", "baizhi"],
        desc: "Budget Calcharo struggles without Yinlin.",
        stats: { dps: 27200, total_dmg: 680000, rot_time: 25 },
        radar: { burst: 75, sustain: 50, aoe: 70, ease: 35 },
        rotation: ["Baizhi Heal", "Yuanwu Field", "Calcharo Execute"]
    },
    {
        id: "t_rover_havoc_taoqi",
        name: "Havoc Rover Tank",
        tier: "T2",
        type: "F2P",
        element: elements.HAVOC,
        members: ["rover_havoc", "taoqi", "baizhi"],
        desc: "Safe but low damage variant.",
        stats: { dps: 25600, total_dmg: 537600, rot_time: 21 },
        radar: { burst: 70, sustain: 85, aoe: 75, ease: 80 },
        rotation: ["Taoqi Shield", "Baizhi Heal", "Rover Attack"]
    },
    {
        id: "t_lingyang_sanhua_youhu",
        name: "Lingyang Full F2P",
        tier: "T2",
        type: "F2P",
        element: elements.GLACIO,
        members: ["lingyang", "sanhua", "youhu"],
        desc: "All free Glacio characters.",
        stats: { dps: 26500, total_dmg: 556500, rot_time: 21 },
        radar: { burst: 55, sustain: 70, aoe: 60, ease: 80 },
        rotation: ["Youhu Buff", "Sanhua Intro", "Lingyang Lion Dance"]
    },
    {
        id: "t_rover_spectro_yangyang",
        name: "Spectro Rover Starter",
        tier: "T2",
        type: "F2P",
        element: elements.SPECTRO,
        members: ["rover_spectro", "yangyang", "baizhi"],
        desc: "Complete F2P starter team.",
        stats: { dps: 24800, total_dmg: 545600, rot_time: 22 },
        radar: { burst: 58, sustain: 72, aoe: 65, ease: 88 },
        rotation: ["Baizhi Heal", "Yangyang Battery", "Rover DPS"]
    },
    {
        id: "t_aalto_yangyang_baizhi",
        name: "Triple Starter Aero",
        tier: "T2",
        type: "F2P",
        element: elements.AERO,
        members: ["aalto", "yangyang", "baizhi"],
        desc: "Ultra budget Aero team for beginners.",
        stats: { dps: 23200, total_dmg: 510400, rot_time: 22 },
        radar: { burst: 50, sustain: 68, aoe: 55, ease: 85 },
        rotation: ["Baizhi Heal", "Yangyang Setup", "Aalto DPS"]
    },
    {
        id: "t_yuanwu_chixia_baizhi",
        name: "Yuanwu Electro Starter",
        tier: "T2",
        type: "F2P",
        element: elements.ELECTRO,
        members: ["yuanwu", "chixia", "baizhi"],
        desc: "Budget Electro team with basic synergy.",
        stats: { dps: 24100, total_dmg: 530200, rot_time: 22 },
        radar: { burst: 52, sustain: 70, aoe: 58, ease: 82 },
        rotation: ["Baizhi Support", "Yuanwu Field", "Chixia DPS"]
    },
    {
        id: "t_danjin_taoqi_baizhi",
        name: "Danjin Havoc Budget",
        tier: "T2",
        type: "F2P",
        element: elements.HAVOC,
        members: ["danjin", "taoqi", "baizhi"],
        desc: "Safe Havoc team with shields and heals.",
        stats: { dps: 22800, total_dmg: 478800, rot_time: 21 },
        radar: { burst: 65, sustain: 75, aoe: 60, ease: 75 },
        rotation: ["Taoqi Shield", "Baizhi Heal", "Danjin Burst"]
    },
    {
        id: "t_jianxin_yangyang_baizhi",
        name: "Jianxin Support Main",
        tier: "T2",
        type: "F2P",
        element: elements.AERO,
        members: ["jianxin", "yangyang", "baizhi"],
        desc: "Ultra defensive Aero setup.",
        stats: { dps: 21500, total_dmg: 451500, rot_time: 21 },
        radar: { burst: 45, sustain: 90, aoe: 70, ease: 90 },
        rotation: ["Baizhi Heal", "Yangyang Battery", "Jianxin Shield+DPS"]
    }
];