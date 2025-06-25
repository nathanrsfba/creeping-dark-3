// priority: 0

ServerEvents.recipes( event => {

    // Add smelting and blasting recipes
    event.smelting( 'ae2:certus_quartz_crystal', 
        'kubejs:certus_ore' ).xp( 0.2 );
    event.blasting( 'ae2:certus_quartz_crystal', 
        'kubejs:certus_ore' ).xp( 0.2 );

    // Add pulverizer recipe
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": { "tag": "forge:ores/certus_quartz" },
        "result": [
            {
                "item": "ae2:certus_quartz_crystal",
                "count": 2
            },
            {
                "item": "ae2:certus_quartz_dust",
                "chance": 0.1
            }
        ]
    });

    // Add Enrichment Chamber recipe
    event.custom({
        "type": "mekanism:enriching",
        "input": {"ingredient": {"tag": "forge:ores/certus_quartz" }},
        "output": {"count":4, "item":"ae2:certus_quartz_crystal"}
    });

    // Add Crushing Wheel recipe
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {"tag": "forge:ores/certus_quartz" }
        ],
        "processingTime": 250,
        "results": [
            {
                "count": 2,
                "item": "ae2:certus_quartz_crystal"
            },
            {
                "chance": 0.1,
                "item": "ae2:certus_quartz_dust",
            },
            {
                "chance": 0.2,
                "item": "create:experience_nugget"
            }
        ]
    });

    // Add SAG Mill Recipe
    event.custom({
        "type": "enderio:sag_milling",
        "energy": 2400,
        "input": {"tag": "forge:ores/certus_quartz"},
        "outputs": [
            {
                "chance": 1.0,
                "item": {
                    "count": 2,
                    "item": "ae2:certus_quartz_crystal"
                },
                "optional": false
            },
            {
                "chance": 0.1,
                "item": {
                    "item": "ae2:certus_quartz_dust",
                },
                "optional": false
            }
        ]
    });

    // Add IE Crusher Recipe
    event.custom({
        "energy" : 6000,
        "input": {"tag": "forge:ores/certus_quartz"},
        "result" : {
            "base_ingredient" : {
                "item": "ae2:certus_quartz_crystal"
            },
            "count" : 2
        },
        "secondaries" : [],
        "type" : "immersiveengineering:crusher"
    });
        

})
