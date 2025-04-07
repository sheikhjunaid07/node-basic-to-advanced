function checkArmstrong(n) {
  return new Promise((resolve) => {
    var sum = 0,
      rem,
      temp,
      count = 0;
    temp = n;
    while (n > 0) {
      rem = n % 10;
      count++;
      n = Math.floor(n / 10);
    }

    n = temp;
    while (n > 0) {
      rem = n % 10;
      sum += Math.pow(rem, count);
      n = Math.floor(n / 10);
    }
    resolve(sum);
  });
}

var n = 153;
checkArmstrong(n).then((response) => {
  if (response == n) console.log("Given number is Armstrong Number.");
  else console.log("Given number is not Armstrong Number.");
});
