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

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name.

// 3.	How do you access the last element of any array?
// using the index arrayName[arrayName.length-1]

// 4.	How do you access the first element of any array?
// using the index arrayName[0]

// 5.	Create a new array called nameLengths.
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
