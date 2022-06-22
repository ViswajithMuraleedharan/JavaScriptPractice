let n=parseInt(prompt("Enter the number"))

function printingAllThePrime(num){
    if(num<1){
        return false;
    }
    if(num===2){
        return true
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
        else{
            return true;
        }
    }
}
for(let i=1;i<=n;i++){
    if(printingAllThePrime(i)){
        console.log(i);
    }
}

