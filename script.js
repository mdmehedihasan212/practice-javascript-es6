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
const isAdult = (age < 18) ? "To young" : "Old enough";
console.log(isAdult);