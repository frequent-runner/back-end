//oops

class Employee{

    //property
    empName
    empDesig
    empLocation
    empSalary

    //constructor
    constructor(ename,eDesig,empLo,empsal){
        this.empName=ename
        this.empDesig=eDesig
        this.empLocation=empLo
        this.empSalary=empsal

    }
     //methods
     display(){
        console.log(`employee name is ${this.empName}`);
    }
}

//object

const obj=new Employee('neel','developer','kochi',25000)
obj.display()

const obj1=new Employee('max','hr','trivandrum',30000)
obj1.display()
