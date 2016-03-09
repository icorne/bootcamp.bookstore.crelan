(function(){
	'use strict';

  angular.module('bookstore')
    .controller('NavBarController', NavBarController)
    NavBarController.$inject = ['config'];

    function NavBarController(config){
      this.title = config.title;
    }
})();
