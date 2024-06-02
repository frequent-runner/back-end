//a=[10,20,30,20,30,40,50,60,10]
//w a p to find the duplicate number from the given array=10,20,30

// a=[10,20,30,20,30,40,50,60,10,]
// isduplication=false
// for(i=0;i<=a.length;i++){
//       for(j=i+1;j<=a.length;j++){
//         if(a[i]==a[j]){
//             isduplication=true
//             console.log(a[i]);
//         }
//       }
// }
// !isduplication && console.log('no duplication');

a=[10,20,30,20,30,40,50,60,10]
b=[]

for(i=0;i<=a.length-1;i++){
  for(j=i+1;j<=a.length-1;j++){
    if(a[i]==a[j]){
      isduplicate=false

      for(k=0;k<=b.length-1;k++){
        if(a[i]==b[k]){

          isduplicate=true
          break
        }
      }
      if(!isduplicate){

        b.push(a[i])
      }
    }
  }
}
isduplicate?console.log(b):console.log('no duplication');