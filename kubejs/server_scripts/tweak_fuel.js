// priority: 0

ServerEvents.tags( 'fluid', event => {
    // Tag Ad Astra oil as forge crude
    event.add( 'forge:crude_oil', 'ad_astra:oil' );

    // Create a tag for Thermal fuel, as the IE generator
    // seems to only accept inputs as tags
    event.add( 'thermal:refined_fuel', 'thermal:refined_fuel' );
});

ServerEvents.recipes( event => {
    // Thermal Expansion tar as a syngas source
    event.custom({
        type: "advgenerators:carbon_source",
        items: [{ "item": "thermal:tar" }],
        carbonValue: 512
    });

    // Thermal Expansion rosin as a syngas source
    event.custom({
        type: "advgenerators:carbon_source",
        items: [{ "item": "thermal:rosin" }],
        carbonValue: 512
    });

    function addAGFuel( fluid, energy )
    {
        event.custom({
            type: "advgenerators:liquid_fuel",
            fuel: { "fluid": fluid },
            fePerMb: energy
        });
    }

    // Ads some liquid fuels to Advanced Generators
    // TODO: See how these compare to the dynamos
    addAGFuel( 'thermal:tree_oil', 100 );
    addAGFuel( 'immersiveengineering:creosote', 20 ); 
    addAGFuel( 'thermal:creosote', 20 ); 
    addAGFuel( 'immersiveengineering:ethanol', 512 ); 
    addAGFuel( 'immersiveengineering:biodiesel', 1024 ); 

    // Thermal fuel in the IE refinery
    event.custom({
        type: "immersiveengineering:refinery",
        catalyst: { tag: "forge:dusts/saltpeter" },
        energy: 6000,
        input0: { tag: "forge:crude_oil", amount: 100 },
        result: { fluid: "thermal:refined_fuel", amount: 185 }
    });

    // Thermal fuel in the IE generator 
    event.custom({
        type: "immersiveengineering:generator_fuel",
        burnTime: 250,
        fluidTag: "thermal:refined_fuel"
    });
});

