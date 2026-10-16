"use strict";

alert("Hello, traveler welcome to the Floating Sky City");
const charName = prompt(`My friend what is your name?`,`Wanderer`);
const pet = prompt(`What type of pet do you have?`);
const superPower = prompt(`What is your superpower?`);
const trainingYearsText = prompt(`How many years have you been training?`);
const trainingYears = Number(trainingYearsText);
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);
const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Does ${charName} like fighting monsters?`);
alert(`Gathering magic for ${charName} almost ready!`);
alert(`GAME COMPLETE!
    ====================================
    Name: ${charName}
    Pet: ${pet}
    Superpower: ${superPower}
    Power Level: ${powerLevel}
    Monster fighter?: ${likesFighting ? "Yes" : "No"}`  ); 

alert(`The Floating sky city wouldnt be the same without ${charName} and their pet ${pet}
Not to mention their superpower ${superPower} and their power level of ${powerLevel}!
Thank you for visiting the Floating Sky city ${charName}!
====================================`);