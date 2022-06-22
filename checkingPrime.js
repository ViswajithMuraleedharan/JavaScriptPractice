let n =parseInt(prompt("Enter the number:"))
function checkingPrime(num){
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

if(checkingPrime(n)){
    console.log("prime");
}
else{
    console.log("not a prime");
}
