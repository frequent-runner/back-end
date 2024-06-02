//w a p to print common numbers from a given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,35]
//iscommon=false

// for(i=0;i<p.length;i++){
//     for(j=0;j<=q.length;j++){
//         if(p[i]==q[j]){
//             iscommon=true
//             console.log(p[i]);
//         }
//     }
// }
// !iscommon && console.log('no commmon number');

isfound=false
for(i of p){
    for(j of q){
        if(i==j){
            isfound=true
            console.log(i);
        }
    }
}
!isfound && console.log('no common number');

