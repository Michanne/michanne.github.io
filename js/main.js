requirejs.config({
	paths: {
		angular: 'angular.min',
		jquery: 'jquery-1.11.1.min',
		app: 'app',
		main: 'main'
	},
	shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },   
    }
});