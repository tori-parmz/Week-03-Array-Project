// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log("Ages Array")
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log("Last minus first", ages[ages.length-1]-ages[0]);

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(49);

console.log(ages);

console.log("New Push: Last Minus First", ages[ages.length-1]-ages[0]);

// 1c.	Use a loop to iterate through the array and calculate the average age.

let sum = 0;

for (let i = 0; i < ages.length; i++){
    console.log(ages[i]);
    sum += ages[i];
}

console.log("Ages Average", sum / ages.length);



// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

console.log("Names Array", names);

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.

let sum1 = 0;

for(let i = 0; i < names.length; i++){
    console.log(names[i].length);
    sum1 += names[i].length;

}

console.log("Average of Letters: ", sum1/names.length);


// 5.	Create a new array called nameLengths.
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function printWords(word, n) {
    let string = "";
    for(let i = 0; i < n; i++){
        string += word;
    }
    console.log(string);
}

var word = "Howdy";
var n = 5;

printWords(word,n);



//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.

function printFullName(firstName, lastName) {

   return firstName + " " + lastName;

}

var firstName = "Nathan"
var lastName = "Fielder"

console.log(printFullName(firstName, lastName));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isItHundred(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
if (sum > 100) {
    return true
}

}

console.log("Is Ages over a hundred?", isItHundred(ages));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getAverage(arr) {
    let sum = arr.reduce(function(previous, current)
{
    return(previous+current);
})
    console.log("Get Average Function", sum/arr.length);
}

getAverage(ages);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverages(arr1, arr2) {
    console.log("Arrays", arr1, arr2);
    let sum2 = 0;

for (let i = 0; i < arr1.length; i++){
    sum2 += arr1[i];
    console.log("Sum", typeof sum2, "index", i, "element", arr1[i]);
}

    let sum3 = 0;

for (let i = 0; i < arr2.length; i++){
    sum3 += arr2[i]; //adding elements of array
    console.log("Sum", typeof sum3, "index", i, "element", arr2[i]);
}
    console.log("Average One", sum2/arr1.length);
    console.log("Average Two", sum3/arr2.length);
    console.log("Avg 1 greater than Avg 2?", sum2/arr1.length > sum3/arr2.length);
    
    }


let ticketsSoldOnTour = [43, 30, 70, 68, 25, 20, 40];

let ticketsSoldLocal = [90, 39, 62, 21, 48]

console.log("Comparing Average Tickets Sold");

console.log("Tickets Sold on Tour", ticketsSoldOnTour);

console.log("Tickets Sold Local", ticketsSoldLocal);

compareAverages(ticketsSoldOnTour, ticketsSoldLocal);

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

console.log("Buy Drinks?", willBuyDrink(isHotOutside, moneyInPocket));

//13. I have 5 different cats who each had a different number of kittens.
// I want to create an array called kittens that lists the number of kittens in each litter
// I want to create a function that subtracts the number of kittens adopted from a specified litter and removes an index once it reaches 0 kittens.

let kittens = [3, 9, 5, 6, 4];

function howManyKittens(arr, a, b){
    arr.splice(b,0, arr[b] - a);
    if (arr[b] - a <= 0) {
        arr.splice(catIndex, 1);
       console.log ("Empty litter!");
    } else {
        console.log("Kitties avail!");
    }
}
let kittensAdopted = 2;
let catIndex = 2;

howManyKittens(kittens, kittensAdopted, catIndex);

//React - errors can cause cascade of other errors (focus on top-most error)

