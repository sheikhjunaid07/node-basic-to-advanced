console.log("before")

function checkArm(n){
return new Promise((resolve)=>{
 var sum=0,rem,temp
 temp=n;
 while(n>0)
 {
    rem=n%10;
    sum+=(rem*rem*rem);
    n=Math.floor(n/10);
 }
 if(sum==temp)
    reslve("armstrong")
else
resolve("not ")
})
}
var n=407;
checkArm(n).then((response)=>{
    console.log(response)
});

console.log("after")