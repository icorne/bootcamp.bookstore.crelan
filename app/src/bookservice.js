(function () {
    'use strict';
    angular.module('bookstore')
        .service('bookService', bookService);

    bookService.$inject = ['$q', '$http'];

    function bookService($q, $http) {


        function getBookById(bookId) {
            var deferred = $q.defer();
            var bookPromise = $http.get('/api/books/' + bookId);
            bookPromise.then(success);
            function success(response) {
                deferred.resolve(response.data);
            }
            return deferred.promise;

        }

        function getBooks() {
            var deferred = $q.defer();
            var booksPromise = $http.get('/api/books');
            booksPromise.then(success);
            function success(response) {
                deferred.resolve(response.data);
            }

            return deferred.promise;
        }

        return {
            getBooks: getBooks,
            getBookById: getBookById
        };
    }
})()