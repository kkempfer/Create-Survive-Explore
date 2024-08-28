ServerEvents.tags('block', event => {

    // Prevent endermen from picking up blocks
    event.removeAll('minecraft:enderman_holdable');

});
