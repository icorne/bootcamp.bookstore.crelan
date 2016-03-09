(function () {
    'use strict';

    angular.module('bookstore')
        .config(routing)

    routing.$inject = ['$routeProvider'];

    function routing($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<cl-books></cl-books>'
            })
            .when('/books', {
                template: '<cl-books></cl-books>'
            })
            .when('/books/:id', {
                template: '<cl-book-detail></cl-book-detail>',
            })
            .otherwise('/');
    }
})();
