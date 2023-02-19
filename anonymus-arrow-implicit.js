//anonymus functions
const fact = function(x){
    let mul = 1
    for(let i = 1 ; i <= x ; i++){
        mul *= i
    }
    console.log(mul);
}
fact(5);//120


//arrow function
const prime =(y)=>{
    let flag=0
    for(let i = 1 ; i<=y ; i++){
        if(y%i===0){
            flag ++
        }
    }
    if(flag === 2){
        console.log("prime!");
    }else{
        console.log("not prime!");
    }
}
prime(52);//not prime!

//implicit --> just one line code
const returnZ=z=>z
console.log(returnZ(100));//100