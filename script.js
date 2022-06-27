"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);



function logger() {
    console.log('Mam na imię Bartosz');
}

// calling / running / invoking function\
logger();
logger();
logger();

function fruitPorcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitPorcessor(5, 0);
console.log(appleJuice);
console.log(fruitPorcessor(5, 0));

const appleOrangeJuice = fruitPorcessor(2, 4);
console.log(appleOrangeJuice);



function jd(a, b) {
    const jdk = a + b;
    console.log(jdk);
    return
}
const jdks = jd(3, 6);

//Function declatation
function calcAge1(birthYear) {

    return 2022 - birthYear;

}
const age1 = calcAge1(1991);

console.log(age1);


//Function expression
const calcAge2 = function (birthyear) {
    return 2022 - birthyear

}
const age2 = calcAge2(1991);

console.log(age1, age2)


function calcAge(birthYear) {

    return 2022 - birthYear;
}

const age = calcAge(1991);

console.log(age);

const calcAge1 = function(birthyear){

    return 2022 - birthyear;
}

const age1 = calcAge1(1999);

console.log(age1);


//Arrow function

const calcAge3 = birthyear => 2022 - birthyear;
const age3 = calcAge3(1999);
console.log(age3);


const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2022 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}


console.log(yearsUntilRetirement(1999, 'Bartosz'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitPorcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
fruitPorcessor(2, 3);

console.log(fruitPorcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthyear, firstName) {

    const age = calcAge(birthyear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} already retired`);
        return -1;
    }
}

// return `${firstName} retires in ${retirement} years`;
// }

console.log(yearsUntilRetirement(1991, `Bartosz`));
console.log(yearsUntilRetirement(1950, `Mike`));


//Arrays///////////////

const friend1 = `dwdw`;
const friend2 = `dwddwdww`;
const friend3 = `dwdfferw`;

const friends = [`Michael`, `Steven`, `Peter`];

console.log(friends);

const years = new Array(1991, 1984, 2004);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);



const firstName = `Bartosz;`
const bartosz = [firstName, `Kobrzeniecki`, 2022 - 1999, `student`, friends];

console.log(bartosz);


const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2019, 2004];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

const ages1 = [age1, age2, age3];

console.log(ages1);


const friends = [`Michael`, `Steven`, `Peter`];

//Add elements
friends.push(`Jay`);
console.log(friends);

//Remove elements
friends.unshift(`John`);

console.log(friends);


//Removes last element
friends.pop();
const popped = friends.pop()
console.log(popped);
console.log(friends);

//Removes first element

friends.shift(friends);
console.log(friends);


console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Peter')) {

    console.log(`You have a friends called Peter`);
}


// const bartosz = {

//     firstName: `Bartosz`,
//     lastName: `Kobrzeniecki`,
//     birthYear: 1999,
//     job: `student`,
//     friends: ['Jakub', 'Wojtuś', 'Maciej'],
//     hasDriverslicense: true,
// }
// console.log(bartosz);
// console.log(bartosz.lastName);
// console.log(bartosz['lastName']);

// const nameKey = 'Name';
// console.log(bartosz['first' + nameKey]);
// console.log(bartosz['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Bartosz? Choose between firstName, lastName, age, job or friends');


// if (bartosz[interestedIn]) {
//     console.log(bartosz[interestedIn]);
// } else {
//     console.log(`Enter a proper value`);
// }

// bartosz.location = `Poland`;
// console.log(bartosz);

//Challange
//Bartosz has 3 friends and his best friend is called Michael
// console.log(`${bartosz.firstName} has ${bartosz.friends.length} friends and his best friend is ${bartosz.friends[0]}`);



// const bartosz = {

//     firstName: `Bartosz`,
//     lastName: `Kobrzeniecki`,
//     birthYear: 1999,
//     job: `student`,
//     friends: ['Not', 'Found'],
// hasDriverslicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2022 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} ia a ${this.calcAge()} ${this.job} and has ${this.hasDriverslicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(bartosz.birthYear);
 

// for loop keeping running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(rep);
// }


const bartosz = [
    'Bartosz',
    'Kobrzeniecki',
    1999,
    'student'
    ['Maciek', 'Romek']
]


const types = [];


for (let i = 0; i < bartosz.length; i++) {
    console.log(bartosz[i], typeof bartosz[i]);

    //filling types array
    // types[i] = typeof bartosz[i];
    types.push(typeof bartosz[i]);
}

console.log(types);

const years = [1991, 2006, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);

}

console.log(ages);

// continue and break

console.log('Only strings')
for (let i = 0; i < years.length; i++) {
    if (typeof bartosz[i] === 'number') break;

    console.log(bartosz[i], typeof bartosz[i]);
}




const bartosz = [
    'Bartosz',
    'Kobrzeniecki',
    2022 - 1999,
    'student',
    ['Maciek', 'Romek']
];

//0, 1 , ..., 4
//4, 3, ..., 0

for (let i = bartosz.length - 1; i >= 0; i--) {

    console.log(bartosz[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

*/

//for loop keeping running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While: Lifting weights repetition ${rep}`);
//     rep++
// }
