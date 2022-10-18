onEvent("player.tick", e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    //e.player.potionEffects.add(effect, duration(ticks), level, durability)
    if (e.player.level.time%100 == 0) {
        if (headArmorItem.id === 'endless:infinity_helmet') {
            e.player.potionEffects.add('night_vision', 400, 0)
        }
        if (chestArmorItem.id === 'endless:infinity_chestplate') {
            e.player.potionEffects.add('absorption', 400, 9)
        }
        if (legsArmorItem.id === 'endless:infinity_leggings') {
            e.player.potionEffects.add('jump_boost', 400, 0)
        }
        if (feetArmorItem.id === 'endless:infinity_boots') {
            e.player.potionEffects.add('speed', 400, 1)
        }
        if (headArmorItem.id === 'endless:infinity_helmet' && chestArmorItem.id === 'endless:infinity_chestplate' && legsArmorItem.id === 'endless:infinity_leggings' && feetArmorItem.id === 'endless:infinity_boots') {
            e.player.potionEffects.add('strength', 400, 9)
            e.player.potionEffects.add('luck', 400, 4)
        }
    }
});