ServerEvents.recipes((event) => {

    const chippedCraftingTables = [
        'chipped:alchemy_bench',
        'chipped:botanist_workbench',
        'chipped:carpenters_table',
        'chipped:glassblower',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:tinkering_table'
    ];

    chippedCraftingTables.forEach(table => {
        event.forEachRecipe({ type: table }, recipe => {
            // Retrieve all item tags associated with the current table
            const tags = JSON.parse(recipe.json.toString()).tags;
            tags.forEach(tag => {
                // Retrieve all block item IDs associated with the current tag
                const items = Ingredient.of(`#${tag}`).getItemIds();
                items.forEach(item => {
                    event.recipes.createCutting(item, `#${tag}`).processingTime(50);
                });
            });
        });
    });

});
