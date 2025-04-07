console.log("Before Execution");

function checkArmstrong(n) {
  return new Promise((resolve, reject) => {
    var sum = 0,
      rem,
      temp;
    temp = n;
    while (n > 0) {
      rem = n % 10;
      sum += rem * rem * rem;
      n = Math.floor(n / 10);
    }
    if (sum == temp) resolve("Armstrong Number.");
    else reject("Not Armstrong");
  });
}

var n = 153;
checkArmstrong(n)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("After Execution");
