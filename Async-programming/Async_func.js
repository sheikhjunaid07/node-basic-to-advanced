//Asynchronous Function
console.log(" Before function executed.");

function demo(){
	console.log(" Demo function executed.");
}

setTimeout(demo,2000);

console.log("After function executed.");