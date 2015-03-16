angular.module('menu', ['xml'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  })
  .controller('MenuCtrl', function ($scope, $http) {
    $http.get('muhlenberg_dining.xml').success(function (data) {
        console.log(data);
    	if (Array.isArray(data.dining.locations.location)) {
    		$scope.locations = data.dining.locations.location;
    	} else {
    		$scope.locations = data.dining.locations;
    	}
      

    });
  });
