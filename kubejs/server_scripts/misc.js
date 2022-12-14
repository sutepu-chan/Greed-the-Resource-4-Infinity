onEvent('recipes', e => {
    //===== remove library or disabled items =====//
    e.remove({ mod: 'itemfilters' })
    e.remove({ mod: 'theoneprobe' })
    e.remove({ mod: 'titanium' })
    e.remove({ mod: 'phosphophyllite' })
    e.remove({ mod: 'curios' })

    //===== dank =====//
    e.replaceInput({ output: 'dankstorage:dank_1' }, 'minecraft:barrel', '#forge:barrels')
    e.replaceInput({ output: 'dankstorage:dank_1' }, 'minecraft:coal', '#minecraft:coals')

    //===== snad balancing =====//
    modifyShaped(e, 'snad:snad', 1, ['M', 'B', 'M'], {
        M: 'minecraft:sand',
        B: '#forge:fertilizer'
    })
    modifyShaped(e, 'snad:red_snad', 1, ['M', 'B', 'M'], {
        M: 'minecraft:red_sand',
        B: '#forge:fertilizer'
    })
    modifyShaped(e, 'snad:soul_snad', 1, ['M', 'B', 'M'], {
        M: 'minecraft:soul_sand',
        B: '#forge:fertilizer'
    })

    //===== no log punch =====//
    modifyShaped(e, 'nologpunch:flint_tool', 1, ['FS', 'S '], {
        S: '#forge:rods/wooden',
        F: 'minecraft:flint'
    })

    //===== mtr =====//
    modifyShaped(e, 'mtr:dashboard', 1, ['GGG', 'GGG', 'IRI'], {
        G: 'biggerreactors:graphite_ingot',
        I: 'minecraft:iron_ingot',
        R: '#forge:rods/iron'
    })

    //===== xnet =====//
    e.replaceInput('rftoolsbase:machine_frame', 'mekanism:steel_casing')

    //===== platform =====//
    modifyShaped(e, 'platforms:platformer', 1, ['CSC', 'RWR', 'III'], {
        C: '#forge:dusts/copper',
        R: 'minecraft:redstone',
        I: 'minecraft:iron_block',
        S: 'thermal:saw_blade',
        W: '#forge:workbench'
    })
    modifyShaped(e, 'platforms:wrench', 1, [' CC', ' I ', 'RR '], {
        R: 'minecraft:redstone',
        I: 'minecraft:iron_ingot',
        C: 'pneumaticcraft:ingot_iron_compressed'
    })

    //===== item collectors =====//
    modifyShaped(e, 'itemcollectors:basic_collector', 1, [' P ', ' D ', 'OIO'], {
        P: 'minecraft:ender_pearl',
        D: 'mekanism:dust_obsidian',
        I: 'alltheores:iron_dust',
        O: 'minecraft:obsidian'
    })

    //===== time in a bottle =====//
    e.remove({ output: 'tiab:timeinabottle' })
    e.recipes.thermal.smelter('tiab:timeinabottle', ['64x minecraft:clock', '8x mekanism:alloy_atomic', '32x mekanism:dust_lithium'])

    //===== pipez =====//
    e.shaped('pipez:infinity_upgrade', ['NEN', 'EUE', 'NEN'], {
        N: 'minecraft:nether_star',
        E: 'minecraft:netherite_block',
        U: 'pipez:ultimate_upgrade'
    }).id(`kubejs:pipez/infinity_upgrade`)

    //===== capture egg =====//
    e.remove({ output: 'capturetomob:capture_egg_item' })
    e.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: [
            'AAAAA',
            'ABBBA',
            'ABCCA',
            'ABBBA',
            'AAAAA'
        ],
        key: {
            A: {
                tag: 'forge:obsidian'
            },
            B: {
                item: 'minecraft:egg'
            },
            C: {
                item: 'minecraft:wheat_seeds'
            }
        },
        result: {
            item: 'capturetomob:capture_egg_item'
        }
    })

    //===== chemlib =====//
    utils.listOf([
        'beryllium',
        'boron',
        'sodium',
        'aluminum',
        'silicon',
        'potassium',
        'calcium',
        'scandium',
        'manganese',
        'cobalt',
        'nickel',
        'copper',
        'zinc',
        'gallium',
        'arsenic',
        'selenium',
        'rubidium',
        'strontium',
        'yttrium',
        'zirconium',
        'niobium',
        'molybdenum',
        'technetium',
        'ruthenium',
        'rhodium',
        'palladium',
        'silver',
        'cadmium',
        'indium',
        'tin',
        'antimony',
        'tellurium',
        'cesium',
        'lanthanum',
        'cerium',
        'praseodymium',
        'promethium',
        'samarium',
        'europium',
        'gadolinium',
        'terbium',
        'dysprosium',
        'holmium',
        'erbium',
        'thulium',
        'ytterbium',
        'lutetium',
        'hafnium',
        'tantalum',
        'rhenium',
        'osmium',
        'iridium',
        'platinum',
        'thallium',
        'lead',
        'bismuth',
        'polonium',
        'astatine',
        'francium',
        'radium',
        'actinium',
        'protactinium',
        'uranium',
        'neptunium',
        'plutonium',
        'americium',
        'curium',
        'berkelium',
        'californium',
        'einsteinium',
        'fermium',
        'mendelevium',
        'nobelium',
        'lawrencium',
        'rutherfordium',
        'dubnium',
        'seaborgium',
        'bohrium',
        'hassium',
        'meitnerium',
        'darmstadtium',
        'roentgenium',
        'copernicium',
        'nihonium',
        'flerovium',
        'moscovium',
        'livermorium',
        'tennessine',
        'oganesson'
    ]).forEach(ingot => {
        e.remove({ output: `chemlib:ingot_${ingot}` })
    })

    //===== minecolonies =====//
    e.shaped('structurize:caliper', [' G ', 'S S', 'I I'], {
        I: 'minecraft:iron_ingot',
        G: '#forge:gears/iron',
        S: '#forge:rods/wooden'
    })

    //===== ferret library =====//
    e.remove({id: /library_ferret:.+/})
})