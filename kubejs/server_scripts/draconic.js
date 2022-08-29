onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'draconicevolution:wyvern_core',
        'draconicevolution:awakened_core',
        'draconicevolution:chaotic_core',
        'draconicevolution:basic_relay_crystal',
        'draconicevolution:wyvern_relay_crystal',
        'draconicevolution:draconic_relay_crystal',
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:chaotic_energy_core',
        'draconicevolution:basic_crafting_injector',
        'draconicevolution:wyvern_crafting_injector',
        'draconicevolution:awakened_crafting_injector',
        'draconicevolution:chaotic_crafting_injector',
        'draconicevolution:draconic_staff',
        'draconicevolution:chaotic_staff',
        'draconicevolution:draconium_chest',
    ])

    //===== crafting injector =====//
    e.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "AAAAA",
            "ABBBA",
            "CDEDC",
            "DEEED",
            "DEEED"
        ],
        "key": {
            "A": {
                "item": "draconicevolution:draconium_core"
            },
            "B": {
                "item": "boss_tools:silicon_ingot"
            },
            "C": {
                "item": "boss_tools:desh_ingot"
            },
            "D": {
                "item": "boss_tools:infernal_spire_block"
            },
            "E": {
                "item": "minecraft:iron_block"
            }
        },
        "result": {
            "item": "draconicevolution:basic_crafting_injector"
        }
    })
    draconicFusion(e, 'draconicevolution:wyvern_crafting_injector', 1, 1000000, 'draconicevolution:wyvern_core', [
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core',
        'draconicevolution:draconium_core',
        'draconicevolution:draconium_core',
        'boss_tools:chesse',
        '#forge:storage_blocks/desh',
        '#forge:storage_blocks/desh',
        '#forge:storage_blocks/desh',
        '#forge:storage_blocks/desh',
        '#forge:storage_blocks/desh'
    ])
    draconicFusion(e, 'draconicevolution:awakened_crafting_injector', 2, 10000000, 'draconicevolution:wyvern_crafting_injector', [
        'mysticalagradditions:nitro_crystal_crux',
        'mysticalagradditions:nitro_crystal_crux',
        '#forge:storage_blocks/draconium_awakened',
        '#forge:storage_blocks/draconium_awakened',
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core',
        'draconicevolution:wyvern_relay_crystal',
        'draconicevolution:wyvern_relay_crystal',
        '#forge:storage_blocks/ludicrite',
        '#forge:storage_blocks/ludicrite'
    ])
    draconicFusion(e, 'draconicevolution:chaotic_crafting_injector', 3, 100000000, 'draconicevolution:awakened_crafting_injector', [
        'draconicevolution:medium_chaos_frag',
        'minecraft:dragon_egg',
        'draconicevolution:medium_chaos_frag',
        'kubejs:endest_pearl',
        'kubejs:neutronium_ingot',
        'kubejs:neutronium_ingot',
        'draconicevolution:draconic_relay_crystal',
        'draconicevolution:draconic_relay_crystal',
        'draconicevolution:chaotic_core',
        'draconicevolution:chaotic_core'
    ])
    //===== core =====//
    draconicFusion(e, 'draconicevolution:wyvern_core', 1, 600000, 'minecraft:nether_star', [
        'draconicevolution:draconium_core',
        'draconicevolution:draconium_core',
        'draconicevolution:draconium_core',
        'draconicevolution:draconium_core',
        'draconicevolution:draconium_ingot',
        'draconicevolution:draconium_ingot',
        'draconicevolution:draconium_ingot',
        'draconicevolution:draconium_ingot'
    ])
    draconicFusion(e, 'draconicevolution:awakened_core', 2, 5600000, 'draconicevolution:dragon_heart', [
        'draconicevolution:awakened_draconium_block',
        'draconicevolution:awakened_draconium_block',
        '#forge:storage_blocks/nether_star',
        '#forge:storage_blocks/nether_star',
        'mekanism:dust_lithium',
        'mekanism:dust_lithium',
        'mekanism:ultimate_control_circuit',
        'mekanism:ultimate_control_circuit',
        '#forge:storage_blocks/signalum',
        '#forge:storage_blocks/signalum'
    ])
    draconicFusion(e, 'draconicevolution:chaotic_core', 3, 98000000, 'draconicevolution:chaos_shard', [
        'allthecompressed:va_alloy_block_2x',
        'allthecompressed:unobtainium_block_2x',
        'allthecompressed:ua_alloy_block_2x',
        'allthecompressed:vibranium_block_2x',
        'allthecompressed:uv_alloy_block_2x',
        'allthecompressed:allthemodium_block_2x',
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core',
        '#forge:nuggets/neutronium',
        '#forge:nuggets/neutronium'
    ])
    //===== relay crystal =====//
    draconicFusion(e, 'draconicevolution:basic_relay_crystal', 1, 200000, 'draconicevolution:draconium_core', [
        '#forge:ingots/draconium',
        '#forge:ingots/draconium',
        '#forge:ingots/draconium',
        '#forge:ingots/draconium',
        '#forge:gems/diamond',
        '#forge:gems/diamond',
        '#forge:gems/diamond',
        '#forge:gems/diamond'
    ])
    draconicFusion(e, 'draconicevolution:wyvern_relay_crystal', 2, 800000, 'draconicevolution:basic_relay_crystal', [
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core',
        'draconicevolution:wyvern_core'
    ])
    draconicFusion(e, 'draconicevolution:draconic_relay_crystal', 3, 2560000, 'draconicevolution:wyvern_relay_crystal', [
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:draconic_energy_core'
    ])
    //===== energy core =====//
    draconicFusion(e, 'draconicevolution:wyvern_energy_core', 2, 800000, 'draconicevolution:draconium_core', [
        'powah:capacitor_niotic',
        'powah:capacitor_niotic',
        'draconicevolution:draconium_ingot',
        'draconicevolution:draconium_ingot'
    ])
    draconicFusion(e, 'draconicevolution:draconic_energy_core', 3, 2400000, 'draconicevolution:wyvern_core', [
        'powah:capacitor_spirited',
        'powah:capacitor_spirited',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:wyvern_energy_core',
        'draconicevolution:awakened_draconium_ingot',
        'draconicevolution:wyvern_energy_core'
    ])
    draconicFusion(e, 'draconicevolution:chaotic_energy_core', 4, 7200000, 'draconicevolution:awakened_core', [
        'powah:capacitor_nitro',
        'powah:capacitor_nitro',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:medium_chaos_frag',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:medium_chaos_frag'
    ])
    //===== tools =====//
    draconicFusion(e, 'draconicevolution:draconic_staff', 3, 1280000000, 'draconicevolution:dragon_heart', [
        'draconicevolution:draconic_shovel',
        'draconicevolution:draconic_hoe',
        'draconicevolution:draconic_pickaxe',
        'draconicevolution:draconic_axe',
        'draconicevolution:draconic_sword',
        'draconicevolution:draconic_energy_core',
        'draconicevolution:awakened_core',
        'draconicevolution:awakened_core'
    ])
    draconicFusion(e, 'draconicevolution:chaotic_staff', 4, 8400000000, 'draconicevolution:draconic_staff', [
        'draconicevolution:chaotic_shovel',
        'draconicevolution:chaotic_hoe',
        'draconicevolution:chaotic_pickaxe',
        'draconicevolution:chaotic_axe',
        'draconicevolution:chaotic_sword',
        'draconicevolution:chaotic_energy_core',
        'draconicevolution:chaotic_core',
        'draconicevolution:chaotic_core'
    ])
    //===== chest =====//

    e.shaped('draconicevolution:draconium_chest', ['DDD', 'CNO', 'DDD'], {
        D: '#forge:ingots/draconium',
        C: 'ironchest:crystal_chest',
        N: 'minecraft:nether_star',
        O: 'ironchest:obsidian_chest'
    })
})