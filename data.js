/**
 * Wuthering Waves Team Builder Data - Patch 3.0 Complete
 * Source Reference: ArabWuWa / Prydwen / CN Wiki
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
    // --- 3.0 NEW UNITS ---
    { id: "camellya", name: "Camellya", element: elements.HAVOC, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/3b0764/ffffff?text=Camellya" },
    { id: "shorekeeper", name: "Shorekeeper", element: elements.SPECTRO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Shorekeeper" },
    { id: "lynae", name: "Lynae", element: elements.SPECTRO, role: roles.SUB_DPS, rarity: 5, img: "https://placehold.co/128/fff7ed/000000?text=Lynae" },
    { id: "augusta", name: "Augusta", element: elements.ELECTRO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Augusta" },
    { id: "iuno", name: "Iuno", element: elements.ELECTRO, role: roles.SUPPORT, rarity: 5, img: "https://placehold.co/128/a855f7/ffffff?text=Iuno" },
    { id: "carlotta", name: "Carlotta", element: elements.GLACIO, role: roles.MAIN_DPS, rarity: 5, img: "https://placehold.co/128/bae6fd/000000?text=Carlotta" },
    
    // --- 5 STARS ---
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

// --- MASSIVE TEAM LIST (ArabWuWa Inspired) ---
export const rankedTeams = [
    // --- T0 / METAS (3.0 & High End 2.x) ---
    {
        id: "t_camellya_hyper",
        name: "Camellya Hypercarry",
        tier: "T0",
        type: "P2W",
        members: ["camellya", "sanhua", "shorekeeper"],
        desc: "Sanhua buffs Basic Atk (Camellya's main source). Shorekeeper provides immense Crit buffs.",
        stats: { dps: 52400, total_dmg: 1257600, rot_time: 24 }
    },
    {
        id: "t_jinhsi_zhezhi",
        name: "Jinhsi Premium",
        tier: "T0",
        type: "P2W",
        members: ["jinhsi", "zhezhi", "verina"],
        desc: "Zhezhi builds Jinhsi's stacks faster than anyone else. The highest burst damage team.",
        stats: { dps: 49800, total_dmg: 1145400, rot_time: 23 }
    },
    {
        id: "t_jinhsi_yuanwu",
        name: "Jinhsi Coordinator (Budget)",
        tier: "T0.5",
        type: "F2P Friendly",
        members: ["jinhsi", "yuanwu", "verina"],
        desc: "Yuanwu provides easy stack generation with minimal field time. Very efficient.",
        stats: { dps: 41200, total_dmg: 906400, rot_time: 22 }
    },
    {
        id: "t_augusta_mono",
        name: "Augusta Thunder System",
        tier: "T0",
        type: "P2W",
        members: ["augusta", "yinlin", "iuno"],
        desc: "Mono-Electro. Yinlin executes low HP enemies, Augusta brings sustained DPS.",
        stats: { dps: 51000, total_dmg: 1275000, rot_time: 25 }
    },
    {
        id: "t_changli_encore",
        name: "Changli Dual Fire",
        tier: "T0.5",
        type: "P2W",
        members: ["encore", "changli", "verina"],
        desc: "Quickswap Heavy. Changli buffs Fusion for Encore. High skill ceiling.",
        stats: { dps: 44500, total_dmg: 1068000, rot_time: 24 }
    },
    {
        id: "t_xiangli_yinlin",
        name: "Xiangli Yao Calculations",
        tier: "T0.5",
        type: "P2W",
        members: ["xiangli_yao", "yinlin", "verina"],
        desc: "Perfect synchronization between Xiangli's Ult and Yinlin's off-field punishment.",
        stats: { dps: 46200, total_dmg: 1016400, rot_time: 22 }
    },

    // --- T1 / STRONG META ---
    {
        id: "t_jiyan_mortefi",
        name: "Jiyan Aero God",
        tier: "T1",
        type: "P2W",
        members: ["jiyan", "mortefi", "verina"],
        desc: "The classic AoE King. Mortefi at S6 is a monster here.",
        stats: { dps: 39500, total_dmg: 829500, rot_time: 21 }
    },
    {
        id: "t_jiyan_aalto",
        name: "Jiyan Aero (Alternative)",
        tier: "T1.5",
        type: "F2P Friendly",
        members: ["jiyan", "aalto", "verina"],
        desc: "Aalto buffs Aero DMG via his gate. Good if Mortefi is busy.",
        stats: { dps: 34200, total_dmg: 752400, rot_time: 22 }
    },
    {
        id: "t_rover_havoc_danjin",
        name: "Dark Rover Nuke",
        tier: "T1",
        type: "F2P God",
        members: ["rover_havoc", "danjin", "verina"],
        desc: "Danjin buffs Havoc DMG by 23%. Extremely high damage for a free team.",
        stats: { dps: 38800, total_dmg: 814800, rot_time: 21 }
    },
    {
        id: "t_rover_havoc_dreamless",
        name: "Dreamless Quickswap",
        tier: "T1",
        type: "F2P Friendly",
        members: ["rover_havoc", "danjin", "jianxin"],
        desc: "Double Dreamless echo usage. Jianxin provides shields for Danjin's HP drain.",
        stats: { dps: 35600, total_dmg: 890000, rot_time: 25 }
    },
    {
        id: "t_calcharo_yinlin",
        name: "Calcharo Execute",
        tier: "T1.5",
        type: "P2W",
        members: ["calcharo", "yinlin", "verina"],
        desc: "High damage potential but requires perfect dodge counters and ping.",
        stats: { dps: 37500, total_dmg: 937500, rot_time: 25 }
    },
    {
        id: "t_carlotta_skill",
        name: "Carlotta Skill Spam",
        tier: "T0.5",
        type: "P2W",
        members: ["carlotta", "zhezhi", "shorekeeper"],
        desc: "Glacio dominance. Carlotta resets CDs, Zhezhi fills the gaps.",
        stats: { dps: 43100, total_dmg: 948200, rot_time: 22 }
    },

    // --- T2 / BUDGET / NICHE ---
    {
        id: "t_encore_sanhua",
        name: "Encore Budget",
        tier: "T2",
        type: "F2P Friendly",
        members: ["encore", "sanhua", "verina"],
        desc: "Sanhua buffs normal attacks which Encore uses in her Ult form.",
        stats: { dps: 32400, total_dmg: 680400, rot_time: 21 }
    },
    {
        id: "t_lingyang_mono",
        name: "Lingyang Glacio",
        tier: "T2",
        type: "Niche",
        members: ["lingyang", "sanhua", "baizhi"],
        desc: "A solid team for Lingyang mains, though difficult to pilot.",
        stats: { dps: 29500, total_dmg: 649000, rot_time: 22 }
    },
    {
        id: "t_chixia_quick",
        name: "Chixia Revolver",
        tier: "T2",
        type: "F2P",
        members: ["chixia", "yangyang", "baizhi"],
        desc: "Yangyang gives Energy to Chixia for constant boom-boom.",
        stats: { dps: 26800, total_dmg: 536000, rot_time: 20 }
    },
    {
        id: "t_yuanwu_carry",
        name: "Yuanwu DEF Carry",
        tier: "T3",
        type: "F2P/Meme",
        members: ["yuanwu", "yinlin", "baizhi"],
        desc: "Yuanwu as main on-fielder. Surprisingly durable.",
        stats: { dps: 22100, total_dmg: 486200, rot_time: 22 }
    },
    {
        id: "t_rover_spec_basic",
        name: "Spectro Rover Starter",
        tier: "T3",
        type: "Starter",
        members: ["rover_spectro", "yangyang", "baizhi"],
        desc: "The team you start with. Reliable but low ceiling.",
        stats: { dps: 18500, total_dmg: 370000, rot_time: 20 }
    },
    {
        id: "t_taoqi_havoc",
        name: "Taoqi Sustain",
        tier: "T3",
        type: "Defensive",
        members: ["rover_havoc", "taoqi", "baizhi"],
        desc: "Taoqi boosts Skill DMG. Very tanky team for beginners.",
        stats: { dps: 24000, total_dmg: 528000, rot_time: 22 }
    }
];