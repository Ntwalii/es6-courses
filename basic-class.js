class Person{
    constructor(_name){
        this.name=_name;
    }
    show_name(){
        console.log(`The person's name is ${this.name}`)
    }
}

const person1=new Person("Aubin")

person1.show_name()