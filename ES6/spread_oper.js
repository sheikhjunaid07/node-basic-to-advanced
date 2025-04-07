var empDetails = {
	"eid": 1001,
	"enm": "Raj",
	"esal": 30000.6
}

console.log(" Before Changes");
console.log(empDetails);

//add details manually
empDetails["edes"] = "developer";
empDetails.edob = "dd/mm/yyyy";

//add key-value using spread operator
empDetails = {...empDetails, "ecity":"Indore"}

//merge two object also
var otherDetails = {"estate": "MP", "epincode": 450221}
empDetails = {...empDetails, ...otherDetails}

console.log(" After Changes");
console.log(empDetails);
