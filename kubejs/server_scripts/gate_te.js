// priority: 0

ServerEvents.recipes( event => {

    // Gate TE machines to certus, via machine frame
    event.remove({ output: 'thermal:machine_frame' });
    event.shaped(
        Item.of( 'thermal:machine_frame' ),
        [
            'IGI',
            'CTC',
            'IGI'
        ],
        {
            I: '#forge:ingots/iron',
            G: '#forge:glass',
            T: '#forge:gears/tin',
            C: '#forge:gems/certus_quartz'
        }
    );

});
