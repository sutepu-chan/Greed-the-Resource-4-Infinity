onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        //items
        'endless:diamond_lattice',
        'endless:crystal_matrix_ingot',
        'endless:neutronium_gear',
        'endless:star_fuel',
        'endless:record_fragment',
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
            { item: 'eternal_singularity:eternal_singularity' }
        ],
        result: { item: 'endless:infinity_catalyst' }
    }).id(`kubejs:endless/infinity_catalyst`)
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
            A: { tag: 'minecraft:music_discs' },
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
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "AAAAAAAAA",
            "ABCDEFGHA",
            "AIJKLMNOA",
            "APQQPQQPA",
            "AQPPQPPQA",
            "APQQPQQPA",
            "ARSTUVWXA",
            "AYZ12345A",
            "AAAAAAAAA"
        ],
        key: {
            A: { item: "endless:neutronium_ingot" },
            B: { item: "materialis:fairy_ingot" },
            C: { item: "allthemodium:unobtainium_allthemodium_alloy_ingot" },
            D: { item: "allthemodium:unobtainium_vibranium_alloy_ingot" },
            E: { item: "allthemodium:vibranium_allthemodium_alloy_ingot" },
            F: { item: "biggerreactors:ludicrite_ingot" },
            G: { item: "biggerreactors:cyanite_ingot" },
            H: { item: "enderioalloys:item_alloy_ingot_conductive_iron" },
            I: { item: "enderioalloys:item_alloy_ingot_crude_steel" },
            J: { item: "enderioalloys:item_alloy_ingot_crystalline_alloy" },
            K: { item: "enderioalloys:item_alloy_ingot_crystalline_pink_slime" },
            L: { item: "enderioalloys:item_alloy_ingot_dark_steel" },
            M: { item: "enderioalloys:item_alloy_ingot_electrical_steel" },
            N: { item: "enderioalloys:item_alloy_ingot_end_steel" },
            O: { item: "enderioalloys:item_alloy_ingot_energetic_alloy" },
            P: { item: "endless:crystal_matrix_ingot" },
            Q: { item: "endless:infinity_catalyst" },
            R: { item: "enderioalloys:item_alloy_ingot_energetic_silver" },
            S: { item: "enderioalloys:item_alloy_ingot_melodic_alloy" },
            T: { item: "enderioalloys:item_alloy_ingot_pulsating_iron" },
            U: { item: "enderioalloys:item_alloy_ingot_redstone_alloy" },
            V: { item: "enderioalloys:item_alloy_ingot_soularium" },
            W: { item: "enderioalloys:item_alloy_ingot_stellar_alloy" },
            X: { item: "enderioalloys:item_alloy_ingot_vibrant_alloy" },
            Y: { item: "enderioalloys:item_alloy_ingot_vivid_alloy" },
            Z: { item: "lazierae2:fluix_steel_ingot" },
            1: { item: "industrialforegoing:pink_slime_ingot" },
            2: { item: "mysticalagradditions:insanium_ingot" },
            3: { item: "tdelight:rosenquartz_ingot" },
            4: { item: "tdelight:gildedfern_ingot" },
            5: { item: "tdelight:hamletite_ingot" }
        },
        result: { item: 'endless:infinity_ingot' }
    }).id(`kubejs:endless/infinity_ingot`)
    e.custom({
        type: "extendedcrafting:shapeless_table",
        tier: 4,
        ingredients: [
            { item: "minecraft:porkchop" },
            { item: "minecraft:cooked_porkchop" },
            { item: "minecraft:cod" },
            { item: "minecraft:salmon" },
            { item: "minecraft:cooked_cod" },
            { item: "minecraft:cooked_salmon" },
            { item: "minecraft:pufferfish" },
            { item: "minecraft:beef" },
            { item: "minecraft:cooked_beef" },
            { item: "minecraft:chicken" },
            { item: "minecraft:cooked_chicken" },
            { item: "minecraft:rotten_flesh" },
            { item: "minecraft:rabbit" },
            { item: "minecraft:cooked_rabbit" },
            { item: "minecraft:rabbit_stew" },
            { item: "autumnity:turkey" },
            { item: "autumnity:cooked_turkey" },
            { item: "betterlands:bighorn_meat" },
            { item: "betterlands:cooked_bighorn_meat" },
            { item: "environmental:duck" },
            { item: "environmental:cooked_duck" },
            { item: "farmersdelight:beef_stew" },
            { item: "farmersdelight:chicken_soup" },
            { item: "farmersdelight:fish_stew" },
            { item: "farmersdelight:baked_cod_stew" },
            { item: "farmersdelight:roasted_mutton_chops" },
            { item: "farmersdelight:steak_and_potatoes" },
            { item: "farmersdelight:grilled_salmon" },
            { item: "farmersdelight:roast_chicken_block" },
            { item: "farmersdelight:honey_glazed_ham_block" },
            { item: "farmersdelight:shepherds_pie_block" }
        ],
        result: { item: 'endless:cosmic_meatballs' }
    }).id(`kubejs:endless/cosmic_meatballs`)
    e.custom({
        type: "extendedcrafting:shapeless_table",
        tier: 4,
        ingredients: [
            { item: "minecraft:wheat" },
            { item: "minecraft:bread" },
            { item: "minecraft:apple" },
            { item: "minecraft:golden_apple" },
            { item: "minecraft:enchanted_golden_apple" },
            { item: "minecraft:cookie" },
            { item: "minecraft:dried_kelp" },
            { item: "minecraft:carrot" },
            { item: "minecraft:potato" },
            { item: "minecraft:baked_potato" },
            { item: "minecraft:golden_carrot" },
            { item: "minecraft:pumpkin_pie" },
            { item: "minecraft:chorus_fruit" },
            { item: "minecraft:popped_chorus_fruit" },
            { item: "minecraft:beetroot" },
            { item: "minecraft:beetroot_soup" },
            { item: "farmersdelight:cabbage" },
            { item: "farmersdelight:tomato" },
            { item: "farmersdelight:onion" },
            { item: "farmersdelight:rice_panicle" },
            { item: "farmersdelight:wheat_dough" },
            { item: "farmersdelight:mixed_salad" },
            { item: "farmersdelight:hamburger" },
            { item: "farmersdelight:vegetable_noodles" },
            { item: "farmersdelight:ratatouille" },
            { item: "farmersdelight:stuffed_pumpkin_block" },
            { item: "simplefarming:broccoli" },
            { item: "simplefarming:cassava" },
            { item: "simplefarming:corn" },
            { item: "simplefarming:cucumber" },
            { item: "simplefarming:eggplant" },
            { item: "simplefarming:habanero" },
            { item: "simplefarming:ginger" },
            { item: "simplefarming:lettuce" },
            { item: "simplefarming:onion" },
            { item: "simplefarming:pea_pod" },
            { item: "simplefarming:peanut" },
            { item: "simplefarming:pepper" },
            { item: "simplefarming:radish" },
            { item: "simplefarming:sorghum" },
            { item: "simplefarming:soybean" },
            { item: "simplefarming:spinach" },
            { item: "simplefarming:sweet_potato" },
            { item: "simplefarming:tomato" },
            { item: "simplefarming:turnip" },
            { item: "simplefarming:yam" },
            { item: "simplefarming:zucchini" },
            { item: "simplefarming:cotton" },
            { item: "simplefarming:barley" },
            { item: "simplefarming:oat" },
            { item: "simplefarming:rye" },
            { item: "simplefarming:sushi" },
            { item: "simplefarming:vegetable_curry" },
            { item: "simplefarming:veggie_burger" },
            { item: "simplefarming:tofu_scramble" },
            { item: "sushigocrafting:cucumber" },
            { item: "sushigocrafting:soy_bean" },
            { item: "sushigocrafting:wasabi_root" },
            { item: "sushigocrafting:seaweed" },
            { item: "sushigocrafting:rice" },
            { item: "sushigocrafting:avocado" }
        ],
        result: { item: 'endless:ultimate_stew' }
    }).id(`kubejs:endless/ultimate_stew`)
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
    }).id(`kubejs:endless/neutronium_collector`)
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
    e.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 100000000,
        powerRate: 100000000,
        inputCount: 18,
        ingredient: { item: 'endless:neutronium_collector' },
        catalyst: { item: 'endless:neutronium_gear' },
        result: { item: 'endless:dense_neutronium_collector' }
    }).id(`kubejs:endless/dense_neutronium_collector`)
    e.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 200000000,
        powerRate: 200000000,
        inputCount: 18,
        ingredient: { item: 'endless:dense_neutronium_collector' },
        catalyst: { item: 'endless:neutronium_gear' },
        result: { item: 'endless:denser_neutronium_collector' }
    }).id(`kubejs:endless/denser_neutronium_collector`)
    e.custom({
        type: 'extendedcrafting:compressor',
        powerCost: 400000000,
        powerRate: 400000000,
        inputCount: 18,
        ingredient: { item: 'endless:denser_neutronium_collector' },
        catalyst: { item: 'endless:neutronium_gear' },
        result: { item: 'endless:densest_neutronium_collector' }
    }).id(`kubejs:endless/densest_neutronium_collector`)
    //===== tools =====//
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            " AAAAAAA ",
            "AAAABAAAA",
            "AA CDCAAA",
            "A  CEC  A",
            "   CFC   ",
            "    C    ",
            "    C    ",
            "    C    ",
            "    C    "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_block" },
            C: { item: "endless:neutronium_ingot" },
            D: { item: "allthemodium:alloy_pick" },
            E: { item: "draconicevolution:chaotic_pickaxe" },
            F: { item: "mekanism:meka_tool" }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_pickaxe",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/pickaxe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "  A      ",
            " AAAA    ",
            "AAAABAAAA",
            " AACDC   ",
            "  ACEC   ",
            "   CFC   ",
            "    C    ",
            "    C    ",
            "    C    "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_block" },
            C: { item: "endless:neutronium_ingot" },
            D: { item: "draconicevolution:chaotic_axe" },
            E: { item: "allthemodium:alloy_axe", },
            F: { item: "mysticaladaptations:insanium_axe" }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_axe",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/axe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "     AAAA",
            "    AAAAA",
            "     ABAA",
            "    CDAAA",
            "   CEC A ",
            "  CFC    ",
            "  CC     ",
            " C       ",
            "C        "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_block" },
            C: { item: "endless:neutronium_ingot" },
            D: { item: "allthemodium:alloy_shovel", },
            E: { item: "draconicevolution:chaotic_shovel" },
            F: { item: "mysticaladaptations:insanium_shovel" }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_shovel",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/shovel`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            " AAAAAAA ",
            "AAAAAABAA",
            " AA  CDC ",
            " A   CEC ",
            "     CCC ",
            "      C  ",
            "      C  ",
            "      C  ",
            "      C  "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_block" },
            C: { item: "endless:neutronium_ingot" },
            D: { item: "draconicevolution:chaotic_hoe" },
            E: { item: "mysticaladaptations:insanium_hoe" }
        },
        "result": {
            type: 'forge:nbt',
            item: "endless:infinity_hoe",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/hoe`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "      AAA",
            "     AAAA",
            "    AABAA",
            "   AACAA ",
            "DDAAEAA  ",
            " FDGAA   ",
            " FFDA    ",
            " FFFD    ",
            "F   D    "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "mysticaladaptations:insanium_paxel" },
            C: { item: "draconicevolution:chaotic_staff" },
            D: { item: "endless:crystal_matrix_ingot" },
            E: { item: "allthemodium:alloy_paxel", },
            F: { item: "endless:neutronium_ingot" },
            G: { item: "endless:crystal_matrix_block" }
        },
        result: {
            type: "forge:nbt",
            item: 'endless:infinity_sword',
            count: 1,
            nbt: "{Enchantments:[{lvl:100,id:\"minecraft:looting\"},{lvl:100,id:\"minecraft:sweeping\"}}"
        }
    }).id(`kubejs:endless/sword`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "    AAAB ",
            "   AAA B ",
            "  AA   B ",
            " AA    B ",
            "CD     B ",
            " AA    B ",
            "  AA   B ",
            "   AAA B ",
            "    AAAB "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_ingot" },
            C: { item: "endless:crystal_matrix_block" },
            D: { item: "draconicevolution:chaotic_bow" }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_bow",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/bow`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "AAAAAAAA ",
            "AAA   B  ",
            "AAA  B   ",
            "A  CB    ",
            "A  BC    ",
            "A B  C   ",
            "AB    CC ",
            "A     CCC",
            "       CC"
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:crystal_matrix_ingot" },
            C: { item: "endless:neutronium_ingot" }
        },
        "result": {
            type: 'forge:nbt',
            item: "endless:infinity_crossbow",
            count: 1,
            nbt: "{ChargedProjectiles:[],Unbreakable:1b,Damage:0,Charged:0b}"
        }
    }).id(`kubejs:endless/crossbow`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            "     AAAA",
            "    AAAAA",
            "      BAA",
            "     B AA",
            "    B  A ",
            "   B     ",
            "CBB      ",
            "CCB      ",
            "CCC      "
        ],
        key: {
            A: { item: "endless:infinity_ingot" },
            B: { item: "endless:neutronium_ingot" },
            C: { item: "endless:crystal_matrix_ingot" }
        },
        "result": {
            type: 'forge:nbt',
            item: "endless:infinity_arrow",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/arrow`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            '  AAAAA  ',
            ' ABBBBBA ',
            ' A CBC A ',
            ' ABBDBBA ',
            ' ABBBBBA ',
            ' AB B BA ',
            '         ',
            '         ',
            '         '
        ],
        key: {
            A: { item: 'endless:neutronium_ingot' },
            B: { item: "endless:infinity_ingot" },
            C: { item: 'endless:infinity_catalyst' },
            D: { item: "mekanism:mekasuit_helmet", }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_helmet",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/helmet`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AA   AA ',
            'AAA   AAA',
            'AAA   AAA',
            ' ABBBBBA ',
            ' ABBCBBA ',
            ' ABBDBBA ',
            ' ABBBBBA ',
            ' ABBBBBA ',
            '  AAAAA  '
        ],
        key: {
            A: { item: 'endless:neutronium_ingot' },
            B: { item: "endless:infinity_ingot" },
            C: { item: 'draconicevolution:chaotic_chestpiece' },
            D: { item: "mekanism:mekasuit_bodyarmor", }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_chestplate",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/chestplate`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            'AAAAAAAAA',
            'ABBBCBBBA',
            'ABAADAABA',
            'ABA   ABA',
            'AEA   AEA',
            'ABA   ABA',
            'ABA   ABA',
            'ABA   ABA',
            'ABA   ABA'
        ],
        key: {
            A: { item: 'endless:neutronium_ingot' },
            B: { item: "endless:infinity_ingot" },
            C: { item: 'endless:infinity_catalyst' },
            D: { item: "mekanism:mekasuit_pants", },
            E: { item: 'endless:crystal_matrix_block' }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_leggings",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/leggings`)
    e.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 4,
        pattern: [
            ' AAA AAA ',
            ' ABA ABA ',
            ' ABA ABA ',
            'AABA ABAA',
            'ABBA ABBA',
            'AAAACAAAA',
            '         ',
            '         ',
            '         '
        ],
        key: {
            A: { item: 'endless:neutronium_ingot' },
            B: { item: "endless:infinity_ingot" },
            C: { item: "mekanism:mekasuit_boots", }
        },
        result: {
            type: 'forge:nbt',
            item: "endless:infinity_boots",
            count: 1,
            nbt: "{Damage:0,Unbreakable:1b}"
        }
    }).id(`kubejs:endless/boots`)
})