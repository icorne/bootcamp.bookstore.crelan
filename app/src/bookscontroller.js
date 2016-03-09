(function(){
	'use strict';

  angular.module('bookstore')
    .controller('BooksController', BooksController);

  BooksController.$inject=['bookService'];

    function BooksController(bookService){
      var booksPromise = bookService.getBooks();

      booksPromise.then(success.bind(this));
      function success(result) {
        this.books = result;
      }
    }


})();
