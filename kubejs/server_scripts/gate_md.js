// priority: 0

ServerEvents.recipes( event => {

    // Gate deep dark portal to tropics with arc furnace
    event.remove( {output: "mining_dimension:mining_dimension"} );
    event.custom({
        type: "immersiveengineering:arc_furnace",
        time: 400,
        energy: 204800,
        additives: [
            {item: "tropicraft:eudialyte_gem"},
            {item: "tropicraft:zircon_gem"},
            {item: "tropicraft:azurite_gem"},
            {item: "minecraft:quartz"}
        ],
        input: {item: "tropicraft:chunk"},
        results: [
            {item: "mining_dimension:mining_dimension"}
        ]
    });

});
