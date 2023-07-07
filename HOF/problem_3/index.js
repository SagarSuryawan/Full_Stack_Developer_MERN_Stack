// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.


let listOfItem = {
    rice:2,
    mango:1.5,
    dry_fruits:8,
    chicken:4
}

  var exchangeRate = 80;
  
 let output = {}

 for(let item in listOfItem){
   console.log(item,":",Math.floor(listOfItem[item]*exchangeRate))
 }



 
  
  
