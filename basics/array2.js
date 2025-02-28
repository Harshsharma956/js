const marvel_heros=["hanuman", "lakshman","ram"]
const dc_heros= ["arjun", "bhism","bhim","karn","dronacharya"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//const allHeros = marvel_heros.concat(dc_heros)
const allHeros =[...marvel_heros ,...dc_heros]
console.log(allHeros);

const anotherarr =[1,3,4,6,[2,4,6],56,3,45,[23,45,[34,56,78]]]
console.log(Array.isArray(["Harsh","Subhankar"]));
console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name : "Harsh"}));

let score1 =234
let score2=212
let score3=987
console.log(Array.of(score1,score2,score3)); //not done throght from

