promises are way to handel asynchornous operation.which are taksks that take some time to to completeand don't block the rest of the code frim running.


Promise Constructor :- 
i) Create a promise means create a promise object nas a two promise resolve and reject.When Asynchornous task complete,call resolve function with result.If there an error occur ,you call reject function with error massege.



.then() and .catch()

ii)We can use .then() method on promise to handel the successful result,and the .catch() method to handel error.The .then() method takes the a function that will be be execuated when the promise is resolved,and the .catch() method takes the function that will be execuated when the promise is rejected. 


Chaning promises
iii) Promises can be chained togethor using multiple .then() call.Each .then() return a new promise 


Async and await

iv) to makes promise code even cleaner and readable,we can use async and await keywords.The Async keyword use bdefore function defination to indicate asynchornous operation.The await keyword is used inside an async function to pause execution untile a promise is resolved.

