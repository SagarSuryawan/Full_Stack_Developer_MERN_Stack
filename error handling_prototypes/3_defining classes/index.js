// classes
// class constructor introduce as a by ES6 feature
// classes serves as blueprint for creating objects.Providing a way to organize and structure code.
// Onces we prepeard blueprint ,using that blueprint we can create actual entities.
// blueprint makes entities ,called as Object.
// blueprint called as classes and entitites called as objects.
// behaviour are formed of function.
// 

class products{

    // to add propertise in class just write propertise no need to assign variables 

    name;
    age;
    address;

    // behaviors are in form of function .It is also called menber function.To add behaviour you no need to write funtion keyword,just directly write function name and parameter if needed
    display(){
        console.log("Hi,Sagar")
    }
}


// to store a object or real life entites assign a variable

const personOne =  new products("Sagar",29,"Bhandara")
console.log(personOne)
personOne.display()