// priority: 0

// Gate Tropicraft to Solara

ServerEvents.recipes( event => {

    // Alternate drink mixer recipe
    event.shaped(
        Item.of( 'tropicraft:drink_mixer' ),
        [
            'VVV',
            'VMV',
            'VVV'
        ],
        {
            V: 'gaiadimension:volcanic_rock',
            M: 'tropicraft:bamboo_mug'
        }
    );

    // Remove standard pina colada recipe
    event.remove({ output: 'tropicraft:pina_colada' });

});
