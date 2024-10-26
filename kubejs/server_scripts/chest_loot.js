ServerEvents.chestLootTables(event => {

    // Corn Delight

    // Corn seeds
    event.modify('minecraft:village/village_plains_house', table => {
        table.addPool(pool => {
            pool.rolls = {
                min: 1.0,
                max: 3.0,
                type: 'minecraft:uniform'
            };

            pool.addItem('corndelight:corn_seeds', 1, item => {
                item.count = {
                    min: 1.0,
                    max: 3.0,
                    type: 'minecraft:uniform'
                };
            });
        });
    });

});