var app = angular.module('expedia.hotels', [])

app.controller('expediaController', function ($scope,expediaService) {
	$scope.hotels = [];
	$scope.countrys = [];
	$scope.getDeals = function () {	
		expediaService.getDeals ().then(function (hotels) {
			for (var i = 0; i < hotels.length; i++) {
      hotels[i].hotelUrls.hotelInfositeUrl=decodeURIComponent(hotels[i].hotelUrls.hotelInfositeUrl)
      if($scope.countrys.indexOf(hotels[i].destination.country)===-1){
        $scope.countrys.push(hotels[i].destination.country)
      }
    }
			$scope.hotels = hotels
		});
	};
});
// use filter to decode URLs
app.filter('decodeURIComponent', function() {
	return window.decodeURIComponent;
});

