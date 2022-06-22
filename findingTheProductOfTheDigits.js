let n=parseInt(prompt("Enter the number:"))
function findingTheProductOfTheDigits(num){
    let product=1;
    while(num>0){
        product=product*(num%10);
        num=parseInt(num/10);
    }
    console.log(product);
}
findingTheProductOfTheDigits(n);