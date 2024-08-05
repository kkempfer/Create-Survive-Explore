ServerEvents.tags('item', event => {

    const specialFoodItems = [
        'corndelight:nachos',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:stuffed_pumpkin_block',
        'nethersdelight:stuffed_hoglin',
        'oceansdelight:guardian_soup'
    ];
    event.add('diet:special_food', specialFoodItems);

});
