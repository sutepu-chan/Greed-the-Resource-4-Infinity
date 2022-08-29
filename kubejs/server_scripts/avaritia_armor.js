onEvent("player.tick", e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    //e.player.potionEffects.add(effect, duration(ticks), level, durability)
    if (e.player.level.time%100 == 0) {
        if (headArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_helmet') {
            e.player.potionEffects.add('night_vision', 400, 0)
        }
        if (chestArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_chestplate') {
            e.player.potionEffects.add('absorption', 400, 9)
        }
        if (legsArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_leggings') {
            e.player.potionEffects.add('jump_boost', 400, 0)
        }
        if (feetArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_boots') {
            e.player.potionEffects.add('speed', 400, 1)
        }
        if (headArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_helmet' && chestArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_chestplate' && legsArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_leggings' && feetArmorItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_boots') {
            e.player.potionEffects.add('strength', 400, 9)
            e.player.potionEffects.add('luck', 400, 4)
        }
    }
});