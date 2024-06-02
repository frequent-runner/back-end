num=123 
remainder=0
reverse=0
console.log('given number is',num);

while(num>0){
    remainder=num%10
    reverse=(reverse*10)+remainder
    num=math.floor(num/10)
}
console.log('reverse of the given number is',reverse);