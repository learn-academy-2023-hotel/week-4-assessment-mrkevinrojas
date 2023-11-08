// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeShuffle", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const expected1 = ["yellow", "blue", "pink", "green"]
    ////////////////////////////////////////////////////////////////////////////////////////
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    it('removes the first item from the array and shuffles the remaining items', () => {
        expect(removeShuffle(colors1)).toEqual(expect.arrayContaining(expected1))
        expect(removeShuffle(colors2)).toEqual(expect.arrayContaining(expected2))
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// input: array 
// output: return an array with the first element removed as well as shuffling the updated array
const removeShuffle = (array) => { // create a functions to pass an array
    //use.shift() to remove the first element from the array
    array.shift() 
    // create an empty array to store numbers
    let arrayPos = [] 
    // create an empty array to store the new order of the original array
    let newArr = []

    // create a while loop to store numbers to arrayPos
    while (arrayPos.length < array.length){
        // generate a new number from 0 to the length of the array
        let randomNum = Math.floor((Math.random() * array.length) )
        // if the number is not in arrayPos
        if (!arrayPos.includes(randomNum)){
            //then store that number into arrayPos
            arrayPos.push(randomNum)
        }
    }
    //create a loop to change the position of the elements from the original array
    for (let i=0; i < arrayPos.length; i++){
        //push the element into the new array
      newArr.push(array[arrayPos[i]])
    }
    // return newArr to which it was called
    return(newArr)
  }

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("result", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31

    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect(result(votes1)).toEqual(11)
        expect(result(votes2)).toEqual(-31)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
//input: object
//output: the result from the key-value pair
//create a function that takes in a object in its parameter
const result = (object) => {
    //access it's keys by calling on the object's values using dot notation
    return object.upVotes - object.downVotes
}