//WAP to check a number is even or odd if even print its factorial if odd check it is divisible by 5.
//Note: For all three function module must be created and checking must be done on testing file.

export function checkEvenOdd(num) {
  var flag = true;
  if (num % 2 == 1) flag = false;
  return flag;
}

export function findFactorial(num) {
  var fact = 1;
  while (num != 0) {
    fact *= num;
    num--;
  }
  return fact;
}

export function checkDivisibility(num) {
  var flag = true;
  if (num % 5 != 0) flag = false;
  return flag;
}
