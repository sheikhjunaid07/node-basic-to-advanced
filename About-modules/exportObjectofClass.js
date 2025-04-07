class MyClass{

	 a = 100;
	 b = 200;
	 c = 300;

	demo(){
		console.log("Demo Function invoked.");
	}

	demo1 = ()=>{
		console.log("Demo1 Arrow function invoked.");
	}
}

//directly export object of a class
export default new MyClass();