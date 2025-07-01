// priority: 0

// Gate Tropicraft to Solara

ServerEvents.recipes( event => {

    // Alternate drink mixer recipe
    // event.remove({ output: 'thermal:machine_frame' });
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

});
