let n=parseInt(prompt("Enter the number:")); 
let sum=0;
function sumOfNprimeNumber(num){
    if(num===2){
        return true;
    }
    if(num<=1){
        return false;
        }
    for (let i=2; i<num;i++){
        if(num%i===0){
            return false;
        }
        else{
           return true;
        }   
    }   
}
for (let i=1; i<=n; i++) {
    if (sumOfNprimeNumber(i)) {
        sum=sum+i;
    }  
}
console.log(sum);
