// Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

var books = [
    {
      title: "Book 1",
      author: "author 1",
      year: 2005
    },
    {
      title: "Book 2",
      author: "author 2",
      year: 2012
    },
    {
      title: "Book 3",
      author: "author 3",
      year: 2008
    },
    {
      title: "Book 4",
      author: "author 4",
      year: 2015
    }
  ];




  
  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  function filterBooksByYear(books) {
    var filteredBooks = [];
  
    for (var i = 0; i < books.length; i++) {
      if (books[i].year >= 2010) {
        filteredBooks.push({
          title: books[i].title,
          author: capitalizeName(books[i].author),
          year:books[i].year
        });
      }
    }
  
    return filteredBooks;
  }
  
  var filteredBooks = filterBooksByYear(books);
  console.log(filteredBooks);
  
  
  
  