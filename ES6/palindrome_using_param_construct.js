class Palindrome{
	constructor(num){
		this.num = num;
	}
	checkPalindrome(){
		let rev = 0;
		let rem;
		let origNum = this.num;
		while(this.num!=0){
			rem = parseInt(this.num%10);
			rev = rev*10 + rem;
			this.num = parseInt(this.num/10);
		}
		if(rev == origNum)
			console.log(`Given Number ${origNum} is palindrome number.`);
		else
			console.log(`Given Number ${origNum} is not a palindrome number.`);
	}
}

var pal = new Palindrome(12321);
pal.checkPalindrome();