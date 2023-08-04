// CLASS METHOD

// class method is function associsted with class  rather than with indivisual object created from class. 
// Static method is class property.So that static method is called with class name.
// to define class method you can use "static" keyword before method declearation.

class classmethod{

#phone;
// this #phone is used to hide value or information for user .

// for further use  you need add "#" before that for 
    constructor(n,a,p){
        this.name = n;
        this.address = a;
        this.#phone = p;
    }



    static cal(number){
        return number * number;``
    }


    display(){
        console.log(this.#phone)
    }
}

const person1 = new classmethod("sagar","Bhandara",9096519472)
console.log(person1)


let result = classmethod.cal(6)
console.log(result)

person1.display()