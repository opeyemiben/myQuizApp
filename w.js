const monthsOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  
  const month = 1;
  
  switch (month) {
    case 0:
      console.log(`${monthsOfYear[0]}.`);
      break;
    case 1:
      console.log(`${monthsOfYear[1]}.`);
      break;
    case 2:
      console.log(`${monthsOfYear[2]}.`);
      break;
    case 3:
      console.log(`${monthsOfYear[3]}.`);
      break;
    case 4:
      console.log(`${monthsOfYear[4]}.`);
      break;
    case 5:
      console.log(`${monthsOfYear[5]}.`);
      break;
    case 6:
      console.log(`${monthsOfYear[6]}.`);
      break;
    case 7:
      console.log(`${monthsOfYear[7]}.`);
      break;
    case 8:
      console.log(`${monthsOfYear[8]}.`);
      break;
    case 9:
      console.log(`${monthsOfYear[9]}.`);
      break;
    case 10:
      console.log(`${monthsOfYear[10]}.`);
      break;
    case 11:
      console.log(`${monthsOfYear[11]}.`);
      break;
    case 12:
      console.log(`${monthsOfYear[12]}.`);
      break;
    default:
      console.log("Invalid input. Please enter a number between 1 and 12.");
  }
  

  
  //write a forloop that will push items in 'num' array that that are greater than 4 into a new array
  const num = [2, 4, 6, 8, 10];
  const newArray = [];
  
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 4) {
      newArray.push(num[i]);
    }
  }
  
  console.log(newArray);  


  
  //write a for loop that will capitalize lang array
  let languages = ["java", "python", "javascript", "react"];
  let capitalizedLanguages = [];
  
  for (let i = 0; i < languages.length; i++) {
    let capitalizedLanguage = languages[i].toUpperCase();
    capitalizedLanguages.push(capitalizedLanguage);
  }
  
  console.log(capitalizedLanguages);


  myFunction();
  function myFunction(){
    console.log("opeyemi");
  }
 

//write a function sum using a for loop used in the last class
  function calculateSum(a, b) {
    let total = 0;
  
    for (let num = a; num <= b; num++) {
     if (total += num);
    }
  
    return total;
  }
  
  result = calculateSum(1, 9);
  console.log(result);
  
  

 //declare an object that has keys of string, number, array, boolean, function (with a for loop)
  let myObject = [];

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    myObject.stringKey = "This is a string";
  } else if (i == 2) {
    myObject.numberKey = 77;
  } else if (i == 3) {
    myObject.arrayKey = [1, 2, 3];
  } else if (i == 4) {
    myObject.booleanKey = true;
  } else if (i == 5) {
    myObject.functionKey = function () {
      return "This is a function";
    };
  }
}

console.log("String Key:", myObject.stringKey);
console.log("Number Key:", myObject.numberKey);
console.log("Array Key:", myObject.arrayKey);
console.log("Boolean Key:", myObject.booleanKey);
console.log("Function Key:", myObject.functionKey())
