if (true){
    console.log("I'm truthful");
}

let temp = 20;

if (temp > 40){
    console.log("Today is a sunny day");
}
else {
    console.log("Today is a cool day");
}

let passMark = 60;
let score = 21;

if (score > passMark){
    console.log("Grade: A")
}
else if (score < passMark && score >= 50){
    console.log("Grade: B")
}
else if (score < passMark && score >= 40){
    console.log("Grade: C")
}
else{
    console.log("Failed")
}


let pass = 50;
let mark = [41,42,43,44,45,46,47,48,49];
let result = 170;
let maxScore = 100;

if (mark.includes(result) &&  result < maxScore){
    console.log("Grade: B")
}
else if (result > pass && result < maxScore){
console.log("Grade: A")
}
else if (result > maxScore){
    console.log(`No Grade! ${result} is greater than the ${maxScore}`)
}
else {
    console.log("Failed")
}