class A{
	Data(){
		console.log("Data from class A");
	}
	aData(){
		console.log("A data method Invoked.")
	}
}

class B extends A{
	Data(){
		super.Data();
		console.log("Data from class B");
	}
	bData(){
		console.log("A data method Invoked.")
	}
}

var obj = new B();
obj.aData();
obj.bData();
obj.Data();