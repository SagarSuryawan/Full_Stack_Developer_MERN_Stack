// classes
// class constructor introduce as a by ES6 feature
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

const personOne =  new products("Sagar")
console.log(personOne)
personOne.display()