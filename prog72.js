// student object- get, add, update, delete.

student={
    name:'abhi',
    rollnumber:7,
    age:9
}
//get
console.log(student['name']);
console.log('------------------------');
//add
student["class"]='seventh standerd'
console.log(student);
console.log('-------------------------');
//update
student.age+=4
console.log(student);
console.log('--------------------------');
//delete
delete student.age
console.log(student);
