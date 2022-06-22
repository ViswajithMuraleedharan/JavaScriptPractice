let n=parseInt(prompt("Enter the number;"));
function findingTheSumOfDigits(num){
    let sum=0;//initializing sum
    while (num>0) {
        sum=sum+(num%10);//diving num by 10 to get the reminder which is the last digit ang adding with sum
        num=parseInt(num/10); //readying the num to get the next digit by taking the integer value of num/10;
    }
    console.log(sum);
}
findingTheSumOfDigits(n);