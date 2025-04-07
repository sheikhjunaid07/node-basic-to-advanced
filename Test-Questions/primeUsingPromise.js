function checkPrime(n) {
  return new Promise((resolve) => {
    var flag = 0;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) flag++;
    }
    resolve(flag);
  });
}
var n = 42;
checkPrime(n).then((response) => {
  if (response == 0) console.log("Given Number is Prime Number.");
  else console.log("Given number is not Prime Number.");
});
