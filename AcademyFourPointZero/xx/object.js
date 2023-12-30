const employee = {
    name: "Bright",
    age: 20,
    cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
    ]
}
console.log(employee.cars[2].models[1]);
console.log(employee.cars[1].models[1]);
console.log(employee.cars[0].models[1]);
console.log(employee.cars[2].name);