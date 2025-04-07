//callback Function
//function with arguments and return value.

console.log(" Before function executed.");

function demo(a,b,cb){
	console.log(" Demo function executed.");
	var c = a + b;
	cb(c);
}

var a = 10, b = 20;
demo(a,b,(res)=>{
	console.log("Callback Demo function executed. add: "+res);
});

console.log("After function executed.");