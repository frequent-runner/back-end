/*for(i=8;i<500;i++){
    sum=0
    temp=i
    numd = (i+'').length
    while (temp>0) {
            reminder = temp%10
            sum+= reminder** numd
            temp = Math.floor(temp/10)
        }

    if(sum==i){
        console.log(i);
    }

}*/

for (row = 1; row <= 4; row++) {
    str = ''

    for (col = 1; col <= row; col++) {
        str = str + ' * '
    }
    console.log(str);
}