// priority: 0

// Allow iron in cover recipe
ServerEvents.recipes( event => {
    event.shaped(
        Item.of( 'mekanismcovers:empty_cover', 4 ),
        [
            'iSi',
            'SGS',
            'iSi'
        ],
        {
            i: 'minecraft:iron_nugget',
            S: '#forge:dusts/wood',
            G: '#forge:glass'
        }
    );
});

