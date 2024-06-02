class A{
    methods(...arg){
        console.log(arg);
        console.log(arg.reduce((n1,n2)=>n1+n2));
    }

}
const obj=new A()
obj.methods(5,10)