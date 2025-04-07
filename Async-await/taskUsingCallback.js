//program using callback

console.log("Before Execution");

var n = 10;
function checkDivisibility(n, cb) {
  var flag = true;
  if (n % 10 != 0) flag = false;
  setTimeout(() => {
    cb(flag);
  }, 1000);
}

function printFactorial(n, cb) {
  var fact = 1;
  while (n > 0) {
    fact *= n;
    n--;
  }
  setTimeout(() => {
    cb(fact);
  }, 2000);
}

function printTable(n, cb) {
  var arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(n * i);
  }
  setTimeout(() => {
    cb(arr);
  }, 2000);
}

checkDivisibility(n, (res) => {
  if (res) {
    printFactorial(n, (res1) => {
      console.log("Factorial is" + res1);
    });
  } else {
    printTable(n, (res2) => {
      for (const x of res2) {
        console.log(x);
      }
    });
  }
});

console.log("After Execution");
