//function declaration
function myFunction(){
    console.log("Lecture on JavaScript Functions");
}


function myFunction2(x,y){
    return x % y;
}

function myFunction3(){
    return "Lecture on JavaScript Functions";
}

myFunction();

console.log(myFunction2(9,6));

console.log(myFunction3());

//function expression

let x = function(a,b){
    return a > b;
}

console.log(x(2,3));

//self-invoking functions

(function(){
    console.log("I'm a self-invoking function")
})();

(function(){
    console.log(3+4)
})();

//function as values and expression
function myFunction4(p,q,r){
    return p*q-(r);
}

let val = myFunction4(7,10,4); //as values
console.log(val);

let val2 = myFunction4(4,5,-10);
val2 = val2
console.log(val2);

let val3 = myFunction4(7,8,-10) - 31; //as expression
console.log(val3);

//function default parameters

function myFunction5(x,y=5.5){
    return x + y;
}

let c = myFunction5(15);
console.log(c);

let d = myFunction5(15,23);
console.log(d);

function decideToMultiply(a, multiply=false){
    if (multiply == true){
        return a*10;
    }
    else {
        return a;
    }
}

 let result = decideToMultiply(21);
 console.log(result);

 let result2 = decideToMultiply(21,true);
 console.log(result2);

 //rest parameters
 function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
    }

let p = sum(5, 7, 14, 35, 29, 10, 21);

console.log(p);

//write a function sum using a for loop used in the last class


//functions as objects
const person = {
    firstName: 'Mary',
    lastName: 'Bright',
    age: 40,
    married: true,
    cars: ['volvo','opel'],
    fullname: function(){
        return this.firstName + " " + this.lastName
    }
};

console.log(person.firstName);
console.log(person.fullname());
console.log(person.cars);
console.log(person.cars[1]);

//declare an object that has keys of string, number, array, boolean, function (with a for loop)


    