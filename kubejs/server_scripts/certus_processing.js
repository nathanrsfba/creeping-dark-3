// priority: 0

ServerEvents.recipes( event => {

    // Add smelting recipe
    event.smelting( 'ae2:certus_quartz_crystal', 
        'kubejs:certus_ore' ).xp( 0.2 );

    // Add pulverizer recipe
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": { "tag": "forge:ores/certus_quartz" },
        "result": [
            {
                "item": "ae2:certus_quartz_crystal",
                "count": 4
            }
        ]
    });

})
