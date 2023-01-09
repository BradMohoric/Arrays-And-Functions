//array called ages
let ages = [3,9,23,64,2,8,28,93]

//Programmatically subract the value of the first element in the array from the value of the last element of the array
//not allowed to use numbers to reference the elements

console.log(ages[ages.length-1] - ages[0]);

//add a new age to the array

ages.push(32);

//repeat the subraction of first element from last element to ensure it is dynamic.
//32 minus 3 will be 29 in the console

console.log(ages[ages.length-1] - ages[0]);

//use a loop to iterate through the array and calculate the average age

var sum = 0;

for (var number of ages) {
    sum += number;
}

average = sum / ages.length;

console.log(average);



//create an array called names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//use a loop to iterate throught the array and calculate the average number of letters per name
var namesSum = names[0].length + names[1].length + names[2].length + names[3].length + names[4].length + names[5].length;

for(number of names) {
    average = namesSum / names.length;
}

console.log(average);


//use a loop to iterate through the array again and concatenate all the names together, seperated by spaces

let namesConcat = [];
let seperator = ' ';

for (let i = 0; i < names.length; i++) {
    namesConcat += names[i];
    if (i < names.length - 1) namesConcat += seperator;
}

console.log(namesConcat);


//How do you access the last element of an array?
// ---- array[0]
//how do you access the first element of an array?
// ---- array.length - 1


//create a new array called nameLengths

let nameLengths = [];

//write a loop to iterate over the names array and add the length of each name to the nameLengths array

for(var i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
    
}

console.log(nameLengths);


//write a loop to iterate over the nameLengths array and calculate the sum of all the elements

var lengthsSum = 0;

for(var i = 0; i < nameLengths.length; i++) {
    var nameTest = nameLengths[i];
    lengthsSum += nameTest;
}

console.log(lengthsSum);


//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times

function repeat(word, n) {
    if (n < 0) 
        return '';
    if(n === 1)
        return word;
    else
        return word + repeat(word, n - 1);        
    
}
    
console.log(repeat('hello', 6));


//Write a function that takes two parameters, firstName and lastName, and returns a full name.

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(fullName('Brad','Mohoric'));


//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numArray = [7, 15, 6, 22, 9, 50];
let arraySum = 0;

function lessThan(a){
    for(var i = 0, sum = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return 100 <= sum;

    }

    console.log(lessThan(numArray));


    //Write a function that takes an array of numbers and returns the average of all the elements in the array.
var sum = 0;

function findAverage(a) {
for (var number of numArray) {
    sum += number;
    
}
average = sum / numArray.length;
return average;

}

console.log(findAverage(numArray));


//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let firstArray = [6, 15, 24, 9, 86];
let secondArray = [5, 22, 6, 8, 3];
let sum1 = 0;
let sum2 = 0;

function compareArray(a, b){
for (var number of firstArray){
    sum1 += number;
}
average1 = sum1 / firstArray.length;

for (var number of secondArray){
    sum2 += number;
}
average2 = sum2 / secondArray.length;

return average1 > average2;
}

console.log(compareArray(firstArray, secondArray));


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true + moneyInPocket >= 10.50){
        return true   
    }

    else {
        return false
    }
    
}

console.log(willBuyDrink(true, 50.55));


//create my own function that asks if I've worked out today and responds with encouraging words

function didWorkout(a) {
    if (a == true){
        return 'Great job';
    }

    else {
        return 'Get to it, lazy!';
    }

}

console.log(didWorkout(false));