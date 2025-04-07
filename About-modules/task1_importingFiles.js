import {
  checkEvenOdd,
  findFactorial,
  checkDivisibility,
} from "./task1_modules.js";

var num = 9;
var resultEvenOdd = checkEvenOdd(num);

if (resultEvenOdd) {
  var resultFact = findFactorial(num);
  console.log("Number is Even and Factorial of given number is: ", resultFact);
} else {
  var resultDiv = checkDivisibility(num);
  if (resultDiv) console.log("Number is odd and Divisible by 5");
  else console.log("Number is odd and not divisible by 5");
}
