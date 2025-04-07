class Sum{
	getData(){
		this.a = 10;
		this.b = 20;
	}
	setData(){
		this.c = this.a + this.b;
	}
	displayData(){
		console.log("Sum is: "+this.c);
	}
}

var sum = new Sum();
sum.getData();
sum.setData();
sum.displayData();