// priority: 0

ServerEvents.recipes( event => {

    event.remove( {output: "solara_dimension:solarademension"} );
    event.custom({
        type: "thermal:insolator",
        ingredient: {
            tag: "minecraft:leaves"
        },
        result: [
            {
                item: "solara_dimension:solarademension",
                chance: 1.0
            }
        ],
        energy_mod: 3.0,
        water_mod: 3.0
    });
});
