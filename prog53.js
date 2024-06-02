//Find the pairs whose sum is 7
b=[2,3,4,5]
psum=7 
low=0
high=b.length-1
isPresent=false
while(low<high){
    csum=b[low]+b[high]
    if(csum==psum){
        isPresent=true
        console.log((`${b[low]},${b[high]}`));
        low++
    }
    else if(csum<psum){
        low++
    }
    else{
        high--
    }
}
!isPresent && console.log('no pairs');