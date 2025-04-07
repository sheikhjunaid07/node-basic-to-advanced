class Prime{
	constructor(num){
		this.num = num;
	}
	checkPrime(){
		let flag = 0;
		for(let i=2; i<this.num; i++){
			if(this.num%i==0)
				flag = 1;
		}
		if(flag == 1)
			console.log(` Given number ${this.num} is not prime number.`);
		else
			console.log(` Given number ${this.num} is prime number.`)
	}
}

var prime = new Prime(12);
prime.checkPrime();