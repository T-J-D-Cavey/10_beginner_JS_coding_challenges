// Code below is for a coding challenge and not for this project. Should be deleled when used

// Coding challenge one: Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. 
// Consider using loops that would allow you to type the fewest characters/commands. 
// While you could simply print the even numbers, 
// get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

// Solution:
const array = [234, 5, 3, 78, 4, -20, 235, 25234562, 78, 1341235, 235235, 235, 23452523, 235, 235 ]

const newArray = array.filter(element => element % 2 == 0).filter(n => n < 10 && n > 0);

console.log(newArray);



// Coding challenge two: Print a table containing multiplication tables
// Let's start with the tables that many of us had to memorize in school. 
// Can you print a table that contains all the answers to the multiplication tables from 1 through 10?
// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

// Solution:
const timesTableMaker = (startingNumber, tableSize, endingNumber) => {
  let n = startingNumber;
  let i;
  let j;
  for (i = startingNumber; i < endingNumber+1; i++) {
    for (j = 1; j < tableSize+1; j++)
      console.log(`${n} x ${j} = ${n * j}`)
      n++
  };
}

timesTableMaker(2, 20, 10);

// Coding challenge three:// 3. Create a length converter function
// // Creating a function is a skill that'll be useful in many settings, 
// // and as you progress, you'll be working on much more complicated functions than this one. 
// // But a function that converts units of measure can be pretty handy in multiple professions and industries.
// // Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.

// Solution:

const kmIntoMiles = (distanceInKm) => {
    const result = distanceInKm * 0.621371;
    return result.toFixed(2)
};
console.log(kmIntoMiles(6));

// Coding challenge four: Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. 
// Have one array with negative and positive numbers and another with integers and decimals.
// You could also try using arrays of different lengths.

// Solution:

const array1 = [234, 5, 3, 78, 4, -20, 235, 25234562, 78, 1341235, 235235, 235, 23452523, 235, 235 ];

const array2 = [234, 5, 3, 78.5, 4, -20, 235.2, 25234562, 78, 1341235, 235235, 0.1235, 23452523, 235, 235 ];

const array3 = [1, 0.1, -1, 1.9];

const arrayAdder = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue)
};

console.log(arrayAdder(array3))

// Coding challenge five: Create a function that reverses an array
// This challenge is particularly helpful if you're planning to become a Data Scientist. 
// Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you're working with large databases.
// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

// // Solution:

const array4 = [1, 2, 3, 4, 1234, 353, 34, 22, 5, 2323, 3, 22, 2, 123131, 13, 1231, 131, 1313, 13, 131];

const arrayReverser = (array) => {
    const arrayLength = array.length;
    const reversedArray = [];
    let i;
    for (i = arrayLength; i > 0; i--) {
        reversedArray.push(array[i-1]);
    };
    return reversedArray;
};

console.log(arrayReverser(array4))

// Conding challenge six: Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. 
// Try one with all integers, another with negative numbers, and another with decimals.

// Solution:

const array5 = [234, 5, 3, 78, 4, -20, 235, 25234562, 78, 1341235, 235235, 235, 23452523, 235, 235 ]

const array6 = [234, 5, 3, 78.5, 4, -20, 235.2, 25234562, 78, 1341235, 235235, 0.1235, 23452523, 235, 235 ]

const array7 = [1, 0.1, -1, 1.9]

const arraySorter = (array) => {
    return array.sort((a, b) => a - b);
};

console.log(arraySorter(array7))

// Coding challenge severn: Create a function that filters out negative numbers
// In this challenge, you'll have a function that takes an array as an input and returns an array. 
// But if all goes according to plan, it'll remove the negative numbers. 
// This is another example of a task that'll be useful when combing through data and looking for clever ways to eliminate "bad data."

// Solution:

const array8 = [234, 5, 3, 78, 4, -20, 235, 25234562, 78, 1341235, 235235, 235, 23452523, 235, 235 ]

const array9 = [234, 5, 3, 78.5, 4, -20, 235.2, 25234562, 78, 1341235, 235235, 0.1235, 23452523, 235, 235 ]

const array10 = [-1, -0.1, -1, 1.9]

const noNegativeNumbers = (array) => {
    return array.filter(n => n > 0);
};

console.log(noNegativeNumbers(array10))

// Coding challenge eight: Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. 
// This function will take in a string and then return it with all spaces removed. 
// Think about if you were tasked with cleaning up customer data at your job. 
// You could scale this function to clean up specific fields of data, such as zip codes.

// Solution:

const wordTwo = '  s p a c i n g   '

const removeWhiteSpace = word => {
    const newWord = word.replaceAll(' ', '');
    return newWord
};

console.log(removeWhiteSpace(wordTwo));

// Coding challenge nine: Return a Boolean if a number is divisible by 10
// Here, you'll create a function that'll give you a "true" or "false" Boolean as its output. 
// The inputted number should only return a "true" if it's divisible by 10. 
// Otherwise, your program should return a "false" answer.

// Solution:

const number = 20
const anotherNumber = 21

const divisibleByChecker = (number, numberToDivideBy = 10) => {
   return number % numberToDivideBy === 0 ? true : false;
}

console.log(divisibleByChecker(8, 4))

// Coding challenge ten: Return the number of vowels in a string
// Create a function that'll return an integer of the number of vowels found in a string. 
// This is a great way to practice determining the features of a dataset. 
// If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. 
// If you feel like an extra challenge, consider returning the number of characters.

// Solution:

const word = 'Hello world!';

const vowelCounter = (word) => {
    const regex = /[aeiou]/gi;
    const vowelCount = word.match(regex).length;
    const wordLength = word.length;
    return `This word has ${vowelCount} vowles out of ${wordLength} characters. The word is ${vowelCount / wordLength} % vowles!` 
    
};

console.log(vowelCounter(word));