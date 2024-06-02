arr=[10,11,12,3,2,4]
//w a p to check whether 2 is present or not

searchitem=2
ispresent=false
for(num of arr){
    if(num==searchitem){
        ispresent=true
        break
    }
}
console.log(ispresent?'present':'not present');