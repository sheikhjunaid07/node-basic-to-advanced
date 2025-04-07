function add(a, b, cb) {
  cb(a + b);
}

add(4, 6, (response) => console.log("Sum is: " + response));
