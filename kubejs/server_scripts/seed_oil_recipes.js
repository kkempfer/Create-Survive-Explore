ServerEvents.tags('item', event => {

    const seedsItems = [
        'corndelight:corn_seeds',
        'supplementaries:flax_seeds'
    ];
    event.add('c:seeds', seedsItems);

});
