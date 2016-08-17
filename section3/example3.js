//Inheritance
class Student{
    constructor(name){
        this.name = name;
    }
    showName (){
        return this.name
    }
}

class ScienceStudent extends Student{
    constructor(name, subject){
        super (name);
        this.subject = subject;
    }
}

var student1 = new ScienceStudent("Sandeep", "Biology");
console.log("student1.name", student1.showName());