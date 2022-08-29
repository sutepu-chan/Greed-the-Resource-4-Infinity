onEvent('player.logged_in', e => {
    if (!e.player.stages.has('starting_items')) {
        e.player.stages.add('starting_items')
        e.player.give(Item.of('minecraft:stick', "{RepairCost:0,display:{Name:'{\"text\":\"Put me onto crafting grid\"}'}}"))
        e.player.give('5x minecraft:apple')
        e.player.give(Item.of('minecraft:paper', "{RepairCost:0,display:{Name:'{\"text\":\"Shift+Q to open quest\"}'}}"))
    }
})