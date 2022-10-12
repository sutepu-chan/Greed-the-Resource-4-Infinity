onEvent('jei.hide.items', e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    //===== hide color variants =====//
    colors.forEach(color => {
        if (color !== 'white') {
            utils.listOf([
                `minecraft:${color}_bed`,
                `minecraft:${color}_banner`,
                `minecraft:${color}_wool`,
                `minecraft:${color}_concrete_powder`,
                `minecraft:${color}_concrete`,
                `minecraft:${color}_carpet`,
                `minecraft:${color}_wool`,
                `minecraft:${color}_stained_glass`,
                `minecraft:${color}_stained_glass_pane`,
                `thermal:${color}_rockwool`,
                `connectedglass:borderless_glass_${color}`,
                `connectedglass:clear_glass_${color}`,
                `connectedglass:scratched_glass_${color}`,
                `connectedglass:tinted_borderless_glass_${color}`,
                `connectedglass:borderless_glass_${color}_pane`,
                `connectedglass:clear_glass_${color}_pane`,
                `connectedglass:scratched_glass_${color}_pane`,
                `absentbydesign:slab_glass_${color}`,
                `absentbydesign:stairs_glass_${color}`,
                `absentbydesign:wall_glass_${color}`,
                `absentbydesign:stairs_wool_${color}`,
                `absentbydesign:slab_wool_${color}`,
                `absentbydesign:slab_concrete_${color}`,
                `absentbydesign:slab_terracotta_${color}`,
                `absentbydesign:stairs_concrete_${color}`,
                `absentbydesign:stairs_terracotta_${color}`,
                `botanypotstiers:elite_${color}_botany_pot`,
                `botanypotstiers:ultra_${color}_botany_pot`,
                `botanypotstiers:creative_${color}_botany_pot`,
                `botanypots:${color}_botany_pot`,
                `botanypotstiers:creative_hopper_${color}_botany_pot`,
                `botanypotstiers:elite_hopper_${color}_botany_pot`,
                `botanypotstiers:ultra_hopper_${color}_botany_pot`,
                `botanypots:hopper_${color}_botany_pot`,
                `waystones:${color}_sharestone`,
                `pneumaticcraft:plastic_brick_${color}`,
                `pneumaticcraft:wall_lamp_${color}`,
                `pneumaticcraft:wall_lamp_inverted_${color}`
            ]).forEach(a => {
                e.hide(a)
            })
        }
    })
    //===== hide unify ores =====//
    function hideMetal(mod, name, types) {
        types.forEach(type => {
            e.hide(`${mod}:${name}_${type}`)
        })
    }
    function hideStuff(mod, type, names) {
        names.forEach(name => {
            e.hide(`${mod}:${name}_${type}`)
        })
    }
    hideStuff('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
    hideStuff('mekanism', 'ore', ['copper', 'tin', 'osmium', 'uranium', 'lead'])
    hideMetal('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
    hideMetal('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
    hideMetal('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
    hideMetal('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
    hideMetal('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
    hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
    hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
    hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
    hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
    hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
    hideMetal('tconstruct', 'copper', ['ore', 'block', 'ingot', 'nugget'])
    hideMetal('tmechworks', 'copper', ['ore', 'block', 'ingot', 'nugget'])
    hideMetal('tmechworks', 'aluminum', ['ore', 'block', 'ingot', 'nugget'])
    hideMetal('bno', 'aluminum', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'copper', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'lead', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'tin', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'silver', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'osmium', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'uranium', ['ingot', 'nugget', 'block'])
    hideMetal('bno', 'nickel', ['ingot', 'nugget', 'block'])
    hideMetal('occultism', 'copper', ['ore', 'block', 'ingot', 'nugget', 'dust'])
    hideMetal('occultism', 'silver', ['ore', 'block', 'ingot', 'nugget', 'dust'])
    hideMetal('occultism', 'gold', ['dust'])
    hideMetal('occultism', 'iron', ['dust'])
    hideMetal('eidolon', 'lead', ['ingot', 'nugget', 'block', 'ore'])
    hideMetal('boss_tools', 'steel', ['ingot', 'nugget', 'block'])
    //===== remove by mod =====//
    //global disable
    global.recipe_disable.forEach(item => {
        e.hide(item)
    })

    //hide tinker
    utils.listOf([
        'tconstruct:crafting_station',
        'tconstruct:tinker_station',
        'tconstruct:part_builder',
        'tconstruct:repair_kit',
        'tconstruct:pickaxe_head',
        'tconstruct:hammer_head',
        'tconstruct:small_axe_head',
        'tconstruct:broad_axe_head',
        'tconstruct:small_blade',
        'tconstruct:broad_blade',
        'tconstruct:tool_binding',
        'tconstruct:large_plate',
        'tconstruct:tool_handle',
        'tconstruct:small_blade',
        'tconstruct:hammer_head',
        'tconstruct:tough_handle',
        'tconstruct:pickaxe',
        'tconstruct:sledge_hammer',
        'tconstruct:vein_hammer',
        'tconstruct:mattock',
        'tconstruct:excavator',
        'tconstruct:hand_axe',
        'tconstruct:broad_axe',
        'tconstruct:kama',
        'tconstruct:scythe',
        'tconstruct:dagger',
        'tconstruct:sword',
        'tconstruct:cleaver',
        'tdelight:mace_head',
        'tdelight:naginata_head',
        'tdelight:mace',
        'tdelight:naginata',
        'tdelight:war_hammer',
        'materialis:wrench_head',
        'materialis:wrench',
    ]).forEach(a => e.hide(Item.of(a).ignoreNBT()))
    
    //hide masterful machinery
    utils.listOf([
        'masterfulmachinery:t0_t0_item_port_items_input',
        'masterfulmachinery:t0_t0_energy_port_energy_output',
        'masterfulmachinery:t1_t1_item_port_items_input',
        'masterfulmachinery:t1_t1_energy_port_energy_output',
        'masterfulmachinery:t2_t2_item_port_items_input',
        'masterfulmachinery:t2_t2_energy_port_energy_output',
        'masterfulmachinery:t3_t3_item_port_items_input',
        'masterfulmachinery:t3_t3_energy_port_energy_output',
        'masterfulmachinery:t4_t4_item_port_items_input',
        'masterfulmachinery:t4_t4_energy_port_energy_output',
        'masterfulmachinery:t5_t5_item_port_items_input',
        'masterfulmachinery:t5_t5_energy_port_energy_output',
        'masterfulmachinery:t6_t6_item_port_items_input',
        'masterfulmachinery:t6_t6_energy_port_energy_output'
    ]).forEach(a => e.hide(a))

    //hide chemlib
    e.hide(/chemlib:ingot.+/)

    //other
    utils.listOf([
        //library items
        Item.of('ftblibrary:fluid_container').ignoreNBT(),
        Item.of('mekanism:creative_fluid_tank').ignoreNBT(),
        Item.of('mekanism:creative_chemical_tank').ignoreNBT(),
        Item.of('appliedenergistics2:facade').ignoreNBT(),
        'notenoughwands:light',
        'mininggadgets:minerslight',
        'occultism:lighted_air',
        'kubejs:dummy_fluid_item',
        'environmental:sawmill',
         
        //mod
        '@itemfilters',
        '@theoneprobe',
        '@titanium',
        '@phosphophyllite',
        '@curios',
        '@structure_gel',
        '@tac', //rendering lag at JEI
        '@hammerlib',

        //unify ores
        'extendedcrafting:nether_star_block',
        'biggerreactors:yellorite_ore',
        'biggerreactors:yellorium_dust',
        'biggerreactors:yellorium_block',
        'biggerreactors:yellorium_ingot',
        'mekanism:dust_netherite',
        'nourished_nether:netherite_nugget',
        'charm:netherite_nugget',
        'thermal:iron_dust',
        'thermal:gold_dust',
        'appliedenergistics2:iron_dust',
        'appliedenergistics2:ender_dust',
        'appliedenergistics2:gold_dust',
        'appliedenergistics2:nether_quartz_dust',
        'lazierae2:coal_dust',
        'occultism:obsidian_dust',
        'eidolon:sulfur',
        'mekanism:dust_sulfur',
        'mekanism:sawdust',
        'boss_tools:iron_plate',
        'mekanism:block_charcoal',
        'buildersaddition:iron_rod',

        //charm
        'charm:woodcutter',
        Item.of('minecraft:enchanted_book').enchant('charm:tinted', 1),
        Item.of('minecraft:enchanted_book').enchant('charm:acquisition', 1),

        //tinker
        /tconstruct:.+_bucket/,
        /tdelight:.+_bucket/,
        /materialis:.+_bucket/,

        //tools
        'mysticalagriculture:inferium_staff',
        'mysticalagriculture:prudentium_staff',
        'mysticalagriculture:tertium_staff',
        'mysticalagriculture:imperium_staff',
        'mysticalagriculture:supremium_staff',
        'mysticaladaptations:insanium_staff',
        'boss_tools:hammer',
        'minecolonies:plate_armor_boots',
        'minecolonies:plate_armor_legs',
        'minecolonies:plate_armor_chest',
        'minecolonies:plate_armor_helmet',
        'autumnity:snail_shell_chestplate',
        'boss_tools:steel_hoe',
        'boss_tools:steel_axe',
        'boss_tools:steel_pickaxe',
        'boss_tools:steel_shovel',
        'boss_tools:steel_sword',
    ]).forEach(a => {
        e.hide(a)
    })

})

onEvent('jei.hide.fluids', e => {
    utils.listOf([
        'thermal:resin',
        'thermal:sap',
        'thermal:syrup',
        'thermal:tree_oil',
        'thermal:light_oil',
        'thermal:refined_fuel',
        'thermal:latex',
        'thermal:heavy_oil',
        'thermal:crude_oil',
        'thermal:creosote',
    ]).forEach(fluid => e.hide(fluid))

})