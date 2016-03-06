requirejs.config({
	paths: {
		angular: 'angular.min.js',
		jquery: 'jquery-1.11.1.min.js',
		app: 'app.js',
		main: 'main.js'
	},
	shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },   
    }
});