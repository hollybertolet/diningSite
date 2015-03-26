angular.module('menu', ['xml'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  })
 
  .controller('MenuCtrl', function ($scope, $http) {
    $http.get('https://bergdining.herokuapp.com/menu.json?location=Wood%20Dining%20Commons').success(function (data) {
        console.log(data);
        $scope.menu = data;
        /*$scope.menu = JSON.parse(data); 
      /* https://bergdining.herokuapp.com/menu.json?location=Wood%20Dining%20Commons */
        
    	/*if (Array.isArray(data.dining.locations.location)) {
    		$scope.locations = data.dining.locations.location;
    	} else {
    		$scope.locations = data.dining.locations;
    	}
      
    */
    });
  });



