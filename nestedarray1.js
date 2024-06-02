//nested array
a = [[2, 10], [50, 25], [2, 100], [7, 66], [33, 9]]
//w a p to find the numbers less than or equal to 10

// for(let num of a){
//     for(let n of num){
//         if(n<=10){
//             console.log(n);
//         }

//     }
// }

//w a p to find all even numbers from the given array
b = a.flat()
for (let num of b) {
    if (num%2==0) {
        console.log(num);
    }
}

//6 th array methods
//flat(depth) -it changes the dimension of an array -2D-1D it return an array
