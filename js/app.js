(function(){
	var app = angular.module('main', [ ]);

	var myName = "michanne";

	app.controller('mainController', function(){
		this.githubName = myName;
	});
})();
