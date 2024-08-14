ServerEvents.recipes(event => {

    // Apple cider
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:apple_cider') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:apple_cider', 27000),
        ['2x minecraft:apple', 'minecraft:sugar']
    );
    event.remove({ type: 'create:filling', output: 'farmersdelight:apple_cider' });
    event.recipes.createFilling(
        'farmersdelight:apple_cider',
        [Fluid.of('delightfulcreators:apple_cider', 27000), 'minecraft:glass_bottle']
    );

    // Glow Berry Custard
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:glow_berry_custard') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:glow_berry_custard', 27000),
        [Fluid.of('milk:still_milk', 27000), { tag: 'c:eggs' }, 'minecraft:glow_berries', 'minecraft:sugar']
    );
    event.remove({ type: 'create:filling', output: 'farmersdelight:glow_berry_custard' });
    event.recipes.createFilling(
        'farmersdelight:glow_berry_custard',
        [Fluid.of('delightfulcreators:glow_berry_custard', 27000), 'minecraft:glass_bottle']
    );

    // Hot cocoa
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:hot_cocoa') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:hot_cocoa', 54000),
        [Fluid.of('milk:still_milk', 27000), Fluid.of('create:chocolate', 27000)]
    ).heated();
    event.remove({ type: 'create:filling', output: 'farmersdelight:hot_cocoa' });
    event.recipes.createFilling(
        'farmersdelight:hot_cocoa',
        [Fluid.of('delightfulcreators:hot_cocoa', 27000), 'minecraft:glass_bottle']
    );

    // Melon juice
    event.remove({ type: 'create:filling', output: 'farmersdelight:melon_juice' });
    event.recipes.createFilling(
        'farmersdelight:melon_juice',
        [Fluid.of('delightfulcreators:melon_juice', 27000), 'minecraft:glass_bottle']
    );

    // Pumpkin soup
    event.remove({ type: 'create:mixing', output: Fluid.of('delightfulcreators:pumpkin_soup') });
    event.recipes.createMixing(
        Fluid.of('delightfulcreators:pumpkin_soup', 27000),
        [Fluid.of('milk:still_milk', 27000), 'farmersdelight:pumpkin_slice', { tag: 'c:crops/cabbage' }, { tag: 'c:raw_pork' }]
    ).heated();

    // Tea
    event.remove({ type: 'create:mixing', output: Fluid.of('create:tea') });
    event.recipes.createMixing(
        Fluid.of('create:tea', 54000),
        [{ tag: 'minecraft:leaves' }, Fluid.of('minecraft:water', 27000), Fluid.of('milk:still_milk', 27000)]
    ).heated();

});
