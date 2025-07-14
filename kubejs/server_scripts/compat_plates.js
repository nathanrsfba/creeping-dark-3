// priority: 0

// Better mod cross-compatibility for plate construction

ServerEvents.recipes( event => {
    function addPlate( material, output )
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

    addPlate( 'steel', 'immersiveengineering:plate_steel' );
    addPlate( 'aluminum', 'immersiveengineering:plate_aluminum' );
    addPlate( 'brass', 'create:brass_sheet' );
});

