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
		console.log("B data method Invoked.")
	}
}

class C extends A{
	c = 300;
	cData(){
		console.log("a = "+this.a);
		console.log("c = "+this.c);
		console.log("C data method Invoked.")
	}
}

var obj = new B();
obj.aData();
obj.bData();

var obj2 = new C();
obj2.aData();
obj2.cData();