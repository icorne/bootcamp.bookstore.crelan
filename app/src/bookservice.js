(function () {
    'use strict';
    angular.module('bookstore')
        .service('bookService', bookService);

    bookService.$inject = ['$q', '$http'];

    function bookService($q, $http) {


        function getBookById(bookId) {
            var deferred = $q.defer();
            var allBooks = getBooks();
            var book;
            for (var i = 0; i < allBooks.length; i++) {
                var bookEl = allBooks[i];
                if (bookEl.bookID === bookId) {
                    book = bookEl;
                }
            }
            deferred.resolve(book);
            return deferred.promise;

        }

        function getBooks() {
            debugger;
            var deferred = $q.defer();
            var booksPromise = $http.get('/api/books');
            booksPromise.then(success).catch(error);
            function success(response) {
                debugger;
                deferred.resolve(response.data);
            }
            function error(resp) {
                console.log(resp);
            }

            return deferred.promise;
        }

        return {
            getBooks: getBooks,
            getBookById: getBookById
        };
    }
})()