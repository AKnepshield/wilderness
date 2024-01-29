const { database } = require("./database.js")

// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of database.trails) {
        total += database.trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (trails) => {
    let shortest = 100
    for (const trail of database.trails) {
        if(trail.length < shortest) {
            shortest = databasetrail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of database.allTrails) {
        if(trail.length > longest) {
            longest = databasetrail.length
        }
    }

    return longest
}

const totalRiverMiles = (rivers) => {
    let totalRiver = 0
    for (const river of database.rivers) {
        totalRiver += database.river.length
    }

    return totalRiver
}

const shortestRiver = (riverArray) => {
    let shortest = 100
    for (const river of database.riverArray) {
        if(river.length < shortest) {
            shortest = database.river.length
        }
    }

    return shortest
}

const longestRiver = (allRivers) => {
    let longest = 0
    for (const river of database.allRivers) {
        if(river.length > longest) {
            longest = database.river.length
        }
    }

    return longest
}

const cheapestTrails = (cheapTrailsArray) => {
    
    var cheapTrailList = []

    for (const trails of cheapTrailsArray) {

        if (database.trails.price.length < 2) {
            cheapTrailList.push(database.trails.trailName)
        }
    }

    return cheapTrailList
}

const mostExpensiveTrails = (trailsArray) => {

    var expensiveTrailList = []

    for (const trail of trailsArray) {

        if (trail.price.length >= 4) {
            expensiveTrailList.push(database.trail.trailName)
        }
    }
    return expensiveTrailList
}

// iterate each trail
// gather details
// output trail name with details
// for loop
// console log relevant details


const trailDetails = (trailsArray) => {

    for (const trail of trailsArray) {
    
        console.log(`${database.trail.trailName} starts at [${database.trail.latitude} ${database.trail.longitude}] and is ${database.trail.length} miles long.  The highlighted plant for the trip is ${database.trail.plantHighlight}\n`)


    }

}

const riverDetails = (riversArray) => {
    for (const river of riversArray) {
        console.log(`${database.river.river} starts at [${database.river.latitude} ${database.river.longitude}] and is ${database.river.length} miles long.  The unique fish for the trip is ${database.river.uniqueFish}\n`)
    }
}

const cheapTrails = cheapestTrails(trails)

                for (const item of cheapTrails) {
                    
                    console.log(`\t${item}`)
                
                }

                const expensiveTrails = mostExpensiveTrails(trails)

                for (const expensiveItem of expensiveTrails) {

                    console.log(`\t${expensiveItem}`)
                }

module.exports = {
    totalTrailMiles, shortestTrail, longTrail, totalRiverMiles, shortestRiver, longestRiver, cheapestTrails, mostExpensiveTrails, trailDetails, riverDetails, 
}