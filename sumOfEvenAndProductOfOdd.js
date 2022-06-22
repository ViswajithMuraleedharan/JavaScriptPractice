let n=parseInt(prompt("Enter the number"))
function sumOfEvenAndProductOfOdd(num){
    let sum=0;
    let product=1;
    while (num>0) {
        value=num%10;
        if (num%2===0) {
            sum=sum+value;
        } else {
            product= product*value;
        }
        num=parseInt(num/10);
    }
    console.log(`sum of even digits of ${n} is ${sum}`);
    console.log(`product of odd digits of ${n} is ${product}`);
    // console.log(sum);
    // console.log(product);
}
sumOfEvenAndProductOfOdd(n);