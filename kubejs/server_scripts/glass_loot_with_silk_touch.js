ServerEvents.blockLootTables(event => {

    // Chipped

    const glassTags = [
        '#chipped:glass',
        '#chipped:white_stained_glass',
        '#chipped:orange_stained_glass',
        '#chipped:magenta_stained_glass',
        '#chipped:light_blue_stained_glass',
        '#chipped:yellow_stained_glass',
        '#chipped:lime_stained_glass',
        '#chipped:pink_stained_glass',
        '#chipped:gray_stained_glass',
        '#chipped:light_gray_stained_glass',
        '#chipped:cyan_stained_glass',
        '#chipped:purple_stained_glass',
        '#chipped:blue_stained_glass',
        '#chipped:brown_stained_glass',
        '#chipped:green_stained_glass',
        '#chipped:red_stained_glass',
        '#chipped:black_stained_glass',
        '#chipped:glass_pane',
        '#chipped:white_stained_glass_pane',
        '#chipped:orange_stained_glass_pane',
        '#chipped:magenta_stained_glass_pane',
        '#chipped:light_blue_stained_glass_pane',
        '#chipped:yellow_stained_glass_pane',
        '#chipped:lime_stained_glass_pane',
        '#chipped:pink_stained_glass_pane',
        '#chipped:gray_stained_glass_pane',
        '#chipped:light_gray_stained_glass_pane',
        '#chipped:cyan_stained_glass_pane',
        '#chipped:purple_stained_glass_pane',
        '#chipped:blue_stained_glass_pane',
        '#chipped:brown_stained_glass_pane',
        '#chipped:green_stained_glass_pane',
        '#chipped:red_stained_glass_pane',
        '#chipped:black_stained_glass_pane'
    ];

    glassTags.forEach(tag => {
        // Retrieve all block item IDs associated with the current tag
        const glassBlocks = Ingredient.of(tag).getItemIds()
        glassBlocks.forEach(block => {
            // Define a loot table for the current block
            event.addBlock(block, table => {
                table.addPool(pool => {
                    pool.rolls = 1;

                    // Add a condition to check for Silk Touch
                    pool.addCondition({
                        "condition": "minecraft:match_tool",
                        "predicate": {
                            "enchantments": [
                                {
                                    "enchantment": "minecraft:silk_touch",
                                    "levels": {
                                        "min": 1
                                    }
                                }
                            ]
                        }
                    });

                    // Add the item to drop itself
                    pool.addItem(block);
                });
            });
        });
    });

});