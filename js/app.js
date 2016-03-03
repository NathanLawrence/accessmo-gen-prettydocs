(function(){
	console.log('activated');

	var prettify = angular.module('prettify', []);

	prettify.controller('TableController', function TableController($scope, $http){
		$http.get('tables.json').success(function(data){
			$scope.tables = data;
		});
	});

})();