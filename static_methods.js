class Person{
    constructor(_name){
        this.name=_name;
    }
    show_name(){
        console.log(`The person's name is ${this.name}`)
    }
    
    static staticVariable="I am a static string";

    static comparePeople(a,b){
        return a.name===b.name?"Same person":"Different people"
    }
}

const person1=new Person("Aubin")
const person2=new Person("Ntwali")
const person3=new Person("Ntwali")



// person1.show_name()

console.log(Person.staticVariable);
console.log(Person.comparePeople(person1,person2));
console.log(Person.comparePeople(person2,person3));


