/**
 * Wuthering Waves Team Builder Data - Patch 3.0
 * Includes latest Resonators: Camellya, Shorekeeper, Lynae, Augusta, etc.
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

// Character Database
export const resonators = [
    // --- PATCH 3.0 / 2.X ERA NEW UNITS ---
    {
        id: "camellya",
        name: "Camellya",
        element: elements.HAVOC,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T0", "Hypercarry", "Basic Atk Scaling"],
        synergy_ids: ["sanhua", "shorekeeper", "rover_havoc", "danjin", "verina", "roccia"],
        img: "https://placehold.co/128/3b0764/ffffff?text=Camellya"
    },
    {
        id: "shorekeeper",
        name: "Shorekeeper",
        element: elements.SPECTRO,
        role: roles.SUPPORT,
        rarity: 5,
        tags: ["T0", "Universal Buffer", "Crit Buffer"],
        synergy_ids: ["camellya", "jinhsi", "xiangli_yao", "jiyan", "rover_havoc"],
        img: "https://placehold.co/128/fff7ed/000000?text=Shorekeeper"
    },
    {
        id: "lynae",
        name: "Lynae",
        element: elements.SPECTRO,
        role: roles.SUB_DPS,
        rarity: 5,
        tags: ["T0.5", "Coordinator", "Buffer"],
        synergy_ids: ["augusta", "iuno", "jinhsi", "xiangli_yao"],
        img: "https://placehold.co/128/fff7ed/000000?text=Lynae"
    },
    {
        id: "augusta",
        name: "Augusta",
        element: elements.ELECTRO, // Assumed based on synergy
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T0", "Interruption Res", "Burst"],
        synergy_ids: ["lynae", "iuno", "yinlin", "shorekeeper"],
        img: "https://placehold.co/128/a855f7/ffffff?text=Augusta"
    },
    {
        id: "iuno",
        name: "Iuno",
        element: elements.ELECTRO,
        role: roles.SUPPORT,
        rarity: 5,
        tags: ["T0", "Shielder", "Energy Gen"],
        synergy_ids: ["augusta", "lynae", "xiangli_yao"],
        img: "https://placehold.co/128/a855f7/ffffff?text=Iuno"
    },
    {
        id: "carlotta",
        name: "Carlotta",
        element: elements.GLACIO,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T0", "Single Target", "Skill Dmg"],
        synergy_ids: ["zhezhi", "shorekeeper", "verina", "sanhua"],
        img: "https://placehold.co/128/bae6fd/000000?text=Carlotta"
    },
    {
        id: "zhezhi",
        name: "Zhezhi",
        element: elements.GLACIO,
        role: roles.SUB_DPS,
        rarity: 5,
        tags: ["T0.5", "Off-field DMG", "Skill Boost"],
        synergy_ids: ["carlotta", "jinhsi", "lingyang"],
        img: "https://placehold.co/128/bae6fd/000000?text=Zhezhi"
    },
     {
        id: "xiangli_yao",
        name: "Xiangli Yao",
        element: elements.ELECTRO,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T0.5", "Ult Dmg", "F2P Friendly"],
        synergy_ids: ["yinlin", "shorekeeper", "verina", "jianxin"],
        img: "https://placehold.co/128/a855f7/ffffff?text=Xiangli+Yao"
    },
    
    // --- OG / 1.X ERA UNITS ---
    {
        id: "jinhsi",
        name: "Jinhsi",
        element: elements.SPECTRO,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T0", "Nuke", "Stack Scaling"],
        synergy_ids: ["zhezhi", "yinlin", "taoqi", "verina", "shorekeeper", "yuanwu"],
        img: "https://placehold.co/128/fff7ed/000000?text=Jinhsi"
    },
    {
        id: "jiyan",
        name: "Jiyan",
        element: elements.AERO,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T1", "AoE King", "Heavy Atk"],
        synergy_ids: ["mortefi", "verina", "shorekeeper", "aalto"],
        img: "https://placehold.co/128/86efac/000000?text=Jiyan"
    },
    {
        id: "yinlin",
        name: "Yinlin",
        element: elements.ELECTRO,
        role: roles.SUB_DPS,
        rarity: 5,
        tags: ["T0.5", "AoE", "Electro/Ult Buff"],
        synergy_ids: ["calcharo", "xiangli_yao", "jinhsi", "augusta"],
        img: "https://placehold.co/128/a855f7/ffffff?text=Yinlin"
    },
    {
        id: "verina",
        name: "Verina",
        element: elements.SPECTRO,
        role: roles.SUPPORT,
        rarity: 5,
        tags: ["T0.5", "Healer", "All Dmg Buff"],
        synergy_ids: ["jiyan", "calcharo", "rover_havoc", "camellya"], // Fits all
        img: "https://placehold.co/128/fff7ed/000000?text=Verina"
    },
    {
        id: "rover_havoc",
        name: "Rover (Havoc)",
        element: elements.HAVOC,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["F2P God", "T1", "Burst"],
        synergy_ids: ["danjin", "jianxin", "verina", "shorekeeper", "camellya"],
        img: "https://placehold.co/128/3b0764/ffffff?text=Rover+(H)"
    },
    {
        id: "calcharo",
        name: "Calcharo",
        element: elements.ELECTRO,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T2", "Technical", "Ult Reliance"],
        synergy_ids: ["yinlin", "verina", "jianxin"],
        img: "https://placehold.co/128/a855f7/ffffff?text=Calcharo"
    },
    {
        id: "encore",
        name: "Encore",
        element: elements.FUSION,
        role: roles.MAIN_DPS,
        rarity: 5,
        tags: ["T1", "Ranged/Melee Hybrid"],
        synergy_ids: ["sanhua", "verina", "shorekeeper", "changli"],
        img: "https://placehold.co/128/fca5a5/000000?text=Encore"
    },
    {
        id: "changli",
        name: "Changli",
        element: elements.FUSION,
        role: roles.SUB_DPS, // Hybrid
        rarity: 5,
        tags: ["T0.5", "Fusion Buff", "Quickswap"],
        synergy_ids: ["encore", "chixia", "verina", "shorekeeper"],
        img: "https://placehold.co/128/fca5a5/000000?text=Changli"
    },
    
    // --- 4 STARS / F2P GODS ---
    {
        id: "sanhua",
        name: "Sanhua",
        element: elements.GLACIO,
        role: roles.SUB_DPS,
        rarity: 4,
        tags: ["F2P God", "Basic Atk Buff", "Fast Rot"],
        synergy_ids: ["camellya", "encore", "ka_ka"],
        img: "https://placehold.co/128/bae6fd/000000?text=Sanhua"
    },
    {
        id: "danjin",
        name: "Danjin",
        element: elements.HAVOC,
        role: roles.SUB_DPS,
        rarity: 4,
        tags: ["Havoc Buff", "High Risk"],
        synergy_ids: ["rover_havoc", "camellya", "dreamless"],
        img: "https://placehold.co/128/3b0764/ffffff?text=Danjin"
    },
    {
        id: "mortefi",
        name: "Mortefi",
        element: elements.FUSION,
        role: roles.SUB_DPS,
        rarity: 4,
        tags: ["Heavy Atk Buff", "Off-field"],
        synergy_ids: ["jiyan", "jinhsi"],
        img: "https://placehold.co/128/fca5a5/000000?text=Mortefi"
    },
    {
        id: "baizhi",
        name: "Baizhi",
        element: elements.GLACIO,
        role: roles.SUPPORT,
        rarity: 4,
        tags: ["F2P Healer", "Atk Buff"],
        synergy_ids: ["rover_havoc", "jiyan"], // F2P alternatives
        img: "https://placehold.co/128/bae6fd/000000?text=Baizhi"
    },
    {
        id: "yuanwu",
        name: "Yuanwu",
        element: elements.ELECTRO,
        role: roles.SUB_DPS,
        rarity: 4,
        tags: ["Vibration Break", "Defense"],
        synergy_ids: ["jinhsi"], // Specific niche
        img: "https://placehold.co/128/a855f7/ffffff?text=Yuanwu"
    },
    {
        id: "aalto",
        name: "Aalto",
        element: elements.AERO,
        role: roles.SUB_DPS,
        rarity: 4,
        tags: ["Aero Buff", "Gate"],
        synergy_ids: ["jiyan", "rover_aero"],
        img: "https://placehold.co/128/86efac/000000?text=Aalto"
    },
    {
        id: "jianxin",
        name: "Jianxin",
        element: elements.AERO,
        role: roles.SUPPORT,
        rarity: 5,
        tags: ["Shield", "Ult Buff", "Grouping"],
        synergy_ids: ["calcharo", "rover_havoc"],
        img: "https://placehold.co/128/86efac/000000?text=Jianxin"
    }
];

// Pre-calculated Meta Teams for Rankings Tab
export const rankedTeams = [
    {
        id: "t_camellya_hyper",
        tier: "T0",
        name: "Camellya Hypercarry",
        dps_score: 98,
        ease_score: 90,
        type: "P2W",
        members: ["camellya", "sanhua", "shorekeeper"],
        desc: "The absolute meta for Patch 3.0. Sanhua buffs Camellya's massive Basic Attack scaling, while Shorekeeper provides Crit & DMG buffs."
    },
    {
        id: "t_augusta_system",
        tier: "T0",
        name: "Augusta System",
        dps_score: 96,
        ease_score: 95,
        type: "P2W",
        members: ["augusta", "lynae", "iuno"],
        desc: "Unstoppable Electro team. Iuno provides immunity to interruption, allowing Augusta to go full rotation without dodging."
    },
    {
        id: "t_jinhsi_nuke",
        tier: "T0.5",
        name: "Jinhsi Coordinator",
        dps_score: 94,
        ease_score: 80,
        type: "P2W",
        members: ["jinhsi", "zhezhi", "verina"],
        desc: "Jinhsi remains a powerhouse. Zhezhi builds stacks faster than any other sub-DPS."
    },
    {
        id: "t_carlotta_glacio",
        tier: "T0.5",
        name: "Carlotta Glacio",
        dps_score: 92,
        ease_score: 85,
        type: "P2W",
        members: ["carlotta", "zhezhi", "shorekeeper"],
        desc: "Highest Single-Target burst stability in the game. Perfect for hologram bosses."
    },
    {
        id: "t_f2p_havoc",
        tier: "T1 (F2P God)",
        name: "Havoc Rover F2P",
        dps_score: 85,
        ease_score: 75,
        type: "F2P",
        members: ["rover_havoc", "danjin", "baizhi"],
        desc: "Extremely high damage ceiling for a free team. Danjin buffs Rover's Havoc DMG massively, though it is risky without a strong shielder."
    },
    {
        id: "t_jiyan_aero",
        tier: "T1",
        name: "Jiyan Aero Carry",
        dps_score: 88,
        ease_score: 95,
        type: "P2W",
        members: ["jiyan", "mortefi", "verina"],
        desc: "The classic king of AoE. Simple rotation, massive screen-clearing numbers. Mortefi is essential here at high cons."
    },
    {
        id: "t_xiangli_electro",
        tier: "T0.5",
        name: "Xiangli Yao Quickswap",
        dps_score: 93,
        ease_score: 60,
        type: "P2W",
        members: ["xiangli_yao", "yinlin", "shorekeeper"],
        desc: "High skill ceiling team utilizing animation cancels and Yinlin's off-field electro damage."
    }
];