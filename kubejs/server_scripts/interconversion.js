onEvent('recipes', e => {
    //===== wood related items =====//
    e.shapeless('minecraft:oak_boat', '#minecraft:boats')
    e.shapeless('minecraft:chest', '#forge:chests/wooden')
    e.shapeless('minecraft:bookshelf', '#forge:bookshelves')
    e.shapeless('minecraft:crafting_table', '#forge:workbench')
    e.shapeless('minecraft:oak_sign', '#minecraft:signs')
    e.shapeless('minecraft:barrel', '#forge:barrels')
    //===== creative items =====//
    e.shapeless('appliedenergistics2:creative_energy_cell', 'powah:energy_cell_creative')
    e.shapeless('powah:energy_cell_creative', Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'))
    e.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), 'draconicevolution:creative_op_capacitor')
    e.shapeless('draconicevolution:creative_op_capacitor', 'appliedenergistics2:creative_energy_cell')
})
