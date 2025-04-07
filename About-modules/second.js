// import c, { a, b, demo, demo1 } from "./exportFunctions.js";

// console.log("a: " + a);
// console.log("b: " + b);
// console.log("c: " + c);

// demo();
// demo1();


//import class 
// import { MyClass } from "./exportClass.js";
// var obj = new MyClass();

// console.log("a: " + obj.a);
// console.log("b: " + obj.b);
// console.log("c: " + obj.c);

// obj.demo();
// obj.demo1();

//import object directly from class
import obj from "./exportObjectofClass.js";

console.log("a: " + obj.a);
console.log("b: " + obj.b);
console.log("c: " + obj.c);

obj.demo();
obj.demo1();