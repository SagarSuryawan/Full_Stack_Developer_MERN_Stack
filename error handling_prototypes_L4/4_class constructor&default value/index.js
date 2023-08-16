// "new" keyword create new empty object.
// every class has default constructor method or custom constructor method.but only one constructor is will used either default or custom.
// whenever new object created constructor method everytime constructor method is called.
// "this" keyword refers to current object or calling contex.
// "this" keyword has reference in member function.

// SYNTAX

class person{
    constructor(n,a,r){

    this.name = n;
    this.age = a;
    this.resident = r;

    }


    display(){
        console.log(`Hi my name is ${this.name}.I lived in ${this.resident} and my age is ${this.age}`)
    }
    
}

let personOne = new person("sagar",29,"Bhandara")
console.log(personOne)
personOne.display()




// constructor function


// constructor function is special function is used to creat and initialize object.It serves as blueprint for creating object with specific propertise.

function People(n,a,r){
    this.name = n;
    this.age = a;
    this.resident =r;

    this.sayHello = function(){

        console.log(`Hi my name is ${this.name}.My age is ${this.age}`)
    };

}




let peopleOne = new People("sagar",25,"nagpur")
console.log(peopleOne)
peopleOne.sayHello()
