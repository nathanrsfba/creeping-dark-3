ServerEvents.recipes( event => {
    event.custom({
        type: "create:filling",
        ingredients: [
            { item: "create:blaze_cake_base" },
            { fluid: "createaddition:bioethanol", amount: 250 }
        ],
        results: [
            { item: "kubejs:pain_cake" }
        ]
    });

});

