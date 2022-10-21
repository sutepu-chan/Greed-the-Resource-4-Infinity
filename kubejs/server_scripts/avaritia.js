onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        //items
        'endless:diamond_lattice',
        'endless:crystal_matrix_ingot',
        'endless:neutronium_gear',
        'endless:star_fuel',

        //blocks
        'endless:infinity_chest',
        'endless:dense_neutronium_collector',
        'endless:denser_neutronium_collector',
        'endless:densest_neutronium_collector',
    ])
    e.remove({ type: 'endless:extreme_craft' })
    //===== items =====//
    e.custom({
        type: 'extendedcrafting:shapeless_table',
        tier: 4,
        ingredients: [
            { item: "endless:neutronium_pile" },
            { item: "endless:neutronium_nugget" },
            { item: "endless:neutronium_ingot" },
            { item: "endless:neutronium_block" },
            { item: "endless:crystal_matrix_ingot" },
            { item: "endless:crystal_matrix_block" },
            { item: "endless:cosmic_meatballs" },
            { item: "endless:ultimate_stew" },
            { item: "endless:endest_pearl" },
            { item: "endless:record_fragment" },
            { item: "appliedenergistics2:singularity" },
            { item: "aeadditions:item_storage_cell_16384" },
            { item: "aeadditions:fluid_storage_cell_4096" },
            { item: "aeadditions:chemical_storage_cell_4096" },
            { item: "mysticalagradditions:insanium_gemstone_block" },
            { item: "tconstruct:hepatizon_block" },
            { item: "tconstruct:manyullyn_block" },
            { item: "tconstruct:queens_slime_block" },
            { item: "tconstruct:pig_iron_block" },
            { item: "tconstruct:rose_gold_block" },
            { item: "tconstruct:tinkers_bronze_block" },
            { item: "tconstruct:slimesteel_block" },
            { item: "tconstruct:cobalt_block" },
            { item: 'occultism:iesnium_ingot' },
            { item: 'pneumaticcraft:advanced_pcb' },
            { item: 'chemlib:element_xenon' },
            { item: 'chemlib:element_radon' },
            { item: 'chemlib:element_oganesson' },
            { item: 'industrialforegoing:machine_frame_supreme' },
            { item: 'mekanism:ultimate_control_circuit' },
            { item: 'mekanism:pellet_antimatter' },
            { item: 'mekanism:pellet_polonium' },
            { item: 'mekanism:pellet_plutonium' },
            { item: "draconicevolution:draconium_core" },
            { item: "draconicevolution:wyvern_core" },
            { item: "draconicevolution:awakened_core" },
            { item: "draconicevolution:chaotic_core" },
            { item: "ironfurnaces:million_furnace" },
            { item: 'kubejs:eternal_singularity' }
        ],
        result: { item: 'endless:infinity_catalyst' }
    }).id(`kubejs:infinity_catalyst`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'A B A',
            ' CBC ',
            'DBEBD',
            ' CBC ',
            'A B A'
        ],
        key: {
            A: { item: "enderioalloys:item_alloy_ingot_crystalline_alloy" },
            B: { item: "extendedcrafting:crystaltine_ingot" },
            C: { item: "minecraft:diamond_block" },
            D: { item: "allthecompressed:diamond_block_1x" },
            E: { item: "extendedcrafting:crystaltine_block" }
        },
        result: { item: 'endless:diamond_lattice' }
    }).id(`kubejs:endless/diamond_lattice`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            '       ',
            'ABBABBA',
            'ACCACCA',
            'ADDADDA',
            'ACCACCA',
            'ABBABBA',
            '       '
        ],
        key: {
            A: { item: "endless:diamond_lattice" },
            B: { item: "allthecompressed:nether_star_block" },
            C: { item: "extendedcrafting:crystaltine_ingot" },
            D: { item: "allthecompressed:nether_star_block_1x" }
        },
        result: { item: 'endless:crystal_matrix_ingot' }
    }).id(`kubejs:endless/crystal_matrix_ingot`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            '   A   ',
            ' BBCBB ',
            ' BDDDB ',
            'ACDEDCA',
            ' BDDDB ',
            ' BBCBB ',
            '   A   '
        ],
        key: {
            A: { item: "endless:neutronium_block" },
            B: { item: "endless:neutronium_ingot" },
            C: { item: "endless:crystal_matrix_block" },
            D: { item: "endless:crystal_matrix_ingot" },
            E: { item: "draconicevolution:reactor_core" }
        },
        result: { item: 'endless:neutronium_gear' }
    }).id(`kubejs:endless/neutronium_gear`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '   AAA   ',
            ' AABBBAA ',
            ' ACCDCCA ',
            'ABCDEDCBA',
            'ABDEFEDBA',
            'ABCDEDCBA',
            ' ACCDCCA ',
            ' AABBBAA ',
            '   AAA   '
        ],
        key: {
            A: { item: "allthecompressed:end_stone_block_2x" },
            B: { item: "allthecompressed:ender_pearl_block_2x" },
            C: { item: "allthecompressed:enderium_block_2x" },
            D: { item: "endless:neutronium_ingot" },
            E: { item: "draconicevolution:reactor_stabilizer" },
            F: { item: "allthecompressed:nether_star_block_2x" }
        },
        result: { item: 'endless:endest_pearl' }
    }).id(`kubejs:endless/endest_pearl`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 1,
        pattern: [
            ' A ',
            'ABA',
            ' A '
        ],
        key: {
            A: { tag: 'minecraft:music_disc' },
            B: { item: "minecraft:note_block" }
        },
        result: { item: 'endless:record_fragment' }
    }).id(`kubejs:endless/record_fragment`)
    e.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 5000000000,
        powerRate: 5000000000,
        inputCount: 10,
        ingredient: {
            item: 'extendedcrafting:singularity',
            nbt: {
                Id: 'extendedcrafting:coal'
            }
        },
        catalyst: { item: 'endless:infinity_ingot' },
        result: {
            item: 'endless:star_fuel',
            count: 8
        }
    }).id(`kubejs:endless/star_fuel`)
    //===== blocks =====//
    e.custom({
        type: 'draconicevolution:fusion_crafting',
        result: { item: 'endless:neutronium_collector' },
        catalyst: { item: 'draconicevolution:infused_obsidian' },
        total_energy: 56412000,
        tier: 'DRACONIC',
        ingredients: [
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:draconic_energy_core' },
            { item: 'draconicevolution:energy_pylon' },
            { item: 'draconicevolution:energy_pylon' },
            { item: 'draconicevolution:awakened_core' },
            { item: 'draconicevolution:awakened_core' },
        ]
    }).id(`kubejs:fusion_crafting/neutronium_collector`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            '  A  ',
            ' BCB ',
            'ACDCA',
            ' BCB ',
            '  A  '
        ],
        key: {
            A: { item: "endless:infinity_catalyst" },
            B: { item: "endless:crystal_matrix_ingot" },
            C: { item: "endless:neutronium_pile" },
            D: { item: 'draconicevolution:draconium_chest' }
        },
        result: { item: 'endless:infinity_chest' }
    }).id(`kubejs:endless/infinity_chest`)
    let collectors = [
        'endless:neutronium_collector',
        'endless:dense_neutronium_collector',
        'endless:denser_neutronium_collector',
        'endless:densest_neutronium_collector'
    ]
    for (let i = 1; i < collectors.length; i++) {
        e.custom({
            type: 'extendedcrafting:compressor',
            powerCost: 1000000000 * (2 ^ i),
            powerRate: 1000000000 * (2 ^ i),
            inputCount: 18,
            ingredient: { item: collectors[i - 1] },
            catalyst: { item: 'endless:neutronium_gear' },
            result: { item: collectors[i] }
        }).id(`kubejs:${collectors[i].replace(':', '/')}`)
    }
    //===== tools =====//
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAAAAAA ",
            "AAAABAAAA",
            "AA  C  AA",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: 'endless:crystal_matrix_block'
            },
            C: {
                item: 'endless:neutronium_ingot'
            }
        },
        result: { item: 'endless:infinity_pickaxe' }
    }).id(`kubejs:avaritia/pickaxe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " A       ",
            "AAAAA    ",
            "AAAA     ",
            " AB      ",
            "  B      ",
            "  B      ",
            "  B      ",
            "  B      ",
            "  B      "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: 'endless:neutronium_ingot'
            }
        },
        result: {
            item: 'endless:infinity_axe'
        }
    }).id(`kubejs:avaritia/axe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "      AAA",
            "     AAAA",
            "      AAA",
            "     B A ",
            "    B    ",
            "   B     ",
            "  B      ",
            " B       ",
            "B        "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: 'endless:neutronium_ingot'
            }
        },
        result: { item: 'endless:infinity_shovel' }
    }).id(`kubejs:avaritia/shovel`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "       AA",
            "      AAA",
            "     AAA ",
            "    AAA  ",
            " B AAA   ",
            "  BAA    ",
            "  CB     ",
            " C  B    ",
            "D        "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "extendedcrafting:crystaltine_ingot"
            },
            C: {
                item: 'endless:neutronium_ingot'
            },
            D: {
                item: 'endless:infinity_catalyst'
            }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_sword',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:looting\"},{lvl:100,id:\"minecraft:sweeping\"}}"
        }
    }).id(`kubejs:avaritia/sword`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "   AA    ",
            "  A B    ",
            " A  B    ",
            "A   B    ",
            "C   B    ",
            "A   B    ",
            " A  B    ",
            "  A B    ",
            "   AA    "
        ],
        key: {
            A: {
                item: "endless:infinity_ingot"
            },
            B: {
                item: "minecraft:white_wool"
            },
            C: {
                item: 'endless:crystal_matrix_block'
            }
        },
        result: { item: 'endless:infinity_bow' }
    }).id(`kubejs:avaritia/bow`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "  AAAAA  ",
            " ABBBBBA ",
            " A CBC A ",
            " ABBDBBA ",
            " ABBBBBA ",
            " AB B BA ",
            "         ",
            "         ",
            "         "
        ],
        key: {
            A: {
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:infinity_catalyst'
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_helmet",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_helmet'
        }
    }).id(`kubejs:avaritia/helmet`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AA   AA ",
            "AAA   AAA",
            "AAA   AAA",
            " ABBBBBA ",
            " ABBCBBA ",
            " ABBDBBA ",
            " ABBBBBA ",
            " ABBBBBA ",
            "  AAAAA  "
        ],
        key: {
            A: {
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:crystal_matrix_block'
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_bodyarmor",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_chestplate'
        }
    }).id(`kubejs:avaritia/chestplate`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            "AAAAAAAAA",
            "ABBBCBBBA",
            "ABAADAABA",
            "ABA   ABA",
            "AEA   AEA",
            "ABA   ABA",
            "ABA   ABA",
            "ABA   ABA",
            "ABA   ABA"
        ],
        key: {
            A: {
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                item: 'endless:infinity_catalyst'
            },
            D: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_pants",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            },
            E: {
                item: 'endless:crystal_matrix_block'
            }
        },
        result: {
            item: 'endless:infinity_leggings'
        }
    }).id(`kubejs:avaritia/leggings`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            " AAA AAA ",
            " ABA ABA ",
            " ABA ABA ",
            "AABA ABAA",
            "ABBA ABBA",
            "AAAACAAAA",
            "         ",
            "         ",
            "         "
        ],
        key: {
            A: {
                item: 'endless:neutronium_ingot'
            },
            B: {
                item: "endless:infinity_ingot"
            },
            C: {
                type: "forge:nbt",
                item: "mekanism:mekasuit_boots",
                count: 1,
                nbt: "{HideFlags:2,mekData:{EnergyContainers:[{Container:0b,stored:\"16000000\"}]}}"
            }
        },
        result: {
            item: 'endless:infinity_boots'
        }
    }).id(`kubejs:avaritia/boots`)
})