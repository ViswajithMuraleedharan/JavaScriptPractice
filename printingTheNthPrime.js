let n=parseInt(prompt("number:"));
let count=0;
for(let i=1;i<=10000;i++){
    if(printingTheNthPrime(i)){
        count++;
        if(count==n){
            console.log(i);
        }
    }
}
function printingTheNthPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
