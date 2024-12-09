// Recursion: occurs when a function invokes itself. These functions need a base case in order to exit the function when a certain condition has been met

// A recursive has two CASES:
// - 1: a base case that will allow us to exit the function and return a value
// - 2: a recursive case that invokes the function itself with arguments that move us closer to the base case


// Add up all the numbers between 1 and num
// const recursiveAddition = (num) => {
//     // base case
//     if(num === 1){
//         return 1
//     }
//     return num + recursiveAddition(num - 1)
// }

// console.log(recursiveAddition(3))


// Write a recursive that takes in a number and adds up all of the numbers between 1 and the number provided
const recursiveAddition = (num) => {
    // negative number guard clause
    if(num < 0){
        return "Number must be positive"
    }
    // base case
    if(num === 1 || num === 0){
        return num
    }
    // recursive case
    return num + recursiveAddition(num - 1)
}

// recursiveAddition(0) => 0
// recursiveAddition(1) => 1
// recursiveAddition(2) => 2 + recursiveAddition(1) => 2 + 1 => 3
// recursiveAddition(3) => 3 + recursiveAddition(2) => 3 + 3 => 6
// recursiveAddition(4) => 4 + recursiveAddition(3) => 4 + 6 => 10
// recursiveAddition(5) => 5 + recursiveAddition(4) => 5 + 10 => 15

// 5 + 4 + 3 + 2 + 1
// console.log(recursiveAddition(5))

