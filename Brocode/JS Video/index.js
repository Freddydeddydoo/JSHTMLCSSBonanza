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
document.getElementById("usersubmit").onclick = function(){
    usrname = usersubmit(usrname);
    console.log(usrname);
}


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


// random number genorator

let randomNum = Math.random(); //to get a random non-integer  number Math.floor(Math.random())


// thing about equality 

// == <-- loose equality operator: used if it doesn't really matter what type the thing is  (ex 5 vs "5")

/**
 * 5 === 5  true
 * 5 == 5   true
 * 5 === "5"false
 * null === undefined false 
 * true === 1 fales (different types) 
 */


let v1;
let v2;
console.log(v1 === v2 + "should return true");

const myCheckbox = document.getElementById("simplecheckbox");
const vistaBtn = document.getElementById("vistaBtn");
const mastercardBtn = document.getElementById("MastercardBtn");
const paypalBtn = document.getElementById("PaypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("Subresult");
const payResult = document.getElementById("paymentResult");


mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `you are subscribed!`;
    }
    else {
        subResult.textContent = `you are not subscribed!`;
    }

    // if(vistaBtn.checked) {
    //     payResult.textContent = `you have selected Visa!`;
    // }
    // if(mastercardBtn.checked) {
    //     payResult.textContent = `you have selected Mastercard!`;
    // }
    // else if(paypalBtn.checked) {
    //     payResult.textContent = `you have selected Paypal!`;
    // }
    // else {
    //     payResult.textContent = `you have not selected a payment method!`;
    // }

    //with switch statements:
    switch(true) {
        case vistaBtn.checked:
            payResult.textContent = `you have selected Visa!`;
            break;
        case mastercardBtn.checked:
            payResult.textContent = `you have selected Mastercard!`;
            break;
        case paypalBtn.checked:
            payResult.textContent = `you have selected Paypal!`;
            break;
        default:
            payResult.textContent = `you have not selected a payment method!`;
            break;
    }

}


// switches:


/*
 * alternative to using if/else statements  
    breaks are imortant to use cause oterhwise it will continue to the next case

    Another way to use switch statements is as shown in the mySubmit.onclick function above
 */

let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}



// string methods;

let usrname1 = "frog";

// to get first letter of a string::

usrname1 = usrname1.charAt(0);
console.log(usrname1);

// .indexOf() method: returns the index of the first occurrence of a specified value in a string

let teststr = "  Hello, world!       ";

console.log(teststr.indexOf("world")); // returns 9 since "world" starts at inedex

// .length returns string size 

//trims whitespaces
console.log(teststr.trim());

//repeat() repeats string X Amount of times
console.log((teststr.trim().repeat(7)));

// startsWith() and endsWith() are boolean

// padStart(x,y) x = the thing you want to add to a string, y = how long you want yoour string to be

//string slicing::
 
const fuName = "Dog Man";

// let F_name = fuName.slice(0, 3); // (Iclusive, exclusive)
let F_name = fullname.slice(0, fuName.indexOf(" ")); //more general code 
let lastChar = fuName.slice(-1); // outputs final character 'n'

console.log(F_name);
console.log(lastChar);

//excersize :

//goal: to get the extention and username of an email 

const gmail = "dog@gmail.com";
let usrname2 = gmail.slice(0, gmail.indexOf("@"));
let extention = gmail.slice(gmail.indexOf("@" ) + 1, gmail.indexOf("."));
console.log(usrname2);
console.log(extention);


// formatting username from input thorugh chianing
//trim whitespace, make first letter uppercase and the rest lowercase

usrname = usrname.trim().charAt(0).toUpperCase() + usrname.trim().slice(1).toLowerCase(); // the string contatenation is something I wouldn't have thought of lmao

console.log(usrname);

// while loops work the same way as they do in other programming languages



