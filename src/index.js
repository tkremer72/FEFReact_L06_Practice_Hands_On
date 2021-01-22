import { render } from 'react-dom';
import React from 'react';


var filtered = automobile => {
      return automobile.name === 'Ford'
};

const arr = [
      {name: 'Chevy', Count: 2},
      {name: 'Ford', Count: 5},
      {name: 'Acura', Count: 3},
      {name: 'Honda', Count: 16},
].filter(filtered);
console.log("Filter Results:", arr);


const array= [
      "Bill", "Joe", "Emily", "Andrea"
];

const newStudents = [
      "Andrew", "Tasha", "Carol", "George"
];

const newArray = [
      ...array, ...newStudents
];

console.log(newArray);

render(<h1>{newArray + ""}</h1>, document.getElementById('root'));