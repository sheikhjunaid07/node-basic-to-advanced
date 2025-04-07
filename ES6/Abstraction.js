class Employee{
	#eid;
	#ename;
	
	getDetails(eid, ename){
		this.#eid = eid;
		this.#ename = ename;
	}

	showDetails(){
		console.log(" Employee id is: "+this.#eid);
		console.log(" Employee name is: "+this.#ename);
	}
}

var emp = new Employee();
emp.getDetails(101, "Raj");
emp.showDetails();

// console.log("Before changes emp id: "+#emp.eid);

// emp.eid = 0;