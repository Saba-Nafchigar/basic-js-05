let data = [1,2,23,"saba",true]
console.log(data);
// console.log(data.toString()); // tostring -> change array to string
let strdata=data.toString()
console.log(strdata);
console.log(typeof strdata);

let result = data.join("\n") // separator 
console.log(result); 

delete data[0] // delete 
console.log(data);