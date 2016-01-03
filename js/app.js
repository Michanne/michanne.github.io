(function(){
	var app = angular.module('main', ['ngRoute']);

	var myName = "michanne";

	app.controller('mainController', function(){
		this.githubName = myName;
	});
})();
