let func = (x)=>{return x+5};
let func2 = (x,y,z)=>{return x*y*z};
let func3 = (a,b)=>{return b>a};
let func4 = (a,b)=>{return a % b};


func();
console.log(func(13));

func2();
console.log(func2(5,6,7));

func3();
console.log(func3(5,8));

func4();
console.log(func4(9,2));


let num =[3,6,10,11,14,15,21]
let odd =[];
num.filter((n) => {
    if(n % 2 == 1){
        odd.push(n);
    }
})
console.log(odd)

