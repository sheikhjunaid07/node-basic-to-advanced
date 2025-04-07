function checkPerfect(n) {
  return new Promise((resolve) => {
    var sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i == 0) sum += i;
    }
    resolve(sum);
  });
}
var n = 28;
checkPerfect(n).then((response) => {
  if (response == n) console.log("Given number is Perfect number.");
  else console.log("Given number is not Perfect number");
});
