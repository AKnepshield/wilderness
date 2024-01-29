// const { trails } = require("./trails.js")

// const trails = [{
//     'id': 1,
//     'price': '$$',
//     'latitude': 8.99214,
//     'longitude': 105.19602,
//     'plantHighlight': 'Rock Melicgrass',
//     'trailName': 'Faraway Glades Trail',
//     'length': 10.46
// }, {
//     'id': 2,
//     'price': '$$$',
//     'latitude': -12.52614,
//     'longitude': -76.5452105,
//     'plantHighlight': 'Kane County Twinpod',
//     'trailName': 'Moose End Trail',
//     'length': 6.88
// }, {
//     'id': 3,
//     'price': '$$',
//     'latitude': 2.013818,
//     'longitude': -75.9373449,
//     'plantHighlight': 'Pinewoods Horkelia',
//     'trailName': 'Fallen Soldier\'s Route',
//     'length': 49.2
// }, {
//     'id': 4,
//     'price': '$$$$',
//     'latitude': -24.1959097,
//     'longitude': -65.2939441,
//     'plantHighlight': 'Rosette Lichen',
//     'trailName': 'Endless Tunnels Path',
//     'length': 20.51
// }, {
//     'id': 5,
//     'price': '$$$',
//     'latitude': 28.362805,
//     'longitude': 118.400294,
//     'plantHighlight': 'Spiny Hopsage',
//     'trailName': 'Trotter\'s Trail',
//     'length': 6.6
// }, {
//     'id': 6,
//     'price': '$$$$$',
//     'latitude': 39.4763332,
//     'longitude': -8.6457376,
//     'plantHighlight': 'Cantua',
//     'trailName': 'Stepping Stone Route',
//     'length': 37.68
// }, {
//     'id': 7,
//     'price': '$',
//     'latitude': 30.233873,
//     'longitude': 119.724733,
//     'plantHighlight': 'Largeflower Skeletonplant',
//     'trailName': 'Rocky Bottom Way',
//     'length': 36.64
// }, {
//     'id': 8,
//     'price': '$$',
//     'latitude': 38.5796262,
//     'longitude': 141.2777515,
//     'plantHighlight': 'Rosette Lichen',
//     'trailName': 'The Giant\'s Leg',
//     'length': 30.37
// }, {
//     'id': 9,
//     'price': '$$',
//     ' latitude': 38.26667,
//     ' longitude': 21.83333,
//     'plantHighlight': 'Glory Of Texas',
//     'trailName': 'Bear Cub Walk',
//     'length': 11.26
// }, {
//     'id': 10,
//     'price': '$$$$',
//     'latitude': 13.1317415,
//     'longitude': 121.435112,
//     'plantHighlight': 'Spreading Wallflower',
//     'trailName': 'Canyon Pass',
//     'length': 37.49
// }, {
//     'id': 11,
//     'price': '$$$',
//     'latitude': 32.123667,
//     'longitude': 35.018481,
//     'plantHighlight': 'Western Sandcherry',
//     'trailName': 'Wolf Howl Trail',
//     'length': 46.4
// }, {
//     'id': 12,
//     'price': '$$',
//     'latitude': 19.238934,
//     'longitude': 108.957345,
//     'plantHighlight': 'Tecate Tarweed',
//     'trailName': 'Topsy Turvy',
//     'length': 43.84
// }, {
//     'id': 13,
//     'price': '$',
//     'latitude': 48.8282801,
//     'longi1ude': 2.7011678,
//     'plantHighlight': 'Texas Geranium',
//     'trailName': 'Turkey Ambush Trail',
//     'length': 31.28
// }, {
//     'id': 14,
//     'price': '$',
//     'latitede': 59.0883359,
//     'longitude': 17.5704656,
//     'plantHighlight': 'Point Reyes Ceanothus',
//     'trailName': 'Sunshine Straights',
//     'length': 23.57
// }, {
//     'id': 15,
//     'price': '$$',
//     'latitude': 13.91581,
//     'longitude': 44.32414,
//     'plantHighlight': 'Awl-leaf Wattle',
//     'trailName': 'Treetops Trail',
//     'length': 13.47
// }, {
//     'id': 16,
//     'price': '$$$$$',
//     'latitude': -8.269535,
//     'longitude': 122.8950755,
//     'plantHighlight': 'Honeysuckle',
//     'trailName': 'The Honeysuckle Corridor',
//     'length': 28.39
// }, {
//     'id': 17,
//     'price': '$$$',
//     'latitude': -6.4534018,
//     'longitude': -39.6105142,
//     'plantHighlight': 'Coolwort',
//     'trailName': 'Bumbling Badger Way',
//     'length': 15.54
// }, {
//     'id': 18,
//     'price': '$',
//     'latitude': -23.0743544,
//     'longitude': -44.9561012,
//     'plantHighlight': 'Common Leopardbane',
//     'trailName': 'Snowshoe Pass',
//     'length': 24.62
// }, {
//     'id': 19,
//     'price': '$$',
//     'latitude': 56.3815664,
//     'longitude': 13.9920633,
//     'plantHighlight': 'Climbing Fern',
//     'trailName': 'Endless Fir Trail',
//     'length': 41.07
// }, {
//     'id': 20,
//     'price': '$$$$',
//     'latitude': 38.491235,
//     'longitude': 111.033425,
//     'plantHighlight': 'Distinct Map Lichen',
//     'trailName': 'Danterre Route',
//     'length': 32.2
// }, {
//     'id': 21,
//     'price': '$$',
//     'latitude': 43.7979981,
//     'longitude': 25.9053209,
//     'plantHighlight': 'Hooker\'s Milkwort',
//     'trailName': 'Walnut Walkway',
//     'length': 22.0
// }, {
//     'id': 22,
//     'price': '$$$',
//     'latitude': 10.527572,
//     'longitude': 125.16258,
//     'plantHighlight': 'Mariposa Lily',
//     'trailName': 'White Forest Trail',
//     'length': 44.14
// }, {
//     'id': 23,
//     'price': '$$$$',
//     'latitude': 44.6500125,
//     'longitude': 17.9557436,
//     'plantHighlight': 'Russethair Saxifrage',
//     'trailName': 'Piney Way',
//     'length': 18.36
// }, {
//     'id': 24,
//     'price': '$$$$',
//     'latitude': 49.988725,
//     'longitude': 20.7001411,
//     'plantHighlights': 'Jepson\'s Linanthus',
//     'trailName': 'Brudersons Parkway',
//     'length': 39.46
// }, {
//     'id': 25,
//     'price': '$$$',
//     'latitude': 36.040428,
//     'longitude': 50.5446161,
//     'plantHighlight': 'Tushar Range Beardtongue',
//     'trailName': 'Pinecone Pass',
//     'length': 45.54
// }]

