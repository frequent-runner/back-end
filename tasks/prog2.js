/*2) Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]   */

str = `dog`
str1 = []

for(n=0;n<str.length;n++){
    for(i=n+1;i<=str.length;i++){
        str1.push(str.slice(n,i))
        console.log(str1);
    }
}