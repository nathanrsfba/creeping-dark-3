// priority: 0

ServerEvents.recipes( event => {

    event.remove( {output: "solara_dimension:solarademension"} );
    event.shaped(
        Item.of( "solara_dimension:solarademension" ),
        [
            'MLM',
            'DSD',
            'MLM'
        ],
        {
            M: '#forge:cobblestone/mossy',
            L: '#minecraft:leaves',
            S: '#forge:rods/wooden',
            D: 'rftoolsdim:common_essence'
        }
    );
});
