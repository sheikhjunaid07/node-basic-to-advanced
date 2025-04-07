class A{
	a = 100;
	aData(){
		console.log("A data method Invoked.")
	}
}

class B extends A{
	b = 200;
	bData(){
		console.log("a = "+this.a);
		console.log("b = "+this.b);
		console.log("A data method Invoked.")
	}
}

var obj = new B();
obj.aData();
obj.bData();