num=17

if(num%15==0){
    console.log('fizzbuss');
}
else if(num%5==0){
    console.log('buss');
}
else if(num%3==0){
    console.log('fizz')
}
else{
    console.log(`else ${num} is not divisible by 15,5,3`);
}