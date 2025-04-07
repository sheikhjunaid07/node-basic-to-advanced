class Employee{
	constructor(eid, ename){
		this.eid = eid;
		this.ename = ename;
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

var emp = new Employee(0, null);
emp.getDetails(102,"Raj")
emp.showDetails();

//you can access directly with object.properties
console.log(" Employee name is: "+emp.ename)