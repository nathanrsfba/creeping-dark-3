// priority: 0

// Gate EIO machines to osmium, via machine frame
ServerEvents.recipes( event => {
    // Primitive alloy smelter
    event.remove({ output: 'enderio:primitive_alloy_smelter' });
    event.shaped(
        Item.of( 'enderio:primitive_alloy_smelter' ),
        [
            'FFF',
            'OGO',
            'DDD'
        ],
        {
            F: 'minecraft:furnace',
            G: 'enderio:grains_of_infinity',
            O: 'mekanism:ingot_osmium',
            D: 'minecraft:deepslate'
        }
    );

    // Void Chassis
    event.remove({ output: 'enderio:void_chassis' });
    event.shaped(
        Item.of( 'enderio:void_chassis' ),
        [
            'BIB',
            'OGO',
            'BIB'
        ],
        {
            B: 'minecraft:iron_bars',
            G: 'enderio:grains_of_infinity',
            O: 'mekanism:ingot_osmium',
            I: 'minecraft:iron_ingot'
        }
    );

    // Ensouled Chassis
    event.remove({ output: 'enderio:ensouled_chassis' });
    event.shaped(
        Item.of( 'enderio:ensouled_chassis' ),
        [
            'CSC',
            'OQO',
            'CSC'
        ],
        {
            C: 'enderio:soul_chain',
            S: 'enderio:soularium_ingot',
            O: 'mekanism:ingot_osmium',
            Q: 'minecraft:quartz'
        }
    );


});

