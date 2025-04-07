class Add{
	a = 0;
	b = 0;
	c = 0;
	addData(){
		this.a = 10;
		this.b = 20;
		this.c = this.a + this.b;
		console.log("a = "+this.a);
		console.log("b = "+this.b);
		console.log("Add = "+this.c);
	}
}

var obj = new Add();
obj.addData();