console.log("before");

function checkArm(n) {
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
    if (sum == temp) resolve("armstrong");
    else resolve("not");
  });
}
var n = 8208;
checkArm(n).then((response) => {
  console.log(response);
});

console.log("after");
