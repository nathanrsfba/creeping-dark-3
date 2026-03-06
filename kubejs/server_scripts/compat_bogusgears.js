// priority: 0

// Remove extra, conflicting gear recipes
ServerEvents.recipes( event => {
    
    event.remove({ id: 'industrialforegoing:iron_gear' });
    event.remove({ id: 'industrialforegoing:gold_gear' });

});

