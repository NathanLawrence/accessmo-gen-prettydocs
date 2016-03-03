(function(){
	console.log('activated');

	var prettify = angular.module('prettify', []);

	prettify.controller('TableController', function TableController($scope, $http){
		$http.get('tables.json').success(function(data){
			$scope.tables = data;
			$scope.tblOrderField = "record_count";
		});
	});

	prettify.controller('ColumnController', function ColumnController($scope, $http){
		$http.get('columns.json').success(function(data){
			$scope.columns = data;
		});
	});

})();