(function () {
    'use strict';

    angular.module('bookstore')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['bookService'];

    function BooksController(bookService) {
        var booksPromise = bookService.getBooks();

        booksPromise
            .then(success.bind(this))
            .catch(error);
        function success(result) {
            this.books = result;
        }
        function error(err) {
            console.log('ERROR: ', err)
        }

    }


})();
