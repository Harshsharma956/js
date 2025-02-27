//premitive data types --call by value not call by referance
// 7 types : String , Number ,Boolean ,null ,undefined , symbol(help in making unique) ,BigInt


//Referance type (non premitive)
// 3 types : Array , Objects , Functions

//js is dynamically types
const Score =1000
const scoreval=100.234
console.log(typeof Score);
console.log(typeof scoreval);
const id=Symbol("123")
const newid=Symbol("123")
console.log(id === newid);

const heros =["saktiman" ,"hatim" ,"nagraja"]

let myobj={
    name:"Harsh",
    age:22
}

const muFunction = function(){
    console.log("hello");

}


console.log(myobj.age);
console.log(heros[0]);

const Bignumber =3904825400923423948n //in BigInt we add n after the number
console.log(typeof Bignumber);
console.log(typeof heros);

//Undefined --"undefined"    Null --"object"   Boolean---"boolean"   Number--- "number"    String -- "string"   Array --"object"
//function --function object 
