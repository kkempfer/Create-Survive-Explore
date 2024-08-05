ServerEvents.blockLootTables(event => {

    const glassPatterns = [
        // Chipped
        /chipped:([a-z_]*_)?lead([a-z_]*)?_glass(_[a-z_]*)?\b/,
        /chipped:([a-z_]*_)?oak_([a-z_]*_)?glass(_[a-z_]*)?\b/,
        /chipped:([a-z_]*_)?stained_glass(_[a-z_]*)?\b/,
        /chipped:([a-z_]*_)?stained_glass(_[a-z_]*)?\b/,
        // Create
        // https://github.com/Creators-of-Create/Create/pull/6739
        'create:framed_glass_door',
        'create:framed_glass_trapdoor',
        'create:tiled_glass',
        // Every Compat
        /everycomp:ch[/]ecologics[/]([a-z_]*_)?coconut_([a-z_]*)?glass(_[a-z_]*)?\b/,
        /everycomp:ch[/]ecologics[/]([a-z_]*_)?walnut_([a-z_]*)?glass(_[a-z_]*)?\b/,
        /everycomp:ch[/]ecologics[/]([a-z_]*_)?flowering_azalea_([a-z_]*)?glass(_[a-z_]*)?\b/,
        /everycomp:ch[/]ecologics[/]([a-z_]*_)?azalea_([a-z_]*)?glass(_[a-z_]*)?\b/,
        // Naturalist
        // https://github.com/starfish-studios/Naturalist/pull/33
        /naturalist:([a-z_]*_)?froglass_pane/
    ];

    glassPatterns.forEach(pattern => {
        // Retrieve all block item IDs associated with the current pattern
        const glassBlocks = Ingredient.of(pattern).getItemIds()
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
