// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log(ages[ages.length-1]-ages[0]);

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(49);

console.log(ages);

console.log(ages[ages.length-1]-ages[0]);

// 1c.	Use a loop to iterate through the array and calculate the average age.

let sum = 0;

for (let i = 0; i < ages.length; i++){
    console.log(ages[i]);
    sum += ages[i];
}
console.log(sum / ages.length);



// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
/*
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log(names);
*/

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.

// 5.	Create a new array called nameLengths.
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function printWords(word, n) {
    for (let i = 0; i < n; i++){
        console.log(word);
    }
}

var word = "Howdy";
var n = 5;

console.log(printWords(word,n));


//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.

function printFullName(firstName, lastName) {

   console.log(firstName, lastName);

}

var firstName = "Nathan"
var lastName = "Fielder"

console.log(printFullName(firstName, lastName));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isItHundred(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        sum += arr[i];
    }
if (sum === 100) {
    return true
}

}

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getAverage(arr) {
    let sum = arr.reduce(function(previous, current)
{
    return(previous+current);
})
    console.log(sum/arr.length);
}

getAverage(ages);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
/*
function compareAverages(arr1, arr2) {
    let sum1 = arr1.reduce(function(previous, current){
        return (previous+current);
    })
    let sum2 = arr2.reduce(function(previous, current){
        return (previous+current);
    })
    let mean1 = sum1/arr1.length;
    let mean2 = sum2/arr2.length;
    if mean1 > mean2 {
        return true
    }
}
*/
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true){
        if(moneyInPocket >= 10.50){
            return true
        }
    }
}

var isHotOutside = true;
var moneyInPocket = 20.67;

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13. I have 5 different cats who each had a different amount of kittens.
// The number of kittens each cat had will be values in an array.
// I want to keep track of how many kittens are left of each litter after each kitten gets adopted.