class Person{ //base class or super class
    constructor(_name){
        this.name=_name;
    }
    show_name(){
        console.log(`The person's name is ${this.name}`)
    }
    
    static staticVariable="I am a static string";

    static compareStudents(a,b){
        return a.grade===b.grade?`${a.name} and ${b.name} are in the same grade`:`${a.name} and ${b.name} are in different grades`
    }

    showInfo(){
        return `This student's name is ${this.name}`
    }

}

class Student extends Person{ //child class or derived class
    constructor(_name,_grade){
        super(_name)
        this.grade=_grade
    }
    showGrade(){
        return `${this.name} is in grade ${this.grade}`
    }
    showInfo(){
        super.showInfo()
        return `This student is in grade ${this.grade}`
    }

}
const student1=new Student("Aubin",11);

const student2=new Person("Ntwali");

// console.log(student1.showGrade())
// console.log(Student.compareStudents(student1,student2))
// console.log(student2.grade)
console.log(student1.showInfo());
// console.log(student2.showInfo());



// person1.show_name()

