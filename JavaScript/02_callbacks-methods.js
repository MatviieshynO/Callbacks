'use strict';

// 1. Examples asynchronous methods: setInterval, setTimeout, fetch, readFile, writeFile, FileReader in browser.
const numbers = [];

// Use setInterval
const addNumber = setInterval(() => {
    const number = Math.floor(Math.random() * 10);
    numbers.push(number);
    console.log(number);
    if (numbers.length > 10) clearInterval(addNumber);
}, 100);

// Use setTimeout
const outputNumbers = setTimeout(() => {
    console.log(numbers);
    clearTimeout(outputNumbers);
}, 2000);

//2. Examples synchronous methods: forEach, map, filter, reduce, readFileSync, writeFileSync
const persons = [
    { name: 'David', age: 22 },
    { name: 'Joch', age: 18 },
    { name: 'Jason', age: 40 },
];
// Sort people by age
persons.sort((person1, person2) => person1.age - person2.age);
console.log('Sort people by age', persons);

// Output the names of all persons
const pesonNames = persons.map((person) => person.name);
console.log('Output the names of all persons', pesonNames);

//Filter by age
const ageFilter = persons.filter((person) => person.age > 18);
console.log('Filter by age', ageFilter);

// But synchronous callbacks are blocking, so we can make them asynchronous
const games = [
    { game: 'Football' },
    { game: 'Basketball' },
    { game: 'Volleyball' },
];

const timer = setInterval(() => {
    const next = games.shift();
    console.log(`Next game ${next.game}`);
    if (games.length === 0) clearInterval(timer);
}, 10);
