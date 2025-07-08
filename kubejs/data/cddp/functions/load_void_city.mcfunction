# Place the void city dimension
execute in cddp:voidcity run place template cddp:void_city 0 128 0
# Kill any shulkers or other entities
execute in cddp:voidcity run kill @e[type=!minecraft:player,x=24,y=128,z=24,distance=..48]
# Clean any dropped items
execute in cddp:voidcity run kill @e[type=!minecraft:player,x=24,y=128,z=24,distance=..48]