// const totalTrailMiles = (trails) => {
//     let total = 0
//     for (const trail of trails) {
//         total += trail.length
//     }

//     return total
// }

// // Get the shortest of all trails
// const shortestTrail = (trails) => {
//     let shortest = 100
//     for (const trail of trails) {
//         if(trail.length < shortest) {
//             shortest = trail.length
//         }
//     }

//     return shortest
// }

// // Get the longest of all trails
// const longTrail = (allTrails) => {
//     let longest = 0
//     for (const trail of allTrails) {
//         if(trail.length > longest) {
//             longest = trail.length
//         }
//     }

//     return longest
// }

// const cheapestTrails = (cheapTrailsArray) => {
    
//     var cheapTrailList = []

//     for (const trails of cheapTrailsArray) {

//         if (trails.price.length < 2) {
//             cheapTrailList.push(trails.trailName)
//         }
//     }

//     return cheapTrailList
// }

// const mostExpensiveTrails = (trailsArray) => {

//     var expensiveTrailList = []

//     for (const trail of trailsArray) {

//         if (trail.price.length >= 4) {
//             expensiveTrailList.push(trail.trailName)
//         }
//     }
//     return expensiveTrailList
// }

// // iterate each trail
// // gather details
// // output trail name with details
// // for loop
// // console log relevant details


// const trailDetails = (trailsArray) => {

//     for (const trail of trailsArray) {
    
//         console.log(`${trail.trailName} starts at [${trail.latitude} ${trail.longitude}] and is ${trail.length} miles long.  The highlighted plant for the trip is ${trail.plantHighlight}\n`)


//     }

// }

// module.exports = {
//     totalTrailMiles, shortestTrail, longTrail, cheapestTrails, mostExpensiveTrails, trailDetails
// }