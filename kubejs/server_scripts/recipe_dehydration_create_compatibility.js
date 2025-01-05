ServerEvents.recipes(event => {

    // Define volumes for flasks and buckets
    const VOLUMES = {
        bottle: 27000,
        bucket: 81000
    };

    // Define water types
    const fluidConfig = {
        purifiedWater: (volume) => Fluid.of('create:potion', volume, { Bottle: 'REGULAR', Potion: 'minecraft:purified_water' }),
        contaminatedWater: (volume) => Fluid.of('minecraft:water', volume)
    };

    // Define flask tiers and their corresponding capacities
    const flaskTiersAndCapacities = [
        ['leather', 2],
        ['iron_leather', 3],
        ['golden_leather', 4],
        ['diamond_leather', 5],
        ['netherite_leather', 6]
    ];

    // Function to get both types of purified water flasks for a given tier and level
    function getPurifiedWaterFlasks(tier, i) {
        return [
            Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i} }`).strongNBT(),
            Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i}, purified_water: 0 }`).strongNBT()
        ];
    }

    // Add purified water flasks recipes
    flaskTiersAndCapacities.forEach(([tier, capacity]) => {

        // Fill empty flask with purified water regardless of prior state
        const emptyFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: 0 }`).weakNBT();
        const replenishedFirstPurifiedFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: 1, purified_water: 0}`);
        event.recipes.createFilling(replenishedFirstPurifiedFlask, [fluidConfig.purifiedWater(VOLUMES.bottle), emptyFlask]);

        // Iterate through incomplete and full flasks
        for (let i = 1; i <= capacity; i++) {
            // Fill flask with purified water incrementally
            if (i < capacity) {
                let purifiedFlasks = getPurifiedWaterFlasks(tier, i);
                let replenishedPurifiedFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i + 1}, purified_water: 0 }`);
                purifiedFlasks.forEach(purifiedFlask => {
                    event.recipes.createFilling(replenishedPurifiedFlask, [fluidConfig.purifiedWater(VOLUMES.bottle), purifiedFlask]);
                });
            }
            // Empty flask for all water states
            for (let j = 0; j <= 2; j++) {
                let fluid = (j === 0) ? fluidConfig.purifiedWater(VOLUMES.bottle) : fluidConfig.contaminatedWater(VOLUMES.bottle);

                if (j === 0) { // Purified water (j=0)
                    let purifiedFlasks = getPurifiedWaterFlasks(tier, i);
                    let emptiedPurifiedFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i - 1}, purified_water: ${j} }`);
                    purifiedFlasks.forEach(purifiedFlask => {
                        event.recipes.createEmptying([fluid, emptiedPurifiedFlask], purifiedFlask);
                    });
                } else { // Impurified (j=1) and dirty water (j=2)
                    let contaminatedFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i}, purified_water: ${j} }`).strongNBT();
                    let emptiedContaminatedFlask = Item.of(`dehydration:${tier}_flask`, `{ leather_flask: ${i - 1}, purified_water: ${j} }`);
                    event.recipes.createEmptying([fluid, emptiedContaminatedFlask], contaminatedFlask);
                }
            }
        }
    });

    // Add purified water bucket recipes
    event.recipes.createFilling('dehydration:purified_water_bucket', [fluidConfig.purifiedWater(VOLUMES.bucket), 'minecraft:bucket']);
    event.recipes.createEmptying([fluidConfig.purifiedWater(VOLUMES.bucket), 'minecraft:bucket'], 'dehydration:purified_water_bucket');

});
