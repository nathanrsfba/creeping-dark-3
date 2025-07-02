// priority: 0

ServerEvents.recipes( event => {
    // Gate Undergarden to EnderIO
    event.remove({ output: 'undergarden:catalyst' });
    event.shaped(
        Item.of( 'undergarden:catalyst' ),
        [
            'GIG',
            'IZI',
            'GIG'
        ],
        {
            I: 'minecraft:iron_ingot',
            G: 'minecraft:gold_ingot',
            Z: 'enderio:frank_n_zombie'
        }
    );
});

