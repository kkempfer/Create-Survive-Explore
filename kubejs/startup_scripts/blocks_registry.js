StartupEvents.registry('block', event => {

    // Crate Delight

    // Add coconut flour bag
    event.create('coconut_flour_bag')
        .model('kubejs:block/coconut_flour_bag')
        .material('wool')
        .hardness(0.7)
        .resistance(0.8)
        .tagBlock("mineable/axe");

});