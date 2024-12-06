// Recursion: occurs when a function invokes itself. These functions need a base case in order to exit the function when a certain condition has been met


// Add up all the numbers between 1 and num
const recursiveAddition = (num) => {
    // base case
    if(num === 1){
        return 1
    }
    return num + recursiveAddition(num - 1)
}

console.log(recursiveAddition(3))