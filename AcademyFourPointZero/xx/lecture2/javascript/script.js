var x, y, z; //declaring a variable

x = 4;  y = 6; //assigning a value

z = x + y; //summing up x + y to assign a value for x

console.log("The value of z is: ", z);

let digit;

const you = 10;

console.log("Value of digit: ",digit);

/* OPERATORS */
//arithmetic
let v = 15, w = 12;
sum = v + w;
sub = v - w;
multiply = v * w;
div = v / w;

sum += v; //short-hand 
sum -= v;

console.log("sum: ", sum);
console.log("sub: ", sub);
console.log("multiply: ", multiply);
console.log("division: ", div);

//comparison
let check = 12 > 6;
console.log(check);

console.log(12 == 13);

//moduli
let mod = 11 % 3;
console.log("Mod: ", mod);

//logical 
let a = 5, b = 7;

if (a > b){
    console.log("I'm greater than b");
}
else {
    console.log("I'm less than b");
}

if (mod == 1){
    console.log("Yes, I'm equal");
}
else {
    console.log("No, I'm equal");
}

//string Addition
let greeting1 = "good";
let greeting2 = "morning";

let greeting = greeting1 + " " + greeting2; //concatenation
console.log("Greet me: ", greeting);
