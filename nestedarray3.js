a=[10,11,12,13,14,15]
//w a p to find the square of each element in the given array

sq=a.map(num=>num**2)
console.log(sq);

for(let n of a){
    console.log(n**2);
}
console.log('------------');

//forEach()
a.forEach(num=>{
    console.log(num**2);
})
console.log('--------------------');

// w a p to find the cube of a given number using map 

cube=a.map(num=>num**3)
console.log(cube);

//w a p to create a new array with number <=13 increment by 1 and number>13 decrement by1
//op=[11,12,13,14,13,14]

b=a.map(num=>num<=13?num+1:num-1)
console.log(b);