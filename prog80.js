class Student{

    constructor(id,name,mark){

        this.stid=id
        this.stname=name
        this.stmark=mark
        this.studentDisplay()
    }
    studentDisplay(){
        console.log(`student details: id is ${this.stid} name:${this.stname},mark is:${this.stmark}`);
    }
}

const st1 = new Student(1,'manu',100)
const st2 = new Student(2,'anu',90)
const st3 = new Student(3,'priya',60)