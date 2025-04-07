//program using async-await

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

async function test() {
  n = 20;
  var result = await checkDivisibility(n);
  if (result) {
    let factResponse = await printFactorial(n);
    console.log("Factorial is: " + factResponse);
  } else {
    let tableResponse = await printTable(n);
    console.log("Table is: ");
    for (const x of tableResponse) {
      console.log(x);
    }
  }
}

test();
