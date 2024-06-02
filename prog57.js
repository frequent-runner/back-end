//filter()
a=[10,12,15,13,25,2,3,5]

//w a p to print all even numbers from a given array
// w a p to print all number>13 from the given array

even=a.filter((n1)=>n1%2==0)
console.log(even);

highest=a.filter((n1)=>n1>13)
console.log(highest);

// w a p to check is there any number>13 exist in the given array

x=a.some(num=>num>13)
console.log(x?'yes':'no');