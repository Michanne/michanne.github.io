require.config({
	paths: {
		angular: 'angular.min.js',
		jquery: 'jquery-1.11.1.min.js',
		app: 'app'
	},
	shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },   
    }
});