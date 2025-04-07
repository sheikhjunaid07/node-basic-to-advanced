//Encapsulation gives a lots of features but, it has some drawback also, enapsulations create security concerns, anyone can change data of the class becouse of its public nature. That's why we use Abstraction to secure our data.

class Employee{
	getDetails(eid, ename){
		this.eid = eid;
		this.ename = ename;
	}

	showDetails(){
		console.log(" Employee id is: "+this.eid);
		console.log(" Employee name is: "+this.ename);
	}
}

var emp = new Employee();
emp.getDetails(101, "Raj");
emp.showDetails();

console.log("Before changes emp id: "+emp.eid);

emp.eid = 0;

console.log("Before changes emp id: "+emp.eid);