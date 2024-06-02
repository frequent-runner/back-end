class A {
    methoda() {
        console.log(`inside method a function`);
    }
}
class B extends A {
    methodb() {
        console.log(`inside method b function`);
    }
}
class C extends B {
    methodc() {
        console.log(`inside method c function`);
    }
}
const obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()