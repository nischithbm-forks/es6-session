//Static method
class Student{
    static getSubject() {
        return "computer";
    }
    constructor(name, score){
        this.name = name;
        this.score = score
    }
}
console.log("student subject", Student.getSubject());