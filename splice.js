let data = [1,2,24,"saba","nafchi gar"]
console.log(data);
let deleteData = data.splice(0,1)// delete 1 from data
console.log(data); 
console.log(deleteData); // hold deleted element 
data.splice(data.length-1,1); // delete last element
console.log(data); 
data.splice(0,1,"hello") // replace 2 with hello ---- More than one can be added
console.log(data);
