"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Your question here-- see questions below}

    -Variable name personalized to question (no answer1)
   - Correct answer:
   - How I'll validate and check the answer :

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?

7. Final feedback logic (if / else if / else):

// Question 1
    fivePlusThree
    8
    if (fivePlusThree == 8) {
        alert("Correct!");
        Score++;
// Question 2
    tenMinusFour
    6
    if (tenMinusFour == 6) {
        alert("Correct!");
        Score++;
// Question 3
    fourTimesThree
    12
    if (fourTimesThree == 12) {
        alert("Correct!");
        Score++;
// Question 4
    twentyByFive
    4
    if (twentyByFive == 4) {
        alert("Correct!");
        Score++;
// Question 5
personalquestion
blue
if (personalquestion.trim().toLowerCase() == "blue") {
    alert("Correct!");
    Score++;
}
// Calculate percentage using math

// Final feedback using if / else if / else

If statement that uses an alert statement about their score

// Final summary alert

Your five questions

Use these questions in the order shown:

Question

Math problem

Correct answer

1

5 + 3

8

2

10 − 4

6

3

4 × 3

12

4

20 ÷ 5

4

5

A question about you

Your personalized answer
*/




let Score = 0;

const fivePlusThree = prompt("What is 5 + 3?");
if (fivePlusThree == 8) {
    alert("Correct!");
    Score++;
} else {
    alert("Incorrect. The correct answer is 8.");
}

const tenMinusFour = prompt("What is 10 - 4?");
if (tenMinusFour == 6) {
    alert("Correct!");
    Score++;
} else {
    alert("Incorrect. The correct answer is 6.");
}

const fourTimesThree = prompt("What is 4 × 3?");
if (fourTimesThree == 12) {
    alert("Correct!");
    Score++;
} else {
    alert("Incorrect. The correct answer is 12.");
}


const twentyByFive = prompt("What is 20 ÷ 5?");
if (twentyByFive == 4) {
    alert("Correct!");
    Score++;
} else {
    alert("Incorrect. The correct answer is 4.");
}

const personalQuestion = prompt("What is my favorite color?");
if (personalQuestion.trim().toLowerCase() == "blue") {
    alert("Correct!");
    Score++;
} else {
    alert("Incorrect. The correct answer is blue.");
}
Score = (Score / 5) * 100;

alert("Your score is: " + Score + "%");

if (Score == 0) {
    alert("Score of 0 out of 5! Better luck next time!");
}

if (Score == 60) {
    console.log("So close yet so far away!");
}

if (Score == 100) {
    alert("Score of 5 out of 5! Great job!");
}