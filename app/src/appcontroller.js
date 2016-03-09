(function(){
	'use strict';

  angular.module('bookstore')
    .controller('AppController', AppController)
    AppController.$inject=['config'];

    function AppController(config){
      this.title = config.title;
    }

})();
