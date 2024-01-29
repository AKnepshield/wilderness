const { trails, rivers, wildlife } = require("./database")
const { totalTrailMiles, shortestTrail, longTrail, totalRiverMiles, shortestRiver, longestRiver, cheapestTrails, mostExpensiveTrails, trailDetails, riverDetails} = require("./bjornFunctions.js")
const { database } = require("./database")

// const { rivers } = require("./rivers.js")
// const { wildlife } = require("./bjornData")




console.log(`
B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
***********************************************************

###
______                                         #o###
/     /\\     (              ______            #####o###
  /     /  \\     )            /     /\\          #o#\\#|#/###
  /_____/----\\_    (          /     /  \\          ###\\|/#o#
  '     '          ).         /_____/----\\_         # }|{  #
    _ ___          O (:') o      '  '     '   '          }|{
      (@))_))        O ~/~~\\~ o                             }|{
        o     O                          ____/   \\____
        O
        `)
        
        
        console.log('***************************************************')
        console.log('*****              T R A I L S                *****')
        console.log('***************************************************')
        const trailTotal = totalTrailMiles(trails)
        console.log(`We service ${trailTotal} miles of wilderness trails across the US`)
        
        const shortTrail = shortestTrail(trails)
        console.log(`The shortest trail is ${shortTrail} kilometers`)
        
        const longest = longTrail(trails)
        console.log(`The longest trail is ${longest} kilometers`)
        
        const riversTotal = totalRiverMiles(rivers)
        console.log(`We offer expert guidance on ${riversTotal} kilometers of scenic rivers across the US`)
        
        const shortRiver = shortestRiver(rivers)
        console.log(`The shortest river tour is ${shortRiver} kilometers`)
        
        const longRiver = longestRiver(rivers)
        console.log(`The longest river tour is ${longRiver} kilometers`)
        
        console.log(`The least expensive trails are `)
        
        console.log(`The most expensive trails are`)
        
        
        console.log("\nTRAIL DETAILS:\n---------------------------------\n")
        
        trailDetails(trails)
        
        console.log("\nRIVER DETAILS:\n---------------------------------")
        
        riverDetails(rivers)
        
        module.exports = {
          totalTrailMiles, shortestTrail, longTrail, totalRiverMiles, shortestRiver, longestRiver, cheapestTrails, mostExpensiveTrails, trailDetails, riverDetails 
      }