sentance='good morning all'

//w a p to print all vowels in the given sentance .[a,e,i,o,u]
 
v=['a','e','i','o','u','A','E','I','O','U']

character=sentance.split('')
console.log(character);

for(let char of character){
    if(v.includes(char)){
    console.log(char);
}
}
console.log('--------------------------');

//another method
Array.from(sentance).filter(char=>v.includes(char)).forEach(element=>{console.log(element);});
console.log('---------------------------');