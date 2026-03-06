// priority: 0

// Compatibility fixes for Advanced Generators
ServerEvents.recipes( event => {
    
    // New recipe for iron frames
    // (Existing conflicts with Aether ring)
    event.remove({ output: 'advgenerators:iron_frame' });
    event.shaped(
        Item.of( 'advgenerators:iron_frame', 3 ),
        [
            'NIN',
            'I I', 
            'NIN'
        ],
        {
            N: 'minecraft:iron_nugget',
            I: 'minecraft:iron_ingot'
        }
    )

});

