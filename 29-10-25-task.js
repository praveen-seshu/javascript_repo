var pet='dog';
let son='praveen';
const home='h1';//showed error before assigning value check on it

//2) re-assig...

pet='cat';
son='Seshu';
//home='h2';

/* 
note
----
TypeError: Assignment to constant variable.
*/


//3) creating block to check var and let

{
    var car='Tata'
    let drives_on='petrol'
}
console.log(car)
//console.log(drives_on)


/* 
note
----
Node.js v20.18.2
PS C:\from ph\movie\js10K> node 29-10-25-task.js
Tata
C:\from ph\movie\js10K\29-10-25-task.js:25
console.log(drives_on)
            ^

ReferenceError: drives_on is not defined
*/


//4) Declare a variable x with var inside a function. Try to access it outside the function.

function shop(){
    var chip='Bingo'
}
//console.log(chip)
/* 
C:\from ph\movie\js10K\29-10-25-task.js:47
console.log(chip)
            ^

ReferenceError: chip is not defined
*/

//Create variables for all JS data types: String, Number, Boolean, Null, Undefined, Object, Array, Symbol, BigInt.

var name1='praveen';
var roll=403;
var passed=true;
var failed= null;
var undifinedvar;
var obj={a:1,b:2};
var arr=[1,2,'a','b']
var sym=Symbol('id')
var bignum=1234567890123456789012345678901234567890n;

console.log("name:",name1,"->",typeof(name1))
console.log("roll:", roll, "→", typeof roll);
console.log("passed:", passed, "→", typeof passed);
console.log("failed:", failed, "→", typeof failed);  // special case
//console.log("undefinedVar:", undefinedVar, "→", typeof undefinedVar);
console.log("obj:", obj, "→", typeof obj);
console.log("arr:", arr, "→", typeof arr);            // special case
console.log("sym:", sym, "→", typeof sym);
console.log("bigNum:", bignum, "→", typeof bignum);

/* 
1. Which keyword allows re-declaration of a variable in the same scope?
A) let
 B) const
 C) var                                                 "ANSWER C"
 D) none

2. Which variable declaration is block-scoped?
A) var
 B) let
 C) Both var and let                                       "ANSWER C"
 D) none

3. What happens if you try to reassign a value to a const variable?
A) It updates the value
 B) It creates a new variable
 C) It throws an error                                     "ANSWER C"
 D) It silently ignores



4. What is the output?
console.log(typeof null);

A) "null"
 B) "undefined"
 C) "object"                                                 "ANSWER C"
 D) "string"



5. What is the scope of a var declared variable inside a function?
A) Global
 B) Block
 C) Function                                                  "ANSWER C"
 D) Lexical

6. Which of the following data types is not primitive?
A) String
 B) Number
 C) Object                                                    "ANSWER C"
 D) Boolean

7. What will this code print?
{
  let a = 10;
  var b = 20;
}
console.log(typeof a);
console.log(typeof b);                                          

A) number, number
 B) undefined, number                                        
 C) error, number
 D) error, undefined                                         "ANSWER UNDIFINED,20"


8. Which variable is hoisted with initialization?
A) let
 B) const
 C) var                                                      "ANSWER C"
 D) none



9. What is the output?
const name = "Ravi";
name = "Raj";
console.log(name);

A) Ravi
 B) Raj
 C) Error                                                  "ANSWER C"
 D) undefined

10. Which of the following is a truthy value in JavaScript?
A) 0
 B) ""
 C) null
 D) "false"                                                "ANSWER D"


*/


