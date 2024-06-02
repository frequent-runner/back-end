fruits=['apple','pineapple','mango','orange','kiwi']

x=fruits.find(n=>n=='mango')
console.log(x);

//is mango present in the array

b=fruits.includes('mango')
console.log(b?'yes':'no');

//find the index of mango
i=fruits.indexOf('mango')
console.log(i);

n=fruits.indexOf('kiwi')
console.log(n);