(function() {
    'use strict';
    angular.module('bookstore')
        .directive('cl-books', books);

    function books() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/books.html',
            controller: 'BooksController',
            controllerAs: 'model'
        }
    }

})();