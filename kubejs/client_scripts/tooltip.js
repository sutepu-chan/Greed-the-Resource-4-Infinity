onEvent("item.tooltip", e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

    //===== tooltip function=====//
    let formattedTooltip = (colour, item, tooltip) => {
        e.add(item, '')
        let line = ''
        tooltip.split(' ').forEach(word => {
            line.length == 0 ? line = word : line += ` ${word}`
            if (line.length > 40) {
                e.add(item, Text.of(line)[colour]())
                line = ''
            }
        })
        if (line.length > 0) e.add(item, Text.of(line)[colour]())
        e.add(item, '')
    }
    let darkBlueTooltip = (item, tooltip) => formattedTooltip('darkBlue', item, tooltip)
    let darkGreenTooltip = (item, tooltip) => formattedTooltip('darkGreen', item, tooltip)
    let darkAquaTooltip = (item, tooltip) => formattedTooltip('darkAqua', item, tooltip)
    let darkRedTooltip = (item, tooltip) => formattedTooltip('darkRed', item, tooltip)
    let darkPurpleTooltip = (item, tooltip) => formattedTooltip('darkPurple', item, tooltip)
    let goldTooltip = (item, tooltip) => formattedTooltip('gold', item, tooltip)
    let grayTooltip = (item, tooltip) => formattedTooltip('gray', item, tooltip)
    let darkGrayTooltip = (item, tooltip) => formattedTooltip('darkGray', item, tooltip)
    let blueTooltip = (item, tooltip) => formattedTooltip('blue', item, tooltip)
    let greenTooltip = (item, tooltip) => formattedTooltip('green', item, tooltip)
    let aquaTooltip = (item, tooltip) => formattedTooltip('aqua', item, tooltip)
    let redTooltip = (item, tooltip) => formattedTooltip('red', item, tooltip)
    let lightPurpleTooltip = (item, tooltip) => formattedTooltip('lightPurple', item, tooltip)
    let yellowTooltip = (item, tooltip) => formattedTooltip('yellow', item, tooltip)
    let whiteTooltip = (item, tooltip) => formattedTooltip('white', item, tooltip)
    //===== creative =====//
    let creative = ['pneumaticcraft:creative_upgrade', 'ironjetpacks:creative_cell', 'ironjetpacks:creative_thruster', 'ironjetpacks:creative_capacitor', Item.of('ironjetpacks:creative_jetpack', '{Throttle:1.0d}'), 'buildinggadgets:construction_paste_container_creative', 'littlelogistics:creative_capacitor', 'mysticalagradditions:creative_essence', 'mysticalagriculture:creative_soulium_dagger', 'psi:cad_assembly_creative', 'mekanism:creative_bin', 'mekanism:creative_fluid_tank', 'mekanism:creative_chemical_tank']
    creative.forEach(items => {
        grayTooltip(items, 'Unobtainable!')
    })
    darkRedTooltip(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"0"}]}}'), 'Deletes energy when empty. Check Quest Book for conversion.')
    //===== pipez =====//
    e.addAdvanced('pipez:item_pipe', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Default: '), Text.of('4 '), Text.of('items/20t')])
            text.add(2, [Text.of('Basic: '), Text.of('8 '), Text.of('items/15t')])
            text.add(3, [Text.of('Improved: ').gold(), Text.of('16 ').yellow(), Text.of('items/10t').gold()])
            text.add(4, [Text.of('Advanced: ').darkAqua(), Text.of('32 ').aqua(), Text.of('items/5t').darkAqua()])
            text.add(5, [Text.of('Ultimate: ').darkGray(), Text.of('64 ').gray(), Text.of('items/t').darkGray()])
            text.add(6, [Text.of('Infinity: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('items/t').darkPurple()])
        }
    })
    e.addAdvanced('pipez:fluid_pipe', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Default: '), Text.of('50 '), Text.of('mB/t')])
            text.add(2, [Text.of('Basic: '), Text.of('100 '), Text.of('mB/t')])
            text.add(3, [Text.of('Improved: ').gold(), Text.of('500 ').yellow(), Text.of('mB/t').gold()])
            text.add(4, [Text.of('Advanced: ').darkAqua(), Text.of('2,000 ').aqua(), Text.of('mB/t').darkAqua()])
            text.add(5, [Text.of('Ultimate: ').darkGray(), Text.of('10,000 ').gray(), Text.of('mB/t').darkGray()])
            text.add(6, [Text.of('Infinity: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('mB/t').darkPurple()])
        }
    })
    e.addAdvanced('pipez:gas_pipe', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Default: '), Text.of('200 '), Text.of('mB/t')])
            text.add(2, [Text.of('Basic: '), Text.of('400 '), Text.of('mB/t')])
            text.add(3, [Text.of('Improved: ').gold(), Text.of('2,000 ').yellow(), Text.of('mB/t').gold()])
            text.add(4, [Text.of('Advanced: ').darkAqua(), Text.of('8,000 ').aqua(), Text.of('mB/t').darkAqua()])
            text.add(5, [Text.of('Ultimate: ').darkGray(), Text.of('40,000 ').gray(), Text.of('mB/t').darkGray()])
            text.add(6, [Text.of('Infinity: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('mB/t').darkPurple()])
        }
    })
    e.addAdvanced('pipez:energy_pipe', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Default: '), Text.of('256 '), Text.of('FE/t')])
            text.add(2, [Text.of('Basic: '), Text.of('1,024 '), Text.of('FE/t')])
            text.add(3, [Text.of('Improved: ').gold(), Text.of('8,192 ').yellow(), Text.of('FE/t').gold()])
            text.add(4, [Text.of('Advanced: ').darkAqua(), Text.of('32,768 ').aqua(), Text.of('FE/t').darkAqua()])
            text.add(5, [Text.of('Ultimate: ').darkGray(), Text.of('131,072 ').gray(), Text.of('FE/t').darkGray()])
            text.add(6, [Text.of('Infinity: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('FE/t').darkPurple()])
        }
    })
    e.addAdvanced('pipez:basic_upgrade', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Item: '), Text.of('8 '), Text.of('items/t')])
            text.add(2, [Text.of('Fluid: '), Text.of('100 '), Text.of('mB/t')])
            text.add(3, [Text.of('Gas: '), Text.of('400 '), Text.of('mB/t')])
            text.add(4, [Text.of('Energy: '), Text.of('1,024 '), Text.of('FE/t')])
        }
    })
    e.addAdvanced('pipez:improved_upgrade', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Item: ').gold(), Text.of('16 ').yellow(), Text.of('items/t').gold()])
            text.add(2, [Text.of('Fluid: ').gold(), Text.of('500 ').yellow(), Text.of('mB/t').gold()])
            text.add(3, [Text.of('Gas: ').gold(), Text.of('2,000 ').yellow(), Text.of('mB/t').gold()])
            text.add(4, [Text.of('Energy: ').gold(), Text.of('8,192 ').yellow(), Text.of('FE/t').gold()])
        }
    })
    e.addAdvanced('pipez:advanced_upgrade', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Item: ').darkAqua(), Text.of('32 ').aqua(), Text.of('items/t').darkAqua()])
            text.add(2, [Text.of('Fluid: ').darkAqua(), Text.of('2,000 ').aqua(), Text.of('mB/t').darkAqua()])
            text.add(3, [Text.of('Gas: ').darkAqua(), Text.of('8,000 ').aqua(), Text.of('mB/t').darkAqua()])
            text.add(4, [Text.of('Energy: ').darkAqua(), Text.of('32,768 ').aqua(), Text.of('FE/t').darkAqua()])
        }
    })
    e.addAdvanced('pipez:ultimate_upgrade', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Item: ').darkGray(), Text.of('64 ').gray(), Text.of('items/t').darkGray()])
            text.add(2, [Text.of('Fluid: ').darkGray(), Text.of('10,000 ').gray(), Text.of('mB/t').darkGray()])
            text.add(3, [Text.of('Gas: ').darkGray(), Text.of('40,000 ').gray(), Text.of('mB/t').darkGray()])
            text.add(4, [Text.of('Energy: ').darkGray(), Text.of('131,072 ').gray(), Text.of('FE/t').darkGray()])
        }
    })
    e.addAdvanced('pipez:infinity_upgrade', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('Item: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('items/t').darkPurple()])
            text.add(2, [Text.of('Fluid: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('mB/t').darkPurple()])
            text.add(3, [Text.of('Gas: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('mB/t').darkPurple()])
            text.add(4, [Text.of('Energy: ').darkPurple(), Text.of('2,147,483,647 ').lightPurple(), Text.of('FE/t').darkPurple()])
        }
    })
    //===== iron furnace =====//
    e.add('ironfurnaces:iron_furnace', [
        [Text.of('160 ticks ').white(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:gold_furnace', [
        [Text.of('120 ticks ').gold(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:diamond_furnace', [
        [Text.of('80 ticks ').darkBlue(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:emerald_furnace', [
        [Text.of('40 ticks ').green(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:obsidian_furnace', [
        [Text.of('20 ticks ').darkGray(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:crystal_furnace', [
        [Text.of('40 ticks ').aqua(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:netherite_furnace', [
        [Text.of('5 ticks ').darkRed(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:copper_furnace', [
        [Text.of('180 ticks ').red(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:silver_furnace', [
        [Text.of('140 ticks ').white(), Text.of('per each smelting operation').gray()]
    ])
    e.add('ironfurnaces:allthemodium_furnace', [
        [Text.of('5 ticks ').yellow(), Text.of('per 16 smelting operation').gray()]
    ])
    e.add('ironfurnaces:vibranium_furnace', [
        [Text.of('3 ticks ').darkGreen(), Text.of('per 32 smelting operation').gray()]
    ])
    e.add('ironfurnaces:unobtainium_furnace', [
        [Text.of('1 ticks ').lightPurple(), Text.of('per 64 smelting operation').gray()],
        ['Instant smelting!']
    ])
    e.add('ironfurnaces:million_furnace', [
        [Text.of('20 ticks ').white(), Text.of('per 64 smelting operation').gray()],
        [Text.of('I ').red(), Text.of('a').gold(), Text.of('m ').yellow(), Text.of('s').green(), Text.of('p').darkGreen(), Text.of('e').aqua(), Text.of('e').blue(), Text.of('d').lightPurple(), Text.of('.').gray()]
    ])

    //===== iron chests =====//
    whiteTooltip('ironchest:iron_chest', '63 slots')
    goldTooltip('ironchest:gold_chest', '81 slots')
    blueTooltip('ironchest:diamond_chest', '108 slots')
    yellowTooltip('ironchest:copper_chest', '45 slots')
    whiteTooltip('ironchest:silver_chest', '72 slots')
    aquaTooltip('ironchest:crystal_chest', '108 slots')
    darkGrayTooltip('ironchest:obsidian_chest', '108 slots')
    grayTooltip('ironchest:dirt_chest', '9000 SLOTS')

    //===== botany pots =====//
    greenTooltip(`botanypotstiers:elite_botany_pot`, '3x Speed and 6x Output')
    darkGreenTooltip(`botanypotstiers:elite_hopper_botany_pot`, '3x Speed and 6x Output')
    greenTooltip(`botanypotstiers:ultra_botany_pot`, '6x Speed and 10x Output')
    darkGreenTooltip(`botanypotstiers:ultra_hopper_botany_pot`, '6x Speed and 10x Output')
    greenTooltip(`botanypotstiers:creative_botany_pot`, '10x Speed and 20x Output')
    darkGreenTooltip(`botanypotstiers:creative_hopper_botany_pot`, '10x Speed and 20x Output')
    colors.forEach(color => {
        greenTooltip(`botanypotstiers:elite_${color}_botany_pot`, '3x Speed and 6x Output')
        darkGreenTooltip(`botanypotstiers:elite_hopper_${color}_botany_pot`, '3x Speed and 6x Output')

        greenTooltip(`botanypotstiers:ultra_${color}_botany_pot`, '6x Speed and 10x Output')
        darkGreenTooltip(`botanypotstiers:ultra_hopper_${color}_botany_pot`, '6x Speed and 10x Output')

        greenTooltip(`botanypotstiers:creative_${color}_botany_pot`, '10x Speed and 20x Output')
        darkGreenTooltip(`botanypotstiers:creative_hopper_${color}_botany_pot`, '10x Speed and 20x Output')
    })

    //===== construction wand tooltip =====//
    aquaTooltip('constructionwand:stone_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
    aquaTooltip('constructionwand:iron_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
    aquaTooltip('constructionwand:diamond_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
    aquaTooltip('constructionwand:infinity_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)

    //===== quarry plus tooltip =====//
    goldTooltip('quarryplus:markerplus', 'Place 3 marker at the corner in shape of square/rectangle to mark the area to be dig.')
    goldTooltip('quarryplus:marker16', 'This marks 16x16 area.')
    goldTooltip('quarryplus:flex_marker', 'Right click to config the area.')
    goldTooltip('quarryplus:y_setter', 'Right click quarry to set the Y-level to be digged.')
    goldTooltip('quarryplus:miningwellplus', 'Mine straight down to bedrock!')
    goldTooltip('quarryplus:placer_plus', 'Place blocks by redstone pulse.')

    //===== allthecompressed tooltip =====//
    darkPurpleTooltip('/allthecompressed:.+_1x/', 'Equals 9 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_2x/', 'Equals 81 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_3x/', 'Equals 729 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_4x/', 'Equals 6,561 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_5x/', 'Equals 59,049 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_6x/', 'Equals 531,441 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_7x/', 'Equals 4,782,969 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_8x/', 'Equals 43,046,721 blocks.')
    darkPurpleTooltip('/allthecompressed:.+_9x/', 'Equals 387,420,489 blocks.')

    //===== disable tools =====//
    let disableToolTooltips = (tools) => {
        tools.forEach(tool => {
            e.add(tool, [
                [Text.of('Disabled').darkRed()],
                [Text.of('For recipes use').gold()]
            ])
        })
    }
    disableToolTooltips(global.tools_disable)

    //===== compact machines =====//
    blueTooltip('compactmachines:machine_tiny', '3x3x3 space.')
    blueTooltip('compactmachines:machine_small', '5x5x5 space.')
    blueTooltip('compactmachines:machine_normal', '7x7x7 space.')
    blueTooltip('compactmachines:machine_large', '9x9x9 space.')
    blueTooltip('compactmachines:machine_giant', '11x11x11 space.')
    blueTooltip('compactmachines:machine_maximum', '13x13x13 space.')

    //===== thermal =====//
    darkPurpleTooltip('thermal:machine_crafter', 'Auto-crafter')
    darkPurpleTooltip('thermal:machine_brewer', 'Auto-brewer')
    darkPurpleTooltip('thermal:machine_smelter', 'Alloy Smelter')

    //===== tac =====//
    grayTooltip('%Pistols', 'Pistol')
    grayTooltip('%SMGs', 'SMG')
    grayTooltip('%AssaultRifles', 'Assault Rifle')
    grayTooltip('%MarksmanRifles', 'Marksman Rifle')
    grayTooltip('%Shotguns', 'Shotgun')
    grayTooltip('%HeavyWeapons', 'Heavy Gun')

    //===== angel ring =====//
    goldTooltip('angelring:itemdiamondring', 'Crafting Ingredient')
    
    //===== ae2 =====//
    whiteTooltip()
    
    //====== space =====//
    grayTooltip('boss_tools:oxygen_loader', 'Convert water into Oxygen.')
    grayTooltip('boss_tools:fuel_refinery', 'Turn oil into rocket fuel.')
    grayTooltip('boss_tools_giselle_addon:fuel_loader', 'Load fule into rocket in a configurable area.')
    grayTooltip('boss_tools_giselle_addon:gravity_normalizer', 'Modify gravitational acceleration to a=9.81ms^-2.')
    grayTooltip('boss_tools:rocket_launch_pad', 'Place into 3x3 structure to allow rocket launching.')

    //===== avaritia armor =====//
    e.addAdvanced('endless:infinity_helmet', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('for infos.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('● Night Vision').gold()])
            text.add(2, [Text.of('● Creative Flight').gold(), Text.of(' (Set Bonus)').green()])
            text.add(3, [Text.of('● Strength X').gold(), Text.of(' (Set Bonus)').green()])
            text.add(4, [Text.of('● Luck V').gold(), Text.of(' (Set Bonus)').green()])
            text.add(5, [Text.of('● Regeneration').gold(), Text.of(' (Set Bonus)').green()])
            text.add(6, [Text.of('● Saturation').gold(), Text.of(' (Set Bonus)').green()])
            text.add(7, [Text.of('● Ignore Damage').gold(), Text.of(' (Set Bonus)').green()])
            text.add(8, [Text.of('● Ignore Harmful Effects').gold(), Text.of(' (Set Bonus)').green()])
        }
    })
    e.addAdvanced('endless:infinity_chestplate', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('for infos.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('● Absorption X').gold()])
            text.add(2, [Text.of('● Creative Flight').gold(), Text.of(' (Set Bonus)').green()])
            text.add(3, [Text.of('● Strength X').gold(), Text.of(' (Set Bonus)').green()])
            text.add(4, [Text.of('● Luck V').gold(), Text.of(' (Set Bonus)').green()])
            text.add(5, [Text.of('● Regeneration').gold(), Text.of(' (Set Bonus)').green()])
            text.add(6, [Text.of('● Saturation').gold(), Text.of(' (Set Bonus)').green()])
            text.add(7, [Text.of('● Ignore Damage').gold(), Text.of(' (Set Bonus)').green()])
            text.add(8, [Text.of('● Ignore Harmful Effects').gold(), Text.of(' (Set Bonus)').green()])
        }
    })
    e.addAdvanced('endless:infinity_leggings', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('for infos.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('● JumpBoost').gold()])
            text.add(2, [Text.of('● Creative Flight').gold(), Text.of(' (Set Bonus)').green()])
            text.add(3, [Text.of('● Strength X').gold(), Text.of(' (Set Bonus)').green()])
            text.add(4, [Text.of('● Luck V').gold(), Text.of(' (Set Bonus)').green()])
            text.add(5, [Text.of('● Regeneration').gold(), Text.of(' (Set Bonus)').green()])
            text.add(6, [Text.of('● Saturation').gold(), Text.of(' (Set Bonus)').green()])
            text.add(7, [Text.of('● Ignore Damage').gold(), Text.of(' (Set Bonus)').green()])
            text.add(8, [Text.of('● Ignore Harmful Effects').gold(), Text.of(' (Set Bonus)').green()])
        }
    })
    e.addAdvanced('endless:infinity_boots', (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('for infos.').gold()])
        }
        if (e.isShift()) {
            text.add(1, [Text.of('● Speed II').gold()])
            text.add(2, [Text.of('● Creative Flight').gold(), Text.of(' (Set Bonus)').green()])
            text.add(3, [Text.of('● Strength X').gold(), Text.of(' (Set Bonus)').green()])
            text.add(4, [Text.of('● Luck V').gold(), Text.of(' (Set Bonus)').green()])
            text.add(5, [Text.of('● Regeneration').gold(), Text.of(' (Set Bonus)').green()])
            text.add(6, [Text.of('● Saturation').gold(), Text.of(' (Set Bonus)').green()])
            text.add(7, [Text.of('● Ignore Damage').gold(), Text.of(' (Set Bonus)').green()])
            text.add(8, [Text.of('● Ignore Harmful Effects').gold(), Text.of(' (Set Bonus)').green()])
        }
    })

    //===== better muffling =====//
    whiteTooltip('bettermuffling:muffling_block', 'Be Quiet! Shh...')
    yellowTooltip('bettermuffling:muffling_block_advanced', 'Be Silent! Shhhhh....')
})