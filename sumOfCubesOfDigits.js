let n=parseInt(prompt("Enter the number:"))
function sumOfCubesOfDigits(num){
    let sum=0;
    while (num>0) {
        value=num%10;
        sum=sum+(value*value*value);
        num=parseInt(num/10);
    }
    console.log(sum);
}
sumOfCubesOfDigits(n);