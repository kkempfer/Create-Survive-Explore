ServerEvents.genericLootTables(event => {

    // Modify the custom loot table for the Sanctum Illusionist,
    // which does not utilize the vanilla Illusioner loot table.
    event.modify('incendium:artifact/scroll_drop', table => {
        table.addPool(pool => {
            pool.rolls = 1;
            pool.addItem('endrem:cold_eye');
        });
    });

});