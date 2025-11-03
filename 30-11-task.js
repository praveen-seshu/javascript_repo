var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c); 

//10 20 30


var x = 5;
var x = 10;
console.log(x); 

//10


let y = 5;
y = 10;
console.log(y);

//10

const z = 5; 
z = 10;
console.log(z);

//TypeError: Assignment to constant variable.

{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); 
console.log(b); 

//1
//ReferenceError: b is not defined


for (var i = 0; i < 3; i++) {}
console.log(i);

//3

for (let j = 0; j < 3; j++) {}
console.log(j);

//ReferenceError: j is not defined


console.log(a);
var a = 10;

//undefined


console.log(b);
let b = 10;
//ReferenceError: Cannot access 'b' before initialization

const person = { name: "Noor" };
person.name = "Jahan";
console.log(person.name);

//Jahan



console.log(5 + "5"); 
//55 


console.log("5" - 2);  
//3 


console.log(5 == "5");
console.log(5 === "5");
 // true
 //false


console.log(null == undefined);
console.log(null === undefined);

//true
//false



console.log(true && false);
console.log(true || false);
//false
//true


console.log(5 > 3 ? "Yes" : "No");
//yes


let a = null ?? "Default";
console.log(a);

//Dfault


let a = 0 ?? 5;
console.log(a);

//0


console.log(5 & 3);
//1

console.log(5 | 3);
//7

let x = 5;
x += 3;
console.log(x);
//8







