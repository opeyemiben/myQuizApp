const primeNumbers = [];

for (let x = 1; x <= 50; x++) {
  let isPrime = true;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeNumbers.push(x);
  }
}

console.log(primeNumbers);

let c =['j','u','s'];
let b =['k','i','n'];
let q= c + " " + b;
console.log(q);


let arr1 = ['1','2','3'];
let arr2 = ['4','5','6'];
let newArray = arr1 + " " + arr2;
console.log(newArray);

let ewArray = arr1.concat(arr2);
console.log(ewArray);

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName); // This will output "John Doe"