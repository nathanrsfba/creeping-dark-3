// priority: 0

// Add recipes for coal and charcoal
ServerEvents.recipes( event => {

    // Add pulverizer recipes
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": { "item": "minecraft:coal" },
        "result": [
            {
                "item": "mekanism:dust_coal"
            }
        ]
    });

    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": { "item": "minecraft:charcoal" },
        "result": [
            {
                "item": "mekanism:dust_charcoal"
            }
        ]
    });

    // Add Crushing Wheel recipe
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {"item": "minecraft:coal"}
        ],
        "processingTime": 250,
        "results": [
            {
                "item": "mekanism:dust_coal"
            }
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {"item": "minecraft:charcoal"}
        ],
        "processingTime": 250,
        "results": [
            {
                "item": "mekanism:dust_charcoal"
            }
        ]
    });
})
