// explaining prototype

// in javascript every thing is object beacause object protpertise is attached.
// to  add property from one to another 

let obj1 = {
    name:"sagar",
    add:"bhandara"
}
let obj = {
    phone:9096519472,
    last_name: "Suryawanshi"
}
console.log(Object.setPrototypeOf(obj1,obj))





// creating custom prototoype
function Person(name) {
    this.name = name;
  }


  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  

  const p = new Person('sagar');
  console.log(p)
  p.sayHello();



//  learn from other resourses
  