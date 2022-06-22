let n=parseInt(prompt("Enter the number:"))
let sum=0;
function summingNNaturalNos(num){
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    console.log(sum);
}
summingNNaturalNos(n);