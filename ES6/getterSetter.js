class Addition{
	setData(a,b){
		this.a = a;
		this.b = b;
	}
	addData(){
		this.c = this.a + this.b;
	}
	getData(){
		return {"a":this.a, "b":this.b, "c":this.c}
	}
}

var add = new Addition();
add.setData(100,200);
add.addData();
var result = add.getData();
console.log(" a: "+result['a']);
console.log(" b: "+result['b']);
console.log(" Addition of a and b is: "+result.c);