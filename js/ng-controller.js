var myController = angular.module('appMaps.Controller', []);

myController.controller('mainCtrl', ['$scope', function($scope) {
	$scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    $scope.options = {scrollwheel: false};
}]);