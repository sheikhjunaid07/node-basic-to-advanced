function checkPerfect(n, cb) {
  var sum = 0;
  for (let i = 1; i <= n / 2; i++) if (n % i == 0) sum += i;
  cb(sum);
}

var n = 28;
checkPerfect(n, (response) => {
  if (response == n) console.log("Given number is Perfect Number.");
  else console.log("Given number is not Perfect Number.");
});
