(function () {
    'use strict';

    beforeEach(module('bookstore'));

    angular.module('bookstore')
        .controller('BooksController', BooksController);

    function BooksController() {
        this.books = [{title:'Best Book Ever'}];
    }

    var bookCtrl;

    beforeEach(inject(function ($injector) {
        var $controller = $injector.get('$controller');
        bookCtrl = $controller('BooksController');
    }));

    it('should exist', function () {
        expect(bookCtrl).toBeDefined();
    });
    it('should have books', function () {
        expect(bookCtrl.books).toBeDefined();
    });
    it('should have some books', function () {
        expect(bookCtrl.books.length > 0).toBeTruthy();
    });

})();