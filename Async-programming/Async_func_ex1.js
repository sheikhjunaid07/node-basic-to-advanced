console.log(" Before function executed.");

function add(a,b){
	return a+b;
}

var a,b,c;
a = 10;
b = 20;

setTimeout(()=>{
	c = add(a,b);
	console.log("a = "+a);
	console.log("b = "+b);
	console.log("add = "+c);
},2000);

console.log("After function executed.");