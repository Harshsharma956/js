const mysym = Symbol("sare jaha se accha")
const jsuser ={
    name :"Harsh",
    [mysym] : "hinduasta hamara hamara",
    "full name" : "Harsh sharma",
    age : 18,
    location : "Bambhai",
    email : "harsh@gmil.com",
    isLogedin : false,
    lastLogindays : ["Monday" ,"saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
//Object.freeze(jsuser)
//jsuser.name = "satyam"
console.log(jsuser[mysym]);

console.log(jsuser);




