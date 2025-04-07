console.log("Before Function Execution.");

function demo() {
  return new Promise((resolve, reject) => {
    var flag = true;
    if (flag) resolve("Success");
    else resolve("Failure");
  });
}

async function test() {
  var response = await demo();
  console.log(response);
}
test();
console.log("After Function Execution.");
