/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

function scriptAt(someString: String) {
    return someString.lastIndexOf('Script');
}

console.log(scriptAt('Script'));
console.log(scriptAt('12345Script12345'));
console.log(scriptAt('12345script12345'));
console.log(scriptAt(123456789));   // error
console.log(scriptAt(true));        // error

/* 
Answers:
1)  Cast `String` type to parameter in function so if parameter is not String type,
    it will print `TSError: ⨯ Unable to compile TypeScript:`
2)  How to write function,
    find index of the string in another string in Typescript language,
    validate type of parameter in function before running
*/