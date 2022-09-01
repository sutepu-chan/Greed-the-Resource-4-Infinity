onEvent('item.registry', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    e.create('endest_pearl')
        .maxStackSize(64)
        .displayName('Endest Pearl');
    e.create('ultimate_stew')
        .maxStackSize(64)
        .displayName('Ultimate Stew')
        .food(foodBuilder => {
            foodBuilder.hunger(120)
            foodBuilder.saturation(100)
            foodBuilder.alwaysEdible(true)
            foodBuilder.fastToEat(true)
        });
    e.create('cosmic_meatballs')
        .maxStackSize(64)
        .displayName('Cosmic Meatballs')
        .food(foodBuilder => {
            foodBuilder.hunger(120)
            foodBuilder.saturation(100)
            foodBuilder.alwaysEdible(true)
            foodBuilder.fastToEat(true)
            foodBuilder.meat(true)
        });
    e.create('neutronium_ingot')
        .maxStackSize(64)
        .displayName('Neutronium Ingot');
    e.create('neutron_nugget')
        .maxStackSize(64)
        .displayName('Neutron Nugget');
    e.create('neutron_pile')
        .maxStackSize(64)
        .displayName('Neutron Pile');
})
onEvent('block.registry', e => {
    e.create('neutronium')
        .type('basic')
        .material('metal')
        .hardness(4.0)
        .displayName('Neutronium')
        .harvestTool('pickaxe', 5)
        .requiresTool(true)
})