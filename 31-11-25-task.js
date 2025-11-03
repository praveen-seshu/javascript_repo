function test() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
test();

//output
//20
//20

function example() {
  let y = 5;
  if (true) {
    let y = 10;
    console.log(y);
  }
  console.log(y);
}
example();
//output
//10
//5

function run() {
  if (true) {
    var a = 100;
    let b = 200;
    const c = 300;
  }
  console.log(a);
  console.log(typeof b);
}
run();

//output
//100
//undefined

var x = 1;
function outer() {
  console.log(x);
  var x = 2;
}
outer();

//output
//undefined

let x = 10;
{
  let x = 20;
  {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}
console.log(x);

output
30
20
10

{
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a);
console.log(typeof b);
console.log(typeof c);

output
1
undefined
undefined

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
console.log(typeof j);

output
3
undefined

function demo() {
  console.log(a);
  var a = 50;
  console.log(a);
}
demo();

output
undefined
50

function blockTest() {
  const value = 5;
  if (true) {
    const value = 10;
    console.log(value);
  }
  console.log(value);
}
blockTest();

output
10
5


function testScope() {
  if (true) {
    var x = "var inside";
    let y = "let inside";
  }
  console.log(x);
  console.log(typeof y);
}
testScope();
output
var inside
undefined

var marks1 = Number(prompt("enter marks:"))

if (marks1 > 80){
    console.log("Grade A")
}

else if (marks1 >= 60 && marks1 <= 80){
    console.log("Grade B")
}


else if (marks1 <= 40 &&  marks1 >=60) {
    console.log("Grade C")
}

else{
    console.log("fail")
}

let dayNumber = prompt("enetr number:")
switch (dayNumber){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("Saturday")
        break;

}


operation=3
a=prompt("enter a:")
b=prompt("enter b:")
switch(operation){
    case 1 || '+':
        console.log(a+b)
        break;
    case 2 || '-':
        console.log(a-b)
        break;
    case 3 || '*':
        console.log(a*b)
        break;
    case 4 || '/':
        console.log(a/b)
        break;
}


age=prompt("enter age:")
if(age < 13){
    console.log("child")
}
else if (age >=13 || age <=19 ){
    console.log("Teen")
}
else if (age>=29 || age <=50 ){
    console.log("Adult")
}
else if (age > 60 ){
    console.log("Senior")
}
else{
    console.log("invalid input")
}


color='red'
switch(color){
    case 1  :
    case 'red':
        console.log("Stop")
        break;
    case 2 :
    case 'yellow':
        console.log("Wait")
        break;
    case 3 :
    case 'green':
        console.log("Go")
        break
    default:
        console.log("invalid")
}



let a = 0;
if (a) console.log("Truthy");
else console.log("Falsy");
//Falsy


let value = null ?? "default";
console.log(value);
//default


let x;
let y = x ?? 10;
console.log(y);
//10


let name1 = "";
console.log(name1 || "Guest");
console.log(name1 ?? "Guest");
//Guest
//


let n = NaN;
if (n) console.log("True");
else console.log("False");
//False


let choice = 2;
switch (choice) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Other");
}
// Two
//Three


let userInput = undefined;
let result = userInput ?? "No Value";
console.log(result);
//No Value


let num = "5";
if (num == 5) console.log("== works");
if (num === 5) console.log("=== works");
//== works


let test = 0 || "fallback";
let check = 0 ?? "fallback";
console.log(test, check);
//fallback 
// 0


let score = null;
if (score ?? 0 > 50) console.log("Passed");
else console.log("Failed");
//Failed













