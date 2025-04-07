class A{
	a = 100;
	aData(){
		console.log("A data method Invoked.")
	}
}

class B extends A{
	b = 200;
	bData(){
		console.log("B data method Invoked.")
	}
}

class C extends B{
	c = 300;
	cData(){
		console.log("a = "+this.a);
		console.log("b = "+this.b);
		console.log("c = "+this.c);
		console.log("c data method Invoked.")
	}
}

var obj = new C();
obj.aData();
obj.bData();
obj.cData();