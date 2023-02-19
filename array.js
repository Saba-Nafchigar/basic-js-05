let x = ["turaj",120,16.2,"armin",true,null,false]
// console.log(x);
// console.log(x[0]); //"turaj"
// console.log(x[1]); //120
// console.log(x[2]); //16.2
// console.log(x[3]); //"armin"
// console.log(x[4]); //true
// console.log(x[5]); //null
// console.log(x[6]); //false
// console.log(x[7]); //undeifined
// console.log(typeof x); // object
//  prototype : میشه وقتی از یک ارایه لاگ میگیرید ببینه چه متد ها و پراپرتی هایی داره یا ازش استفاده میکنه!

let myArray= ["saba" , "Nafchi gar" , 31 , true, 52.2]
console.log(myArray.length); //5
console.log(myArray[myArray.length-1]); //52.2
console.log(`my name is ${myArray[0]} and my lastname is ${myArray[1]}`); 
myArray.push(200,"alireza") // push : add element to the end of array
console.log(myArray);
myArray.pop() // pop : delete last element
console.log(myArray);
myArray.reverse() // reverse : Reverse the array
console.log(myArray);
myArray.shift() // shift : delete first element
console.log(myArray);
myArray.unshift("hello") // unshift : add an element to the start of array
console.log(myArray);

//add element to the start of array without using shift and unshift :
let test = ["a","b","c"]
test.reverse()
test.push("d")
test.reverse()
console.log(test);
console.log(Array.isArray(test));//check array or not -> bolean 