//array
//[id, name, designation, location, salary, experience]
arr=[1000,'neel','developer','kochi',25000,3],

employee={ 
    id:1000,
    name:'neel',
    desg:'developer',
    emplocation:'kakkanad',
    gender: 'male'
    
    
}
console.log(arr[2]);
// to acces a particular value from a key
console.log(employee['desg']);
console.log(employee.name);

//how to access a key from a object
//----------------------------------

//in method is used to follow the keys in the object.
console.log('---------------------------');
for(let key in employee){
    console.log(key);
}
console.log('---------------------------');
// w a p to check wether 'emplocation' key is present in the given object
if('emplocation'in employee){
    console.log('present');
}
else{
    console.log('not present');
}
console.log('-------------------');
console.log(`emplocation key is ${'emplocation' in employee?'present':'not pesent'}`);

//how to add a key value pair into an object
//object name ["key"]=value

//add experience to the given object employee
employee["experience"]=3
console.log(employee);
console.log('---------------------');

//add 'gender' key in the given employee. if present print 'yes' else add gemder key to the given object with value as male
if('gender' in employee ){
    console.log('yes gender is present');
}
else{
    employee["gender"]='male'
    console.log(employee);
}
console.log('-----------------------');
'gender' in employee? console.log('yes'):(employee["gender"]='male',console.log(employee));

//how to update a value into an object.

employee.age+=5
console.log(employee);
console.log('-------------------');

//how to delete a key and its value method

delete employee.age
console.log(employee);

