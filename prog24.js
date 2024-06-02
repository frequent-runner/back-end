num=121
reverse=0
remainder=0
temp=num

while (num>0) {
    remainder=num%10
    reverse=(reverse*10)+remainder
    num=Math.floor(num/10)
    
}
if(temp==reverse){
    console.log('its a palindrome number');
}
else{
    console.log('not a palindrome number');
}