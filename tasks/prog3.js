const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

console.log(`1) Find the sum of all numbers in the nested arrays.`);  
data1 = data.flat()
sum = data1.reduce((n1,n2)=>n1+n2,0)
console.log(sum);


console.log(`__________________________________________`);


console.log(`2) Find the maximum number in the entire nested array.`);
maxno = data1.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxno);

console.log(`__________________________________________`);

console.log(`3) Find the average of all numbers in the nested arrays.`);
avg = sum/data1.length
console.log(avg);

console.log(`__________________________________________`);

console.log(` 4) Find square of each number in the nested arrays.`);
sq = data.map(n1=>n1.map(n2=>n2**2))
console.log(sq);

console.log(`__________________________________________`);

console.log(` 5) Find all even numbers from the nested arrays.`);
even = data1.filter(n1=>n1%2==0)
console.log(even);

console.log(`__________________________________________`);

console.log(`6) Use reduceRight to concatenate all nested arrays in reverse order.`);

concat = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(concat);
console.log(`__________________________________________`);

console.log(`7) create a flattened array from the nested arrays.`);
flatarray = data.flat()
console.log(flatarray);
console.log(`__________________________________________`);

console.log(`8) check if the number 5 is present in any of the nested arrays`);
check = data.some(n1=>n1.includes(5))
console.log(check);
console.log(`__________________________________________`);

console.log(`9) create a single string of all numbers separated by a comma. `);
str = ''
for(i of flatarray){
    str += i +','
}
console.log(str);
console.log(`__________________________________________`);

console.log(` 10) Print each number in the nested arrays.`);
data.map(n1=>n1.map(n2=>n2).forEach(item=>console.log(item)))
console.log(`__________________________________________`);

console.log(`11) Sort the nested arrays based on the sum of their numbers.`);
sum = data.map(n1=>n1.reduce((n2,n3)=>n2+n3,0))
console.log(sum);
console.log(`__________________________________________`);

console.log(`12) Use map to get the product of the first and last number in each nested array.`);
mapmult = data.map(n1=>n1[0]*n1[n1.length - 1])
console.log(mapmult);

console.log(`__________________________________________`);

console.log(`13) Use filter to get all arrays where the sum of numbers is greater than 15.`);
sum1 = data.filter(n1=>n1.reduce((n2,n3)=>n2+n3,0)>15)
console.log(sum1);
console.log(`__________________________________________`);

console.log(`14) Use reduce to find the product of all numbers in the nested arrays.`);
prod = data.map(n1=>n1.reduce((n2,n3)=>n2*n3,1))
console.log(prod);
console.log(`__________________________________________`);

console.log(` 15) create an array of square roots of all numbers in the nested arrays.`);
srqrt = data.map(n1=>n1.map(n2=>Math.sqrt(n2)))
console.log(srqrt);
console.log(`__________________________________________`);

console.log(`16) Use includes to check if the number 20 is present in any of the nested arrays.`);
check = data.some(n1=>n1.includes(20))
console.log(check);
console.log(`__________________________________________`);

console.log(`17) Use map to convert each number in the nested arrays to its string representation.`);
convrt = data.map(n1=>n1.map(n2=>n2+' '))
console.log(convrt);
console.log(`__________________________________________`);

console.log(`18) Use filter to get all arrays where the length is greater than 2`);
leng = data.filter(n1=>n1.length>2)
console.log(leng);
console.log(`__________________________________________`);

console.log(`19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
console.log(concat);
console.log(`__________________________________________`);

console.log(` 20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.`);
sqrs = Array.from(data.flat()).filter(n1=>n1%2==0).map(n2=>n2**2)
console.log(sqrs);
console.log(`__________________________________________`);

console.log(`21) Sort the nested arrays based on the length of each array.`);
srt = data.sort((n1,n2)=>n1.length-n2.length)
console.log(srt);
console.log(`__________________________________________`);

console.log(`22) Use map to convert each number in the nested arrays to its negative.`);
neg = data.map(n1=>n1.map(n2=>n2*-1))
console.log(neg);
console.log(`__________________________________________`);

console.log(`23) Use filter to get all arrays where the last number is greater than 10.`);
last = data.filter(n1=>n1[n1.length-1]>10)
console.log(last);
console.log(`__________________________________________`);

console.log(` 24) Use reduceRight to get the difference between consecutive numbers in each nested array.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(concat);
// DIDNT GET THE ANSWER
console.log(`__________________________________________`);

console.log(`25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.`);
sqrs = Array.from(data.flat()).filter(n1=>n1%2==0).map(n2=>Math.sqrt(n2))
console.log(sqrs);
console.log(`__________________________________________`);


console.log(` 26) Use includes to check if the number 15 is present in any of the nested arrays.`);
check = data.some(n1=>n1.includes(15))
console.log(check);
console.log(`__________________________________________`);

console.log(`27) Use map to convert each number in the nested arrays to its absolute value.`);
absol = data.map(n1=>n1.map(n2=>Math.abs(n2)))
console.log(absol);
console.log(`__________________________________________`);

console.log(`28) Use filter to get all arrays where the first number is less than 5.`);
first = data.filter(n1=>n1[0]<5)
console.log(first);

console.log(`__________________________________________`);

console.log(`29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
console.log(concat);

console.log(`__________________________________________`);

console.log(`30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.`);
great = Array.from(data.flat()).filter(n1=>n1>5)
console.log(great);
console.log(`__________________________________________`);
console.log(`__________________________________________`);
