/**
 * Wuthering Waves Team Builder Data - Patch 3.0 Complete Edition
 * Features: Builds, Weapons, Echoes, Rotations, Stats
 */

export const roles = {
    MAIN_DPS: "Main DPS",
    SUB_DPS: "Sub DPS",
    SUPPORT: "Support / Healer"
};

export const elements = {
    HAVOC: "Havoc",
    SPECTRO: "Spectro",
    GLACIO: "Glacio",
    FUSION: "Fusion",
    AERO: "Aero",
    ELECTRO: "Electro"
};

// --- COMPLETE CHARACTER ROSTER WITH BUILD DATA ---
export const resonators = [
    // --- 3.0 NEW UNITS ---
    { 
        id: "camellya", name: "Camellya", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Camellya",
        build: { set: "Sun-sinking Eclipse", echo: "Dreamless", weapon_5: "Red Spring", weapon_4: "Commando of Conviction" }
    },
    { 
        id: "shorekeeper", name: "Shorekeeper", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Shorekeeper",
        build: { set: "Rejuvenating Glow", echo: "Fallacy of No Return", weapon_5: "Stellar Symphony", weapon_4: "Variation" }
    },
    { 
        id: "lynae", name: "Lynae", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Lynae",
        build: { set: "Celestial Light", echo: "Jue", weapon_5: "Echoes of Time", weapon_4: "Rectifier #25" }
    },
    { 
        id: "augusta", name: "Augusta", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Augusta",
        build: { set: "Void Thunder", echo: "Mephis", weapon_5: "Thunderclap", weapon_4: "Autumntrace" }
    },
    { 
        id: "iuno", name: "Iuno", element: elements.ELECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/a855f7/ffffff?text=Iuno",
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Origin", weapon_4: "Variation" }
    },
    { 
        id: "carlotta", name: "Carlotta", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Carlotta",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Frosty Justice", weapon_4: "Lunar Cutter" }
    },
    
    // --- 5 STARS ---
    { 
        id: "jinhsi", name: "Jinhsi", element: elements.SPECTRO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Jinhsi",
        build: { set: "Celestial Light", echo: "Jue", weapon_5: "Ages of Harvest", weapon_4: "Verdant Summit (Alt) / Helios" }
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
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Rime-Draped Sprouts", weapon_4: "Augment" }
    },
    { 
        id: "rover_havoc", name: "Rover (Havoc)", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Rover(H)",
        build: { set: "Sun-sinking Eclipse", echo: "Dreamless", weapon_5: "Emerald of Genesis", weapon_4: "Commando of Conviction" }
    },
    { 
        id: "rover_spectro", name: "Rover (Spec)", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Rover(S)",
        build: { set: "Celestial Light", echo: "Jue", weapon_5: "Emerald of Genesis", weapon_4: "Commando of Conviction" }
    },
    { 
        id: "verina", name: "Verina", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, 
        img: "https://placehold.co/128/fff7ed/000000?text=Verina",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne Geochelone", weapon_5: "Cosmic Ripples", weapon_4: "Variation" }
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
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Abyss Surges", weapon_4: "Marcato" }
    },
    { 
        id: "lingyang", name: "Lingyang", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, 
        img: "https://placehold.co/128/bae6fd/000000?text=Lingyang",
        build: { set: "Freezing Frost", echo: "Lampylumen", weapon_5: "Abyss Surges", weapon_4: "Hollow Mire" }
    },

    // --- 4 STARS ---
    { 
        id: "sanhua", name: "Sanhua", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/bae6fd/000000?text=Sanhua",
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "danjin", name: "Danjin", element: elements.HAVOC, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Danjin",
        build: { set: "Sun-sinking Eclipse", echo: "Crownless", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "mortefi", name: "Mortefi", element: elements.FUSION, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/fca5a5/000000?text=Mortefi",
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Static Mist", weapon_4: "Novaburst" }
    },
    { 
        id: "baizhi", name: "Baizhi", element: elements.GLACIO, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/bae6fd/000000?text=Baizhi",
        build: { set: "Rejuvenating Glow", echo: "Bell-Borne", weapon_5: "Cosmic Ripples", weapon_4: "Rectifier #25" }
    },
    { 
        id: "yangyang", name: "Yangyang", element: elements.AERO, role: roles.SUB_DPS, rarity: 4, 
        img: "https://placehold.co/128/86efac/000000?text=Yangyang",
        build: { set: "Moonlit Clouds", echo: "Impermanence Heron", weapon_5: "Emerald of Genesis", weapon_4: "Commando" }
    },
    { 
        id: "chixia", name: "Chixia", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 4, 
        img: "https://placehold.co/128/fca5a5/000000?text=Chixia",
        build: { set: "Molten Rift", echo: "Inferno Rider", weapon_5: "Static Mist", weapon_4: "Pistols #26" }
    },
    { 
        id: "taoqi", name: "Taoqi", element: elements.HAVOC, role: roles.SUPPORT, rarity: 4, 
        img: "https://placehold.co/128/3b0764/ffffff?text=Taoqi",
        build: { set: "Moonlit Clouds", echo: "Heron / Bell-Borne", weapon_5: "Dauntless Evernight", weapon_4: "Discord" }
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

// --- TEAMS WITH STATS & ROTATIONS ---
export const rankedTeams = [
    {
        id: "t_camellya_hyper",
        name: "Camellya Hypercarry",
        tier: "T0",
        type: "P2W",
        members: ["camellya", "sanhua", "shorekeeper"],
        desc: "Sanhua buffs Basic Atk (Camellya's main source). Shorekeeper ensures 100% Crit.",
        stats: { dps: 52400, total_dmg: 1257600, rot_time: 24 },
        rotation: ["Shorekeeper Intro", "Shorekeeper E + Q", "Sanhua Intro", "Sanhua E + R + Heavy", "Sanhua Outro", "Camellya Intro", "Camellya Liberation Mode (Spam Basic)", "Camellya R", "Repeat"]
    },
    {
        id: "t_jinhsi_zhezhi",
        name: "Jinhsi Premium",
        tier: "T0",
        type: "P2W",
        members: ["jinhsi", "zhezhi", "verina"],
        desc: "Zhezhi builds Jinhsi's stacks faster than anyone else. Highest burst.",
        stats: { dps: 49800, total_dmg: 1145400, rot_time: 23 },
        rotation: ["Verina R -> E -> Jump+Atk -> Outro", "Zhezhi Intro -> E (3x) -> R -> Outro", "Jinhsi Intro -> E -> Auto -> E (Dragon) -> R", "Swap Cancel"]
    },
    {
        id: "t_jinhsi_yuanwu",
        name: "Jinhsi Coordinator",
        tier: "T0.5",
        type: "F2P Friendly",
        members: ["jinhsi", "yuanwu", "verina"],
        desc: "Yuanwu provides easy stack generation with minimal field time.",
        stats: { dps: 41200, total_dmg: 906400, rot_time: 22 },
        rotation: ["Verina R -> E -> Outro", "Yuanwu Intro -> E -> Outro (Fast)", "Jinhsi Intro -> Full Combo -> R"]
    },
    {
        id: "t_augusta_mono",
        name: "Augusta Thunder",
        tier: "T0",
        type: "P2W",
        members: ["augusta", "yinlin", "iuno"],
        desc: "Mono-Electro. Yinlin executes, Augusta sustains.",
        stats: { dps: 51000, total_dmg: 1275000, rot_time: 25 },
        rotation: ["Iuno Shield -> R", "Yinlin E -> Auto -> E -> R -> Heavy -> Outro", "Augusta Intro -> R -> Unga Bunga", "Repeat"]
    },
    {
        id: "t_changli_encore",
        name: "Changli Dual Fire",
        tier: "T0.5",
        type: "P2W",
        members: ["encore", "changli", "verina"],
        desc: "Quickswap Heavy. Changli buffs Fusion for Encore.",
        stats: { dps: 44500, total_dmg: 1068000, rot_time: 24 },
        rotation: ["Verina Buffs", "Changli E -> True Sight -> E", "Swap Encore -> E -> Heavy", "Swap Changli -> R -> Heavy -> Outro", "Encore R -> Burst Window"]
    },
    {
        id: "t_xiangli_yinlin",
        name: "Xiangli Yao Logic",
        tier: "T0.5",
        type: "P2W",
        members: ["xiangli_yao", "yinlin", "verina"],
        desc: "Perfect sync between Xiangli's Ult and Yinlin's punishment.",
        stats: { dps: 46200, total_dmg: 1016400, rot_time: 22 },
        rotation: ["Verina Combo", "Yinlin Full Rotation -> Outro", "Xiangli Intro -> R -> E (Enhanced) -> Cube Spam"]
    },
    {
        id: "t_jiyan_mortefi",
        name: "Jiyan Aero God",
        tier: "T1",
        type: "P2W",
        members: ["jiyan", "mortefi", "verina"],
        desc: "Classic AoE King. Mortefi S6 is a monster here.",
        stats: { dps: 39500, total_dmg: 829500, rot_time: 21 },
        rotation: ["Verina R+E", "Mortefi R -> E -> E -> Outro", "Jiyan Intro -> R -> Hold Attack (Lance Mode)"]
    },
    {
        id: "t_rover_havoc_danjin",
        name: "Dark Rover Nuke",
        tier: "T1",
        type: "F2P God",
        members: ["rover_havoc", "danjin", "verina"],
        desc: "Danjin buffs Havoc DMG by 23%. High risk, high reward.",
        stats: { dps: 38800, total_dmg: 814800, rot_time: 21 },
        rotation: ["Verina Buffs", "Danjin E (Spam until red bar full) -> Heavy -> Outro", "Rover Intro -> R -> E -> Dark Surge Mode"]
    },
    {
        id: "t_carlotta_skill",
        name: "Carlotta Skill Spam",
        tier: "T0.5",
        type: "P2W",
        members: ["carlotta", "zhezhi", "shorekeeper"],
        desc: "Glacio dominance. Carlotta resets CDs, Zhezhi fills gaps.",
        stats: { dps: 43100, total_dmg: 948200, rot_time: 22 },
        rotation: ["Shorekeeper Buffs", "Zhezhi Sub-DPS Rotation -> Outro", "Carlotta Intro -> Skill Reset Loops -> R"]
    },
    {
        id: "t_chixia_quick",
        name: "Chixia Revolver",
        tier: "T2",
        type: "F2P",
        members: ["chixia", "yangyang", "baizhi"],
        desc: "Yangyang feeds Energy to Chixia for constant Ults.",
        stats: { dps: 26800, total_dmg: 536000, rot_time: 20 },
        rotation: ["Baizhi Buffs", "Yangyang R -> E -> Outro (Energy)", "Chixia Intro -> E (Hold) -> Boom -> R"]
    }
];