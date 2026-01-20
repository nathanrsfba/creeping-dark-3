// priority: 0

// Better mod cross-compatibility for plate construction

ServerEvents.recipes( event => {
    function addPlateThermal( material, output )
    {
        event.custom({
            type: "thermal:press",
            ingredient: {
                tag: `forge:ingots/${material}`
            },
            result: [
                {
                    item: output
                }
            ]
        });
    }

    function addPlateCreate( material, output )
    {
        event.custom({
            type: "create:pressing",
            ingredients: [
                {
                    tag: `forge:ingots/${material}`
                }
            ],
            results: [
                {
                    item: output
                }
            ]
        });
    }

    function addPlateIE( material, output )
    {
        event.custom({
            type: "immersiveengineering:metal_press",
            input: {
                tag: `forge:ingots/${material}`
            },
            mold : "immersiveengineering:mold_plate",
            result : {
                item: output
            },
            energy: 2400
        });
    }
    addPlateThermal( 'steel', 'immersiveengineering:plate_steel' );
    addPlateThermal( 'aluminum', 'immersiveengineering:plate_aluminum' );
    addPlateThermal( 'uranium', 'immersiveengineering:plate_uranium' );
    addPlateThermal( 'zinc', 'createaddition:zinc_sheet' );
    addPlateThermal( 'brass', 'create:brass_sheet' );

    ['tin', 'bronze', 'enderium', 'invar', 'lumium', 'netherite',
        'signalum'].forEach( material => {
            addPlateCreate( material, `thermal:${material}_plate` );
        });

    ['tin', 'enderium', 'lumium', 'netherite',
        'signalum'].forEach( material => {
            addPlateIE( material, `thermal:${material}_plate` );
        });
});

