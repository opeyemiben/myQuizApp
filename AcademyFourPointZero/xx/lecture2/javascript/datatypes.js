let x = "I'm a string";

// String Templates
let myString = `Good morning Nigeria!` //back-tics syntax

let price = 200;
let quantity = 7;

let cost = `The total cost of goods is ${price * quantity}`; //template literals
console.log(cost);

//string Length
let word = `I'm a citizen of Nigeria!`;
word.length
console.log(word.length);

//String Escape
let express = "The boy is a \"funny\" dude";
let express2 = 'Academy 4.0 students are doing \'great\'';
console.log(express);
console.log(express2);

/*String Methods*/
//String.slice()
let cars = "Volvo, Mercedez, Audi, Ford";
//strings are immutable and starts at position '0'
let slicedCars = cars.slice(7,15);
console.log(cars);
console.log(slicedCars);

//exercise => slice out Volvo, Ford from Cars
let negativeSlicedCars = cars.slice(-10);
console.log(negativeSlicedCars);

//String.substring()

let languages = "English, Yoruba, Igbo, Hausa, French";
let subLanguagues = languages.substring(0, 7);
console.log(subLanguagues);

//exercise => take out Igbo, French from languages

//String.replace()

let text = "I Like Javascript, Bola also like JavaScript and JavaScript is a difficult"; //case-sensitive

let c = text.replace('JavaScript', '').replace('JavaScript', '');
console.log(c);

//String.toUpperCase and String.toLowerCase()

console.log(languages.toLowerCase());
console.log(languages.toUpperCase());

//String.concat()

let a = 'good'; let b = 'morning';
let concat = a.concat('-', b);
console.log(concat);

//String.trim()

let greet = `  Good Morning Students!  `
console.log(greet.trim());
console.log(greet);

//exercise ==> checkout trimStart() and trimEnd()

//String.split()
let languages2 = "English Yoruba Igbo Hausa French";

let split = languages.split(','); //convert a string to an array
console.log(split);

let split2 = languages2.split(' ');
console.log(split2);

//typeOf
console.log(typeof(split));
console.log(typeof(languages));

//indexOf() and lastIndexOf()
let myCountry = 'nigeria';
console.log(myCountry.indexOf('i'));
console.log(myCountry.lastIndexOf('i'));

console.log(myCountry.indexOf('u')); //returns -1 since it can't be found in the string


/* Number */

//toString()
let num = 20;
let numString = num.toString();

console.log(typeof(num));
console.log(typeof(numString));

//toFixed()
let k = 32.446;
let kFixed = k.toFixed(1);
console.log(kFixed);

//convert string to number
console.log(Number('10'));
console.log(typeof(Number('10')));

console.log(Number(numString));

let kk = '10.354'
let kkfloat = parseFloat(kk); //gives a decimal conversion
console.log(typeof(kkfloat));

let kkint = parseInt(kk); //gives an integer conversion
console.log(kkint)
let str = 'good'
console.log(Number(str));

let strr = '30 good'
console.log(Number(strr));

//Boolean
let n;

if (2 > 3){
n = true;
}
else{
    n = false;
}

console.log(n);

