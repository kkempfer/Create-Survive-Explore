ServerEvents.tags('item', event => {

    // Create Crafts & Additions

    // Compact seeds into seed oil
    const seedsItems = [
        'corndelight:corn_seeds',
        'supplementaries:flax_seeds'
    ];
    event.add('c:seeds', seedsItems);

});
