//array.join
let fruits = ['orange','pear','mango'];
let fruitStr = fruits.join("*");
console.log(fruitStr);

//pop() and push()

//console.log(fruits.pop());
//console.log(fruits);

fruits.push("papaya","banana");
console.log(fruits);

//shift() and unshift()
let fruit = fruits.shift();
console.log(fruits.shift())
console.log(fruit);
console.log(fruits);

let vegetables = ["spinach", "carrots", "lettuce"];
let leafyVegetable = vegetables.unshift("garbage", "okro");
console.log(vegetables);
console.log(leafyVegetable);

//concat()
let a = [1,2,3]
let b = [3,4,5,6]
let f = a.concat(b);
console.log(f);

let c = [7,8,9,10]
let d = f.concat(c);
console.log(d);

let k = a.concat(c,b)
console.log(k);

//splice()
let lang = [];
lang.push("Java","Python","JavaScript","React");
//console.log(lang);
console.log(lang.indexOf("Python"));

/*lang.splice(n,m); //remove m-elements starting from n-index */
lang.splice(1,3);
console.log(lang);

let lang2 = ["Vue","Angular","Rust","Go"]; //using splice to add elements in between
let deletedLang2 = lang2.splice(1,3,"Swift","Kotlin");
console.log(lang2);
console.log(deletedLang2);

//slice()
let cars = ["volvo","opel","ford","benz","toyota"];
let slicedCars = cars.slice(1,4); //gives a sub-array

console.log(cars);
console.log(slicedCars);

