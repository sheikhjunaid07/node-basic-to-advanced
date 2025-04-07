function add(...args){
	var s = 0;
	for(let x of args)
		s += args;

    console.log("Addition"+s)
}

add(10);
add(10,20);
add(10,20,30);
add(10,20,30, 40);
add(10,20,30, 40,50);
add(10,20,30, 40,50, 60);