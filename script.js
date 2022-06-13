function MyCustomFunction() {
    alert('Welcome to javascript!')
}

function MyAgeFunction() {
    let voteable;
    let age = Number(document.getElementById('age').value);
    if (isNaN(age)) {
        voteable = 'Input is not a number'
    }
    else {
        voteable = (age < 18) ? 'Too young' : 'Old enough'
    }
    document.getElementById('result').innerHTML = voteable + ' to vote'
}

// Ternary Operator
const age = 22;
const isAdult = (age <= 18) ? "To young" : "Old enough";
console.log(isAdult);

// string Operator
var myString1 = "I am learning Javascript"
var myString2 = " with solo learn"

console.log(myString1 + myString2);

var x = '50'
var y = '100'

console.log(x + y);

// if else Statement
var yourAge = 15;

if (yourAge >= 18) {
    console.log("Allowed");
}
else {
    console.log("Not Allowed");
}

// else if condition
var status = 'married';
var message;
if (status == 'married') {
    console.log("I have a wife and a quite boy her name sami");
}
else if (status == 'Unmarried') {
    console.log("I am a single. I need a girlFriend");
}
else {
    console.log("I need treatment");
}

// create array
const car = ['Nissan', 'BMW', 'Mercedis', 'Noah'];

// can add new element
car[0] = 'Toyota'
console.log(car);

// can add new element
car.push('Audi')
console.log(car);

// create object
const student = {
    id: 1,
    name: 'Mehedi',
    address: 'Battala'
}
console.log(student);
// can change
student.address = 'Rupatali,Battala'
console.log(student);

// can add new element
student.phone = ('01741445482')
console.log(student);
