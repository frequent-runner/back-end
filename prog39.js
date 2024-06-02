//      *
//     * *
//    * * *
//   * * * *
//  * * * * * 
//   * * * *
//    * * *
//     * *
//      * 

for (row = 1; row <= 9; row++) {
    str ='';
    if(row<=5){
        for(space = 5; space>row ; space--){
            str+= ' '
        }
        for(col=1;col<=row;col++){
            str+=' *'
        }
    }
    else{

        for(space= 6;space<=row;space++){
            str+= ' '
        }
        for(col= 10; col>row ; col--){
            str+= ' *'
        }
        
    }
    console.log(str);
}