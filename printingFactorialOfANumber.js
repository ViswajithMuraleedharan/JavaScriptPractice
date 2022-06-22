let n=parseInt(prompt("Enter the number;"))
let product=1;
function printingFactorialOfANumber(num){
    for(let i=1;i<=num;i++){
        product=product*i;
    }
    console.log(product);
}
printingFactorialOfANumber(n);