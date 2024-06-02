
employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
// print all employee name 
employee.forEach(emp=>{console.log(emp[1]);});

//print total numbers of employee

console.log(`total number of employees :${employee.length}`);


//print developer employee details
employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))


// print details of employee Laisha
console.log('details of laisha');
x=employee.find(emp=>emp[1]=='Laisha')
console.log(x);

//print employee name whose salary>30000
console.log('employees with above 30000 salary');
sal=employee.filter(emp=>emp[4]>30000)
console.log(sal); 

//sort employee based on their salary in descending order
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

//sort employee based on their experience in ascending order
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);

// print the employ name whose have the higest salary

highest=employee.find(emp=>emp[4]>=55000)
console.log(highest[1]);

console.log('lowest salary');
lowest=employee.reduce((emp1,emp2)=>(emp1[4]<emp2[4]?emp1:emp2))
console.log(lowest[1]);

//total salary expense of the company 
console.log('total expense');
exp=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>(sal1+sal2))
console.log(exp);