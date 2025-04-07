//program using promise

function checkDivisibility(n) {
  return new Promise((resolve) => {
    var flag = true;
    if (n % 10 != 0) flag = false;
    resolve(flag);
  });
}

function printFactorial(n) {
  return new Promise((resolve) => {
    var fact = 1;
    while (n > 0) {
      fact *= n;
      n--;
    }
    resolve(fact);
  });
}

function printTable(n) {
  return new Promise((resolve) => {
    var arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(n * i);
    }
    resolve(arr);
  });
}

var n = 20;
checkDivisibility(n).then((response) => {
  if (response)
    printFactorial(n).then((factResponse) => {
      console.log("Factorial is: " + factResponse);
    });
  else
    printTable(n).then((tableResponse) => {
      console.log("Table is" + tableResponse);
      for (let x of tableResponse) console.log(x);
    });
});
