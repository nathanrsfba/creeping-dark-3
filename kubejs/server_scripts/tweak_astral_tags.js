// priority: 0

// Adds forge tags to Astral Dimension ores

ServerEvents.tags( 'block', event => {
    event.add( 'forge:ores', 'astral_dimension:astral_coal_ore' );
    event.add( 'forge:ores/coal', 'astral_dimension:astral_coal_ore' );
    event.add( 'forge:ores', 'astral_dimension:astral_gold_ore' );
    event.add( 'forge:ores/gold', 'astral_dimension:astral_gold_ore' );
    event.add( 'forge:ores', 'astral_dimension:astranite_ore' );
    event.add( 'forge:ores/astranite', 'astral_dimension:astranite_ore' );
    event.add( 'forge:ores', 'astral_dimension:void_ore' );
    event.add( 'forge:ores/void', 'astral_dimension:void_ore' );
});
