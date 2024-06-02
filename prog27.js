num=153
sum=0
temp=num

while(num>0){
    remainder=num%10
    sum=sum+remainder**3
    temp=Math.floor(num/10)
}
if(num==sum){
    console.log('armstrong');
}
else{
    console.log('Not armstrong');
}