onEvent('recipes', e => {
    removeRecipeByOutput(e, [
        'balancedflight:ascended_flight_ring',
    ])
    //angel ring
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'AA   AA',
            'AABCDAA',
            'EFGHGFE',
            'EFIJKFE',
            'EFGLGFE',
            ' EFFFE ',
            '  EEE  '
        ],
        key: {
            A: {
                item: 'minecraft:feather'
            },
            B: {
                item: 'balancedflight:basic_flight_anchor'
            },
            C: {
                item: 'balancedflight:gilded_flight_anchor'
            },
            D: {
                item: 'balancedflight:ascended_flight_anchor'
            },
            E: {
                item: 'extendedcrafting:ultimate_singularity'
            },
            F: {
                item: 'draconicevolution:draconic_flight_module'
            },
            G: {
                item: 'mekanism:module_gravitational_modulating_unit'
            },
            H: {
                item: 'balancedflight:flight_core'
            },
            I: {
                item: 'mekanism:hdpe_elytra'
            },
            J: {
                item: 'balancedflight:basic_flight_ring'
            },
            K: {
                item: 'minecraft:elytra'
            },
            L: {
                item: 'ironjetpacks:emerald_jetpack'
            }
        },
        result: {
            item: 'balancedflight:ascended_flight_ring'
        }
    }).id(`kubejs:basic_flight_ring/ascended_flight_ring`)
    //balanced ring
    modifyShaped(e, 'balancedflight:basic_flight_ring', 1, ['FIF', 'PUP', ' P '], {
        P: '#forge:plates/iron',
        U: 'eidolon:unholy_symbol',
        F: 'minecraft:feather',
        I: 'minecraft:iron_block'
    })
    modifyShaped(e, 'balancedflight:flight_core', 1, [' G ', 'GCG', ' G '], {
        G: 'minecraft:gold_block',
        C: 'minecraft:cake'
    })
    modifyShaped(e, 'balancedflight:ascended_blackstone', 1, ['GDG', 'DOD', 'GDG'], {
        G: 'minecraft:gilded_blackstone',
        D: 'minecraft:diamond',
        O: '#forge:obsidian'
    })
    modifyShaped(e, 'balancedflight:basic_flight_anchor', 1, ['OCO', 'BFB', 'AAA'], {
        A: 'balancedflight:ascended_blackstone',
        O: '#forge:obsidian',
        C: '#chipped:crying_obsidian',
        B: 'minecraft:iron_block',
        F: 'balancedflight:flight_core'
    })
    modifyShaped(e, 'balancedflight:gilded_flight_anchor', 1, ['OCO', 'BFB', 'AAA'], {
        A: 'balancedflight:ascended_blackstone',
        O: '#forge:obsidian',
        C: '#chipped:crying_obsidian',
        B: 'minecraft:gold_block',
        F: 'balancedflight:basic_flight_anchor'
    })
    modifyShaped(e, 'balancedflight:ascended_flight_anchor', 1, ['OCO', 'BFB', 'AAA'], {
        A: 'balancedflight:ascended_blackstone',
        O: '#forge:obsidian',
        C: '#chipped:crying_obsidian',
        B: 'minecraft:diamond_block',
        F: 'balancedflight:gilded_flight_anchor'
    })
})