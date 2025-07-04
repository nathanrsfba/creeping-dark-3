// priority: 0

// Make rubber and plastic and similar materials cross-compatible

ServerEvents.tags( 'item', event => {
    // All plastics
    [
        "thermal:cured_rubber",
        "#forge:plastic",
        "minecraft:dried_kelp"
    ].forEach( item => {
        event.add( 'kubejs:plastics', item );
    });

    // Plastic and rubber
    [
        "thermal:cured_rubber",
        "#forge:plastic"
    ].forEach( item => {
        event.add( 'kubejs:plastic_rubber', item );
    });

    // Plastic, rubber or leather
    [
        "#kubejs:plastics",
        "#forge:leather"
    ].forEach( item => {
        event.add( 'kubejs:plastic_rubber_leather', item );
    });

    // Cable covers
    [
        "#kubejs:plastic_rubber_leather",
        "#minecraft:wool"
    ].forEach( item => {
        event.add( 'kubejs:cable_covers', item );
    });

    // Items:
    // thermal:cured_rubber
    // #forge:plastic
    // #minecraft:wool
    // #forge:leather
    // minecraft:dried_kelp


});

ServerEvents.recipes( event => {
    // Any plastic for Create recipes
    event.replaceInput( { mod: 'create' }, 'minecraft:dried_kelp', 
        '#kubejs:plastics');
    
    // Rubber or plastic for Thermal uses
    event.replaceInput(
        {
            mod: 'thermal',
            not: {
                output: 'thermal_cured_rubber_block'
            }
        }, 
        'thermal:cured_rubber', '#kubejs:plastic_rubber' );

    // Any plastic or leather for IE conveyors
    event.replaceInput( {output: 'immersiveengineering:conveyor_basic'}, 
        '#forge:leather', '#kubejs:plastic_rubber_leather' );

    // Any cover for AE2 covered cable
    event.replaceInput( {output: 'ae2:fluix_covered_cable'},
        '#minecraft:wool', '#kubejs:cable_covers' );

    // Stuff we might want to make alternates for, if I'm not too lazy:
    // projectred_transmission:white_insulated_wire
    // elevatorid:elevator_white
});
