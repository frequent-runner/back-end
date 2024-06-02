//w a p to print pairs whose sum is 6
b=[2,3,4,5]
sum=6
nopair=false
for(i=0;i<b.length;j++){
    for(j=0;j<b.length;j++){
        if(b[i]+b[i]==sum){
            nopair=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}
!nopair && console.log('no such pair');
