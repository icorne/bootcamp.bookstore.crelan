(function () {
    angular.module('bookstore')
        .controller('BookDetailsController', BookDetailsController);

    BookDetailsController.$inject = ['$routeParams', 'bookService'];

    function BookDetailsController($routeParams, bookService) {
        var bookId = $routeParams.bookId;
        var bookPromise = bookService.getBookById(bookId);
        bookPromise.then(success.bind(this));
        function success(response) {
            this.book = response;
        }
    }
})();