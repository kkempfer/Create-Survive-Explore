StartupEvents.registry('item', event => {

    // Delightful Creators

    // Add incomplete pasta dish for sequenced assembly recipe
    event.create('incomplete_pasta_dish')
        .texture('delightfulcreators:item/incomplete_pasta_dish')
        .food(food => {
            food
                .hunger(3)
                .saturation(0.3)
        });

    // Add incomplete squid ink pasta dish for sequenced assembly recipe
    event.create('incomplete_squid_ink_pasta')
        .texture('delightfulcreators:item/incomplete_squid_ink_pasta')
        .food(food => {
            food
                .hunger(3)
                .saturation(0.3)
        });

    // Add incomplete squid ink pasta dish for sequenced assembly recipe
    event.create('incomplete_sweet_roll')
        .texture('delightfulcreators:item/incomplete_sweet_roll')
        .food(food => {
            food
                .hunger(1)
                .saturation(0.2)
        });

    // Ecologics

    // Add coconut flour
    event.create('coconut_flour')
        .texture('kubejs:item/coconut_flour');

});