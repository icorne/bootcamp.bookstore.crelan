(function () {
    'use strict';

    angular.module('bookstore')
        .config(routing)

    routing.$inject = ['$routeProvider'];

    function routing($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/books.html',
                controller: 'BooksController',
                controllerAs: 'model'
            })
            .when('/books', {
                templateUrl: 'templates/books.html',
                controller: 'BooksController',
                controllerAs: 'model'
            })
            .when('/books/:bookId', {
                templateUrl: 'templates/bookDetails.html',
                controller: 'BooksController',
                controllerAs: 'model'
            })
            .when('/books/add', {
                templateUrl: 'templates/books.html',
                controller: 'BooksController',
                controllerAs: 'model'
            })
            .otherwise('/');
    }
})();
