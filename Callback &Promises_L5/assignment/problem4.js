// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.



const books = [
    {
        title:"The Great Gatsby",
        author:"F.Scoot Fitzgerld",
        year:1925
    },
    {
        title:"To Kill a Mokingbird",
        author:"Harper Lee",
        year:1960
    },
    {
        title:"Who are You?",
        author:"George Orwell",
        year:1949
    },
    {
        title:"Pride and Pregudice",
        author:"Jane Austen",
        year:1813
    }
];


function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "))
}

function exactTitles(books,callback){
    const titles  = books.map((book) => book.title)
    
    callback(titles)
}

exactTitles(books,logTitles)