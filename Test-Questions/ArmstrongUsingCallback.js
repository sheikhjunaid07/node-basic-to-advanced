function checkArmstrong(n, cb) {
  var rem,
    rev = 0,
    count = 0;
  var temp = n;
  while (n > 0) {
    rem = n % 10;
    count++;
    n = Math.floor(n / 10);
  }
  n = temp;
  while (n > 0) {
    rem = n % 10;
    rev += Math.pow(rem, count);
    n = Math.floor(n / 10);
  }

  cb(rev);
}

var n = 1634;
checkArmstrong(n, (response) => {
  if (response == n) console.log("Given number is Armstrong number.");
  else console.log("Given number is not Armstrong number.");
});
