function checkPrime(n) {
  return new Promise((resolve) => {
    var flag = 0;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) flag++;
    }
    resolve(flag);
  });
}

async function demo() {
  var n = 2;
  const result = await checkPrime(n);
  if (result == 0) console.log("Given number is Prime Number.");
  else console.log("Given number is not prime Number.");
}
demo();
