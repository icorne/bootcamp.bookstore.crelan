(function () {
    'use strict';
    angular.module('bookstore')
        .directive('cl-book-detail', bookDetail);

    function bookDetail() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/bookDetails.html',
            controller: 'BookDetailsController',
            controllerAs: 'bookCtrl'
        }

    }

})();