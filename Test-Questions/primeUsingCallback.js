function checkPrime(n, cb) {
  var flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) flag++;
  }
  cb(flag);
}
checkPrime(8, (response) => {
  if (response == 0) console.log("Given number is prime.");
  else console.log("Given number is not prime.");
});
