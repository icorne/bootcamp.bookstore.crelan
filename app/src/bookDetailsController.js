(function () {
    angular.module('bookstore')
        .controller('BookDetailsController', BookDetailsController);

    BookDetailsController.$inject = ['$routeParams', 'bookService'];

    function BookDetailsController($routeParams, bookService) {
        var bookId = $routeParams.bookId;
        this.book = bookService.getBookById(bookId);
    }
})();