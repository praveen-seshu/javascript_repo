console.log(a()); 
console.log(b());

function a() {
  return "Function Declaration";
}

var b = function() {
  return "Function Expression";
};

// Function Declaration
// TypeError: b is not a function


let greet = function() {
  return "Hello!";
};
console.log(typeof greet);
console.log(greet.name);

// function
// greet

let result = (function(x, y) {
  return x * y;
})(3, 4);

console.log(result);
//12


let user = {
  name: "Noor",
  say: () => {
    console.log(this.name);
  },
};
user.say();
//undefined



function* counter() {
  yield 1;
  yield 2;
  return 3;
}

let gen = counter();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: true }


function greet(name) {
  return "Hello " + name;
}

function execute(fn, value) {
  return fn(value);
}

console.log(execute(greet, "Students"));

// Hello Students


let count = 0;
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));   
console.log(count);

// 7
// 0


function multiply(a, b = 5) {
  return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));
// 15
// 6


function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(4));
//24



function printResult(fn, num) {
  console.log(fn(num));
}

function double(n) {
  return n * 2;
}

printResult(double, 10);
//20