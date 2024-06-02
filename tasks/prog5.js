const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

//`1) Find the sum of all numbers in the nested arrays

s=data.flat()
n=s.reduce((n1,n2)=>n1+n2)
console.log(n);

//2) Find the maximum number in the entire nested array.

r=data.flat()
console.log(`maximum number:${r.length}`);

//3) Find the average of all numbers in the nested arrays.


