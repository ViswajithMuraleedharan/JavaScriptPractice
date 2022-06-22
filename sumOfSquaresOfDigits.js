let n=parseInt(prompt("Enter the num"));
let sum=0;
function sumOfSquaresOfDigits(num){
    while (num>0) {
        value=num%10;
        sum=sum+(value*value);
        num=parseInt(num/10);
    }
    console.log(sum);
}
sumOfSquaresOfDigits(n);