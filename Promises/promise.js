console.log("Before Execution");

function myPromise() {
  return new Promise((resolve, reject) => {
    var flag = true;
    if (flag) resolve("Success");
    else reject("Failure");
  });
}

myPromise()
  .then(() => {
    console.log("Promise Resolved.");
  })
  .catch(() => {
    console.log("Promise Rejected.");
  });

console.log("After Execution");
