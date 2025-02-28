//array is a data structure used to store a collection of elements which is of verious data type (number, string) .
//it is hetrogenious collection of data types
const myarray =new Array(1,2,3,4,5)
console.log(myarray);
console.log(typeof myarray);

const myarray1 =new Array(1,2,3,4,5,"Harsh")
console.log(myarray1);
console.log(typeof myarray1);

myarray.push(6)
myarray.push(7)
myarray.pop()
myarray.unshift(9)//insert the element at the starting index
myarray.shift() //pop the element from starting
console.log(myarray);
console.log(myarray.includes(9));
console.log(myarray.indexOf(9));
console.log(myarray.indexOf(3));

const nwearr =myarray.join(" -->")
console.log(nwearr);

//slice vs splice

console.log("A ",myarray)
const myn1= myarray.slice(1,3)
console.log(myn1);
console.log("B" ,myarray);

const myn2 =myarray.splice(1,3) //splice is include the right extrem value also and it also also cut the splice part from main array
console.log(myn2);
console.log("C", myarray);



