// console.log(`Hello, World!`); // This is how to add a comment in javascript. It will only appear in the console. you
//                               // you can use "", '', or  ``
// console.log("I like dogs");

// window.alert("this is an alert");

document.getElementById("initH1").textContent = "This was written in Index.js NOT the original html file";

//variables 

let x;
//let x; <- not allowed

x = 100;

// you have to initialize it before you assign it or simply let x = 100

let age = 25;
let price = 10.99;
let gpa = 2.1;
let fname = "dogman";
let lname = "man";
console.log(age);
console.log(price);

console.log(`you are ${age} years old`); //apparently you have to use backticks for this
console.log(typeof fname);

/**
 * variable types:
 *  const : -> cannot be changed after declaration
 *  use those for arrays and objects ?
 * only use let if cannot use const
 * only use var if tou must support old browsers
 */
//datatypes::
/*
 number (1,1.1 etc...)
 string (within "")

*/

let fullname = fname + ` ` + lname;
console.log(fullname);

//accepting user input


//window prompt (easy)
// let username = window.prompt("Please enter your username");
// console.log(username);

//hard way. creating a textbox

function usersubmit(un){
    un = document.getElementById("usernameinput").value;
    document.getElementById("Weclomemessage").textContent = `Welcome ${un}!`
    // console.log(usrname);
    return un
}

let usrname = "frog";
document.getElementById("usersubmit").onclick = usersubmit(usrname);

// you can also do the same thing as above like this: document.getElementById("usersubmit").onclick = function(){
//     document.getElementById("usernameinput").value;
//     document.getElementById("Weclomemessage").textContent = `Welcome ${un}!`
//     // console.log(usrname);
//     return un
// }
usrname = usersubmit(usrname);
console.log(usrname);

//type conversions:: 
// types in JS: strings, numbers, booleans


// let age1 = window.prompt("how old are you? ");
// age1 = Number(age1)
// age1 += 1;

let dogber = "doberman";
let dogber1 = "doberman";
let dogber2 = "doberman";


dogber = Number(dogber);
dogber1 = String(dogber1);
dogber2 = Boolean(dogber2); // will only return false on emprty strings.


// console.log(age1, typeof age1);
let type0 = typeof dogber;
let type1 = typeof dogber1;
let type2 = typeof dogber2;
console.log(`the type and value of dogber after typecasting is ${dogber} and its type is: ${type0}`);
console.log(`the type and value of dogber after typecasting is ${dogber1} and its type is: ${type1}`);
console.log(`the type and value of dogber after typecasting is ${dogber2} and its type is: ${type2}`);

//constants type : variables you acnnot change after you declare the variable.
// would be useful if value is static and fixed (ex: pi, D.O.B) its good practice to make keep constant varible capitalized



