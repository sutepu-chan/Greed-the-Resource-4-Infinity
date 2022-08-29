onEvent('recipes', e => {
    function isBlackList(slab) {
        let blacklist = [
            'modid:dummy_slab',
        ];
        let k = 0;
        blacklist.forEach(element => {
        if (slab === element) k++;
        });
        if (k == 0) return false;
        else return true;
    }
    e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, slabs => {
        if (slabs.inputItems.length == 1 && isBlackList(slabs.outputItems[0].withCount(1)) == false) {
            e.shaped(slabs.inputItems[0], ['S', 'S'], {
                S: slabs.outputItems[0].withCount(1)
            });
        };
    });
});