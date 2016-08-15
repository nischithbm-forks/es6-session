//Example: method to get square of  a number
var square  =  ( x ) => { return x *  x };
//or
var square = x => x *  x;

//Lexical this
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.showName = function () {
        setTimeout(function(){
            //output empty
            console.log("this.name", this.name);
        })
    }
}
var student1 = new Student("Ajay", 13);
console.log(student1.showName());



function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.showName = function () {
        var that = this;
        setTimeout(function(){
            //output Ajay
            console.log("this.name", that.name);
        })
    }
}
var student1 = new Student("Ajay", 23);
console.log(student1.showName());




function Student(name, marks) {
    this.name = name;
    this.marks = marks;
    this.showName = function () {
        //proper Lexical binding, arrow do not create its own this
        setTimeout( () => { console.log("this.name", this.name);})
    }
}
var student1 = new Student("Ajay", 33);
console.log(student1.showName());