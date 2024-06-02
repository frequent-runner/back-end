// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// for(row=1;row<=5;row++){
//     str=''
//     for(col=1;col<=row;col++){
//         str=str+"* "
//     }
//     console.log(str);
// }
// for(row=4;row>=1;row--){
//     str=''
//     for(col=1;col<=row;col++){
//         str=str+"* "
//     }
//    console.log(str);
// }

//     *
//    * *
//   * * *
//  * * * * 

for(row=1;row<=4;row++){// 1<=4 // 2<4 //
    str=''//""//""
    for(spa=4;spa>row;spa--){// 4>1 // 3>1 // 2>1 // 1>1
        str=str+" "
    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('-------');

//      *
//     * *
//    * * *
//   * * * *
//  * * * * * 
//   * * * *
//    * * *
//     * *
//      * 