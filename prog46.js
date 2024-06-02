// input array=[4,5,6]
// output array=[11,10,9]

arr1=[4,5,6] 
i=7
arr2=[]

for(num of arr1){
    arr2.push(num+i)
    i=i-2
}
console.log(arr2);



//miss

// sum=0
// for(let i of input){
//     sum=sum+i
// }
// output=[]
// for(let num of input){
//     output.push(sum-num)
// }
// console.log(output);