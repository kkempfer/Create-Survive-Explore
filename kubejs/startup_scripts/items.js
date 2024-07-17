ItemEvents.modification(event => {

    // Diet

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