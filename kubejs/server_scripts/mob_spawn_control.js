/**
 * Mob Spawn Control Script highly inspired by Liopyu
 * GitHub Repo: https://github.com/liopyu/spawn_control
 */

// Define constants
const equipmentSlots = [
    'head', 'chest', 'legs', 'feet', 'offhand', 'mainhand'
];
const configPath = 'kubejs/config/mob_spawn_control.json';

// Read the configuration from the file with error handling
let config = {};
try {
    config = JsonIO.read(configPath);
} catch (error) {
    console.error(`Failed to read config file at ${configPath}:`, error);
}

// Extract data from the configuration
const mobTypeConditions = config.spawnConditions || {};

// Function to clear all equipment slots
function clearEquipment(entity) {
    equipmentSlots.forEach(slot => {
        entity.setItemSlot(slot, '');
    });
};

// Function to equip items based on chances specified in the configuration file
function equipItems(entity, equipment) {
    Object.entries(equipment).forEach(([slot, entries]) => {
        // Generate random value to determine which item to choose
        const randomValue = Math.random();
        let cumulativeChance = 0;

        // Iterate through options to find the chosen one
        for (const [item, chance] of entries) {
            cumulativeChance += chance;
            if (randomValue <= cumulativeChance) {
                entity.setItemSlot(slot, item);
                // Stop iterating once an option is chosen
                break;
            }
        }
    });
};

// Register the function to handle the mob spawning event
EntityEvents.spawned(event => {
    // Define constants
    const entity = event.entity;

    // Skip the logic if the entity is a player or is not living
    if (entity.isPlayer() || !entity.isLiving()) {
        return;
    }

    // Get this mob-specific conditions
    const mobConditions = mobTypeConditions[entity.type];

    // Return early if mobConditions are not defined for this mob
    if (!mobConditions) {
        return;
    }

    // Manage adults and babies
    let equipment = null
    if (mobConditions.adult && !entity.isBaby()) {
        equipment = mobConditions.adult.equipment
    } else if (mobConditions.baby && entity.isBaby()) {
        equipment = mobConditions.baby.equipment
    } else {
        equipment = mobConditions.equipment
    }

    // Equip items if specified
    if (equipment) {
        clearEquipment(entity)
        equipItems(entity, mobConditions.equipment);
    }

});