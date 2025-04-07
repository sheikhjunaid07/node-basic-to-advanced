function checkPerfect(n) {
  return new Promise((resolve) => {
    var sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i == 0) sum += i;
    }
    resolve(sum);
  });
}

async function check() {
  var n = 28;
  const result = await checkPerfect(n);
  if (result == n) console.log("Given number is perfect number.");
  else console.log("Given number is not perfect number.");
}

check();
