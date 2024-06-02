// 4) Sample data with mixed types in nested arrays
const mixedData = [
    [1, 'apple', 3, 'banana'],
    [4, 'orange', 6, 'grape'],
    [7, 'pear', 9, 'kiwi'],
    [10, 'melon', 12, 'strawberry']
  ];

  
  console.log(`1) Use map to create an array of strings containing both the type and value of each element.`);
  cmbe = mixedData.map(n1=>{
    result = []
    for(i =0;i<n1.length;i+=2){
        if(n1[i+1]){
            result.push(`${n1[i]} ${n1[i+1]}`)
        }
    }
    console.log(result);
  })

console.log(cmbe);

  console.log(`__________________________________________`);

  console.log(`2) Use filter to get all arrays where the number of strings is greater than the number of numbers`);
//   DIDNT GET THE ANSWER
  lng = mixedData.filter(n1=>n1.filter(n2=>typeof n2 == 'string').length > mixedData.filter(n1=>n1.filter(n2=>typeof n2 == 'number').length))
  console.log(lng);
  console.log(`__________________________________________`);

  console.log(` 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.`);
//   Using reduce method didnt get
words = Array.from(mixedData.flat()).filter(n1=>typeof n1 == 'string')
str =''
for(i=0;i<words.length;i++){
    str += words[i] + ' '
}
console.log(str);
  console.log(`__________________________________________`);

  console.log(`4) Use arrayFrom to create an array of unique strings from the nested arrays.`);
  //   DiDNT GET THE ANSWER
  console.log(`__________________________________________`);

  console.log(` 5) Use sort to sort the nested arrays based on the length of strings in each array.`);
//   DIDNT GET THE ANSWER
  srt = mixedData.sort((n1,n2)=>(n1.filter(item=> typeof item == 'string').length)-(n2.filter(item=> typeof item == 'string').length))
  
  console.log(str);
  console.log(`__________________________________________`);

  console.log(` 6) Use map to convert each string in the nested arrays to its uppercase form.`);
  cnvrt = mixedData.map(n1=>n1.map(n2=>typeof n2 == 'string'?n2.toUpperCase():n2))
  console.log(cnvrt);
  console.log(`__________________________________________`);

  console.log(` 7) Use filter to get all arrays where the sum of numbers is greater than 20.`);
  sum = mixedData.map(n1=>n1.filter(n2=>typeof n2 == 'number')).filter(n3=>n3.reduce((n4,n5)=>n4+n5,0)>20)
  console.log(sum);
  console.log(`__________________________________________`);

  console.log(`8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.`);
  concat = mixedData.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
  console.log(concat);
  console.log(`__________________________________________`);
  

  console.log(`
  9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.`);
  leng = Array.from(mixedData.flat()).filter(n1=>typeof n1 == 'string').map(n2=>n2.length)
  console.log(leng);
  console.log(`__________________________________________`);

  console.log(` 10) Use includes to check if the word 'apple' is present in any of the nested arrays.`);
  check = mixedData.some(n1=>n1.includes('apple'))
  console.log(check);
  console.log(`__________________________________________`);