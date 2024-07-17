ItemEvents.modification(event => {

    // Diet

    // Add nutritious values to apple cider to make it contribute to its dietary food group
    event.modify('farmersdelight:apple_cider', item => {
        item.foodProperties = food => {
            food.hunger(1.0)
            food.saturation(1.2)
        };
    });

    // Add nutritious values to hot cocoa to make it contribute to its dietary food group
    event.modify('farmersdelight:hot_cocoa', item => {
        item.foodProperties = food => {
            food.hunger(1.0)
            food.saturation(1.2)
        };
    });

    // Add nutritious values to melon juice to make it contribute to its dietary food group
    event.modify('farmersdelight:melon_juice', item => {
        item.foodProperties = food => {
            food.hunger(1.0)
            food.saturation(1.2)
        };
    });

    // Add nutritious values to milk to make it contribute to its dietary food group
    event.modify('minecraft:milk_bucket', item => {
        item.foodProperties = food => {
            food.hunger(3.0)
            food.saturation(0.6)
        };
    });
    event.modify('farmersdelight:milk_bottle', item => {
        item.foodProperties = food => {
            food.hunger(1.0)
            food.saturation(0.2)
        };
    });

});