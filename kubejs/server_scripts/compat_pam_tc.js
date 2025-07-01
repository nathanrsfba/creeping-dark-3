// priority: 0

// Compatibility between Pam and Tropics foods

// Pineapple item tags
const pineappleTags = [
    'forge:fruits/pineapple',
    'forge:paper_plants',
    'forge:fruits',
    'forge:crops',
    'forge:paper_plants/pineapple',
    'forge:crops/pineapple'
];

// Coconut item tags
const coconutTags = [
    'forge:crops/coconut',
    'forge:crops',
    'forge:flour_plants/coconut',
    'forge:flour_plants'
];

ServerEvents.tags( 'item', event => {
    // Tag TC pineapples similar to Pam's
    pineappleTags.forEach( tag => {
        event.add( tag, 'tropicraft:pineapple' );
        event.add( tag, 'tropicraft:pineapple_cubes' );
    });

    // Tag "whole" pineapples
    event.add( 'forge:fruits/pineapple/whole',
        'tropicraft:pineapple' );
    event.add( 'forge:fruits/pineapple/whole',
        'pamhc2crops:pineappleitem' );

    // Tag TC coconuts similar to Pam's
    pineappleTags.forEach( tag => {
        event.add( tag, 'tropicraft:coconut' );
        event.add( tag, 'tropicraft:coconut_chunk' );
    });

    // Tag "whole" coconuts
    event.add( 'forge:crops/coconut/whole',
        'tropicraft:coconut' );
    event.add( 'forge:crops/coconut/whole',
        'pamhc2trees:coconutitem' );
});

ServerEvents.recipes( event => {
    // Cut whole pineapple into cubes
    event.shapeless(
        Item.of( 'tropicraft:pineapple_cubes' ),
        [
            '#forge:tool_cuttingboard',
            '#forge:fruits/pineapple/whole'
        ]
    );
    // Cut whole coconuts into chunks
    event.shapeless(
        Item.of( 'tropicraft:coconut_chunk' ),
        [
            '#forge:tool_cuttingboard',
            '#forge:crops/coconut/whole'
        ]
    );
});
