// priority: 0

// Compatibility between Pam and Tropics foods

/* For each group listed in groups (an array), create
 * a "forge:<group>" tag, and a "forge:<group>/<name>" tag.
 * Also, add "forge:<extra>" tags for any in extras
 */
function addTags( event, item, name, groups, extras )
{
    groups.forEach( group => {
        event.add( `forge:${group}`, item );
        event.add( `forge:${group}/${name}`, item );
    });
    if( extras === undefined )
    {
        // ignore
    }
    else
    {
        extras.forEach( extra => {
            event.add( `forge:${extra}`, item );
        });
    }
}

ServerEvents.tags( 'item', event => {
    // Tag TC pineapples similar to Pam's
    addTags( event, 'tropicraft:pineapple', 'pineapple',
        ['fruits', 'crops', 'paper_plants'],
        ['fruits/pineapple/whole'] );
    addTags( event, 'tropicraft:pineapple_cubes', 'pineapple',
        ['fruits', 'crops', 'paper_plants'] );

    // Tag "whole" pineapples
    event.add( 'forge:fruits/pineapple/whole',
        'pamhc2crops:pineappleitem' );

    addTags( event, 'tropicraft:coconut', 'coconut',
        ['crops', 'flour_plants'], ['crops/coconut/whole'] );
    addTags( event, 'tropicraft:coconut_chunk', 'coconut',
        ['crops', 'flour_plants'] );

    // Tag "whole" coconuts
    event.add( 'forge:crops/coconut/whole',
        'pamhc2trees:coconutitem' );

    // Tag various fruits
    addTags( event, 'tropicraft:lemon', 'lemon', 
        ['fruits', 'crops', 'citrusfruits', 
            'vinegar_ingredients'] );
    addTags( event, 'tropicraft:lime', 'lime', 
        ['fruits', 'crops', 'citrusfruits', 
            'vinegar_ingredients'] );
    addTags( event, 'tropicraft:orange', 'orange', 
        ['fruits', 'crops', 'vinegar_ingredients'] );
    addTags( event, 'tropicraft:grapefruit', 'grapefruit', 
        ['fruits', 'crops', 'citrusfruits', 
            'vinegar_ingredients'] );

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
