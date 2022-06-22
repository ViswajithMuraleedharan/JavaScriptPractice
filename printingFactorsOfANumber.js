let n=parseInt(prompt("Enter the number:"))
function printingFactorsOfANumber(num){
    for(let i=1;i<=num;i++){
        if(num%i===0){
            console.log(i);
        }
    }
}
printingFactorsOfANumber(n);