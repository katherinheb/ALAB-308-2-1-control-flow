let r = 5 // Radius in meters
let A = PI * ((r) **2) // Area formula
const PI = 3.1415 // PI
const MiniSpaceArea = 0.8
let Week1 = 20;

// Part 1 Growing Plants

console.log(A) // total area 78.5375
let maximumCapacity = Math.round(A/ MiniSpaceArea)
console.log(maximumCapacity) // Maximum capacity is 98

let week2 = Week1 * 2 // 40
let week3 = week2 * 2 // 80
console.log(week3)

let pruned = .80 * maximumCapacity //78.4
console.log(pruned)

let monitored = .50 * maximumCapacity //78.4
console.log(monitored)

// Conditionals 

if (week3 > pruned) {
    console.log('Prune the garden');
}
else if ( monitored < week2 && week2 < pruned){
    console.log('Garden is monitored');
}
else if (week2 < monitored) {
console.log('Plant more');
}

// Part 2: Thinking bigger

let str = 100;
let week10 = str * 2 **10 // 102, 400 of plants after week 10
console.log(week10)

let currentSpace = week10 * MiniSpaceArea // current space 81920
console.log(currentSpace)

let additionalSpace = week10 * MiniSpaceArea - A // 81841
console.log(additionalSpace)

let area = week10 * MiniSpaceArea // additional space 81,920 area
console.log(area)

//  Calculate the radius 

console.log(Math.sqrt(currentSpace/PI)) // Radius 161

// Part 3
