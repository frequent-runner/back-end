// str='hello'
// console.log(str[4]);

//w a p to check whether the given string is palindrome or not?
//malayalam

str='malayalam'
// //my method
// str1=str.startsWith('malay')
// console.log(str1);
// str2=str.endsWith('alam')
// console.log(str2);
// if(str1==str2){
//     console.log('palindrome');
// }
// else{
//     console.log('not palindrome');
// }

//miss
start=0
end=str.length-1
ispalindrome=true
while(start<end){
    if(str[start]!=str[end]){
        ispalindrome=false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrome':'not palindrome');