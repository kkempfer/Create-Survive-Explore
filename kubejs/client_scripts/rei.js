// Hide multiple items from REI. This does not remove recipes.
REIEvents.hide('item', event => {
    let itemsToHide = [

        // Create Crafts & Additions

        // We use the zinc sheets from Create Deco
        'createaddition:zinc_sheet',

    ];

    itemsToHide.forEach(item => {
        event.hide(item);
    });
});
