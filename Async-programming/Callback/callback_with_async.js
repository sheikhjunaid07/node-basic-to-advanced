//callback Function with asynchronous

console.log(" Before function executed.");

function demo(cb){
	console.log(" Demo function executed.");
	setTimeout(cb, 2000);
}

demo(()=>{
	console.log("Callback Demo function executed.");
});

console.log("After function executed.");