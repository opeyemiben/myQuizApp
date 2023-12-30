const oddNumbers = [];
for (let i = 1; i < 20; i+=2) {
    oddNumbers.push(i);
    
}
console.log(oddNumbers);


const student = {
    name: "John Doe",
    age: 30,
    gender: "male",
    nationality: "Korean",
    numberOfLanguages: 3,
    favoriteMusic: [
      "I shot the Sheriff",
      "Kokonbilo",
      "It’s a man’s world"
    ]
  };
  console.log("Name:" + student.name);
  console.log("Age:" + student.age);
  console.log("Gender:" + student.gender);
  console.log("Nationality:" + student.nationality);
  console.log("Number of Languages spoken:" + student.numberOfLanguages);
  console.log("First favorite music:" + student.favoriteMusic[0]);
  console.log("Second favorite music:" + student.favoriteMusic[1]);
  console.log("Third favorite music:" + student.favoriteMusic[2]);