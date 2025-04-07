//callback Function
console.log(" Before function executed.");

function demo(cb){
	console.log(" Demo function executed.");
	cb();
}

demo(()=>{
	console.log("Callback Demo function executed.");
});

console.log("After function executed.");