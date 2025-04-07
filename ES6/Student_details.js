class Student{
	#srollNo;
	#sname;
	#sgender;
	#sclass;
	#ssection;

	setDetails(srollNo, sname, sgender, sclass, ssection){
		this.#srollNo = srollNo;
		this.#sname = sname;
		this.#sgender = sgender;
		this.#sclass = sclass;
		this.#ssection = ssection;
	}

	printDetails(){
		console.log(` Student Roll No is: ${this.#srollNo}.`);
		console.log(` Student Name is: ${this.#sname}.`);
		console.log(` Student Gender is: ${this.#sgender}.`);
		console.log(` Student Class is: ${this.#sclass}th.`);
		console.log(` Student Section is: ${this.#ssection}.`);
		
	}
}

var student = new Student();
student.setDetails(101, "Pankaj","Male",11, "A");
student.printDetails();

console.log("-------------------------");

var student2 = new Student();
student2.setDetails(101, "Junaid","Male",12, "B");
student2.printDetails();


