requirejs.config({
	paths: {
		angular: 'js/angular.min',
		jquery: 'js/jquery-1.11.1.min',
		app: 'js/app',
		main: 'js/main'
	},
	shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },   
    }
});