const RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
const TreePlacer = Java.loadClass('com.outrightwings.growth.TreePlacer');

// Function to play a sound track all players can hear
function playSound(id, category, entity, volume, pitch) {
    entity.level.runCommandSilent(`playsound ${id} ${category} @a ${entity.x} ${entity.y} ${entity.z} ${volume} ${pitch}`);
};

// Register the function to handle the tree growth event
BlockEvents.rightClicked(event => {
    const block = event.block;
    const item = event.item;

    if (block.hasTag('minecraft:saplings') && item.id == 'create:tree_fertilizer') {
        // Play bone meal usage sound
        playSound('minecraft:item.bone_meal.use', 'block', block, 1.0, 1.0);

        // Try to grow a tree using TreePlacer
        const level = event.level;
        const chunkGenerator = level.getChunkSource().getGenerator();
        const pos = block.pos;
        const state = block.getBlockState();
        const random = RandomSource.create();

        const errorCode = TreePlacer.growTree(level, chunkGenerator, pos, state, random, false);

        // If the tree growth was successful, perform the following actions 
        if (errorCode !== -1) {
            // Consume one 'create:tree_fertilizer' item
            item.count--;
            // Prevent Create from triggering its own tree growth mechanics
            event.cancel();
        }
    }

});