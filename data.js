/**
 * Wuthering Waves Team Builder Data - Complete Database
 * Includes Patch 1.0 through 3.0 (Hypothetical)
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

// --- COMPLETE CHARACTER ROSTER ---
export const resonators = [
    // --- 3.0 NEW ---
    { id: "camellya", name: "Camellya", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/3b0764/ffffff?text=Camellya" },
    { id: "shorekeeper", name: "Shorekeeper", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Shorekeeper" },
    { id: "lynae", name: "Lynae", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Lynae" },
    { id: "augusta", name: "Augusta", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Augusta" },
    { id: "iuno", name: "Iuno", element: elements.ELECTRO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Iuno" },
    { id: "carlotta", name: "Carlotta", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/bae6fd/000000?text=Carlotta" },
    
    // --- 1.X - 2.X 5 STARS ---
    { id: "jinhsi", name: "Jinhsi", element: elements.SPECTRO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Jinhsi" },
    { id: "changli", name: "Changli", element: elements.FUSION, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/fca5a5/000000?text=Changli" },
    { id: "jiyan", name: "Jiyan", element: elements.AERO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/86efac/000000?text=Jiyan" },
    { id: "yinlin", name: "Yinlin", element: elements.ELECTRO, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Yinlin" },
    { id: "xiangli_yao", name: "Xiangli Yao", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Xiangli" },
    { id: "zhezhi", name: "Zhezhi", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/bae6fd/000000?text=Zhezhi" },
    { id: "rover_havoc", name: "Rover (Havoc)", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/3b0764/ffffff?text=Rover(H)" },
    { id: "rover_spectro", name: "Rover (Spec)", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Rover(S)" },
    { id: "verina", name: "Verina", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Verina" },
    { id: "calcharo", name: "Calcharo", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Calcharo" },
    { id: "encore", name: "Encore", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/fca5a5/000000?text=Encore" },
    { id: "jianxin", name: "Jianxin", element: elements.AERO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/86efac/000000?text=Jianxin" },
    { id: "lingyang", name: "Lingyang", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/bae6fd/000000?text=Lingyang" },

    // --- 4 STARS ---
    { id: "sanhua", name: "Sanhua", element: elements.GLACIO, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/bae6fd/000000?text=Sanhua" },
    { id: "danjin", name: "Danjin", element: elements.HAVOC, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/3b0764/ffffff?text=Danjin" },
    { id: "mortefi", name: "Mortefi", element: elements.FUSION, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/fca5a5/000000?text=Mortefi" },
    { id: "baizhi", name: "Baizhi", element: elements.GLACIO, role: roles.SUPPORT, rarity: 4, img: "https://placehold.co/128/bae6fd/000000?text=Baizhi" },
    { id: "yangyang", name: "Yangyang", element: elements.AERO, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/86efac/000000?text=Yangyang" },
    { id: "chixia", name: "Chixia", element: elements.FUSION, role: roles.MAIN_DPS, rarity: 4, img: "https://placehold.co/128/fca5a5/000000?text=Chixia" },
    { id: "taoqi", name: "Taoqi", element: elements.HAVOC, role: roles.SUPPORT, rarity: 4, img: "https://placehold.co/128/3b0764/ffffff?text=Taoqi" },
    { id: "yuanwu", name: "Yuanwu", element: elements.ELECTRO, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/a855f7/ffffff?text=Yuanwu" },
    { id: "aalto", name: "Aalto", element: elements.AERO, role: roles.SUB_DPS, rarity: 4, img: "https://placehold.co/128/86efac/000000?text=Aalto" },
    { id: "youhu", name: "Youhu", element: elements.GLACIO, role: roles.SUPPORT, rarity: 4, img: "https://placehold.co/128/bae6fd/000000?text=Youhu" }
];

// --- PRE-DEFINED META TEAMS ---
// These are used for both the "Tier List" tab AND the "Suggestions" logic
export const rankedTeams = [
    // T0 TEAMS
    {
        id: "t_camellya_carry",
        name: "Camellya Hyper",
        tier: "T0",
        type: "P2W",
        members: ["camellya", "sanhua", "shorekeeper"],
        desc: "Sanhua buffs Camellya's Basic Attacks. Shorekeeper ensures 100% Crit Rate uptime.",
        dps_score: 99,
        ease_score: 90
    },
    {
        id: "t_augusta_mono",
        name: "Augusta Thunder",
        tier: "T0",
        type: "P2W",
        members: ["augusta", "yinlin", "iuno"],
        desc: "The ultimate Electro team. Iuno shields while Yinlin provides off-field execution.",
        dps_score: 97,
        ease_score: 95
    },
    {
        id: "t_jinhsi_nuke",
        name: "Jinhsi Nuke",
        tier: "T0",
        type: "P2W",
        members: ["jinhsi", "zhezhi", "verina"],
        desc: "Zhezhi is the perfect stack generator for Jinhsi. Verina allows for fast rotations.",
        dps_score: 96,
        ease_score: 80
    },
    
    // T0.5 TEAMS
    {
        id: "t_xiangli_quick",
        name: "Xiangli Quickswap",
        tier: "T0.5",
        type: "P2W",
        members: ["xiangli_yao", "yinlin", "verina"],
        desc: "High APM team with lots of switching. Incredible single target output.",
        dps_score: 94,
        ease_score: 60
    },
    {
        id: "t_changli_double",
        name: "Changli Dual Fire",
        tier: "T0.5",
        type: "P2W",
        members: ["encore", "changli", "verina"],
        desc: "Changli buffs Fusion DMG and Resonance Liberation, making Encore melt enemies.",
        dps_score: 93,
        ease_score: 70
    },

    // T1 / F2P FRIENDLY
    {
        id: "t_rover_havoc_f2p",
        name: "Dark Rover F2P",
        tier: "T1",
        type: "F2P",
        members: ["rover_havoc", "danjin", "baizhi"],
        desc: "The classic F2P powerhouse. Danjin buffs Havoc massively but consumes HP.",
        dps_score: 88,
        ease_score: 75
    },
    {
        id: "t_jiyan_hyper",
        name: "Jiyan Aero God",
        tier: "T1",
        type: "P2W",
        members: ["jiyan", "mortefi", "verina"],
        desc: "Jiyan needs heavy attack buffs, Mortefi provides exactly that. Simple and strong.",
        dps_score: 89,
        ease_score: 95
    },
    {
        id: "t_calcharo_og",
        name: "Calcharo Classic",
        tier: "T1.5",
        type: "P2W",
        members: ["calcharo", "yinlin", "verina"],
        desc: "Still strong, but harder to play than Xiangli Yao. Timing is crucial.",
        dps_score: 85,
        ease_score: 40
    },
    {
        id: "t_chixia_budget",
        name: "Chixia Machinegun",
        tier: "T2",
        type: "F2P",
        members: ["chixia", "yangyang", "baizhi"],
        desc: "Great for overworld. Yangyang feeds energy to Chixia for constant Ults.",
        dps_score: 75,
        ease_score: 90
    },
     {
        id: "t_lingyang_glacio",
        name: "Lion Dance",
        tier: "T2",
        type: "P2W",
        members: ["lingyang", "sanhua", "verina"],
        desc: "Niche Glacio team. Hard to control but fun for enthusiasts.",
        dps_score: 78,
        ease_score: 50
    }
];