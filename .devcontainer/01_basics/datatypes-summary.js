//primitive 
//types= string,number,boolean,null ,undefined,symbol,bigint.
const score=100
const scorevalue=100.3

const isloggedin=false
const outsidetemp=null
let username;

const id =symbol('123')
const anotherid= symbol('123')
//both id and anotherid will have different datatype


//reference (non primitive)

// array,object,functions

const heros =[a,b,c]

let myobj ={
    name:"hitesh"
    age: 22,
}


const myfunction= function(){
    console.log("hello world");
}




///////// memory heap and stack

let myyoutubename= "hiteshchoudhary.com"

let anothername = myyoutubename
anothername= "chaiaurcode"

console.log(myyoutubename);
console.log(anothername);


let userone={
    email: "user@google.com"
    upi: "user@ybl"
}

let usertwo=userone

usertwo.email= "hitesh@google.com"

console.log(userone.email);
console.log(usertwo.email);