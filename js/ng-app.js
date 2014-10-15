angular.module('appMaps', ['google-maps'.ns()])

.controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
});

/*
.controller('mainCtrl', function($scope) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 4 };
    $scope.options = {scrollwheel: false, temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT};
    $scope.showWeather = true;
});
*/