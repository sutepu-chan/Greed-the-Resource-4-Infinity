onEvent('block.left_click', e => {
    let targetBlock = e.getBlock()
    //bedrock minable
    if (targetBlock.id === 'minecraft:bedrock' && !e.player.isCrouching() && e.player.mainHandItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_pickaxe') {
        e.player.give('minecraft:bedrock')
        targetBlock.set('minecraft:air')
    }
    //Shift-LC will break a 11x11 area
    if (e.player.isCrouching() && e.player.mainHandItem.id === 'upgradednetherite_creative:creative_upgraded_netherite_pickaxe') {
        switch (e.facing) {
            case 'north' :
            case 'south' :
                for (let i = -5; i <= 5; i++) {
                    for (let j = -5; j <= 5; j++) {
                        e.player.give(targetBlock.offset(Facing.up, i).offset(Facing.east, j).id)
                        targetBlock.offset(Facing.up, i).offset(Facing.east, j).set('minecraft:air')
                    }
                }
                break;
            case 'east' :
            case 'west' :
                for (let i = -5; i <= 5; i++) {
                    for (let j = -5; j <= 5; j++) {
                        e.player.give(targetBlock.offset(Facing.up, i).offset(Facing.north, j).id)
                        targetBlock.offset(Facing.up, i).offset(Facing.north, j).set('minecraft:air')
                    }
                }
                break;
            case 'up' :
            case 'down' :
                for (let i = -5; i <= 5; i++) {
                    for (let j = -5; j <= 5; j++) {
                        e.player.give(targetBlock.offset(Facing.north, i).offset(Facing.east, j).id)
                        targetBlock.offset(Facing.north, i).offset(Facing.east, j).set('minecraft:air')                       
                    }
                }
                break;
        }
    }
})