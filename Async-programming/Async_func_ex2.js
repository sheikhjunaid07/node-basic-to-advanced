//Asynchronous Function
console.log(" Before function executed.");

function first(){
	console.log(" first function executed.");
}

function second(){
	console.log(" second function executed.");
}

function third(){
	console.log(" third function executed.");
}

setTimeout(first,2000);
setTimeout(second,4000);
setTimeout(third,6000);

console.log("After function executed.");