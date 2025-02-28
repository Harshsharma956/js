const name = "harsh"
const repoCount =50

//console.log(name +repoCount +" value");

console.log(`hello my name is ${name} and my repo count us ${repoCount}`);

const gamename = new String("Harsh sharma")
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf("s"));

const newstring =gamename.substring(0,4)  //0 to n-1 and negative value is ignored and it start with 0
console.log(newstring);

const anotherstring =gamename.slice(-4,0)
console.log(anotherstring);

const newstrings ="  harsh  "
console.log(newstrings);
console.log(newstrings.trim());

const url = "https://harsh.com/harsh%20sharma"
console.log(url.replace("%20","-"));

console.log(url.includes("sh"));

console.log(gamename.split(" "));
