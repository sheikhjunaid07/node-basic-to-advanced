class Employee{
	constructor(){
		this.eid = 0;
		this.ename = null;
	}
	getDetails(eid, ename){
		this.eid = eid;
		this.ename = ename;
	}

	showDetails(){
		console.log(" Employee id is: "+this.eid);
		console.log(" Employee name is: "+this.ename)
	}
}

var emp = new Employee();
emp.getDetails(101, "Raj");
emp.showDetails();