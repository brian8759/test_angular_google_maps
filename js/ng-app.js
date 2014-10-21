angular.module('appMaps', ['appMaps.Controller', 'google-maps'.ns()]);
/*
.controller('mainCtrl', function($scope) {
        var geo = {
            "type": "Point", 
            "coordinates": [51.219053, 4.404418]
            };
        //$scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
});
*/
/*
.controller('mainCtrl', function($scope) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 4 };
    $scope.options = {scrollwheel: false, temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT};
    $scope.showWeather = true;
});
*/
/*
.controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 1, bounds: {}};
        $scope.options = {scrollwheel: false};
        var createRandomMarker = function (i, bounds, idKey) {
            var lat_min = bounds.southwest.latitude,
                lat_range = bounds.northeast.latitude - lat_min,
                lng_min = bounds.southwest.longitude,
                lng_range = bounds.northeast.longitude - lng_min;

            if (idKey == null) {
                idKey = "id";
            }

            var latitude = lat_min + (Math.random() * lat_range);
            var longitude = lng_min + (Math.random() * lng_range);
            var ret = {
                latitude: latitude,
                longitude: longitude,
                title: 'm' + i
            };
            ret[idKey] = i;
            return ret;
        };
        $scope.randomMarkers = [];
        // Get the bounds from the map once it's loaded
        $scope.$watch(function() { return $scope.map.bounds; }, function(nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                var markers = [];
                for (var i = 0; i < 50; i++) {
                    markers.push(createRandomMarker(i, $scope.map.bounds))
                }
                $scope.randomMarkers = markers;
            }
        }, true);
    });
*/
/*
.controller('mainCtrl', function($scope) {
        $scope.map = {
            //center: {latitude: 40.1451, longitude: -99.6680 }, 
            //center: geo,
            center: { type: "Point", coordinates: [-122.377827, 45.619988] },
            zoom: 4, 
            bounds: {}
        };
        $scope.options = {scrollwheel: false};
        var createRandomMarker = function (i, bounds, idKey) {
            var lat_min = bounds.southwest.latitude,
                lat_range = bounds.northeast.latitude - lat_min,
                lng_min = bounds.southwest.longitude,
                lng_range = bounds.northeast.longitude - lng_min;

            if (idKey == null) {
                idKey = "id";
            }

            var latitude = lat_min + (Math.random() * lat_range);
            var longitude = lng_min + (Math.random() * lng_range);
            var ret = {
                geo: { type: "Point", coordinates: [ -105.01621, 39.57422] },
                //latitude: latitude,
                //longitude: longitude,
                title: 'm' + i,
                text: "This is a test Tweet!",
                show: false
            };
            ret.onClick = function() {
                console.log("Clicked!");
                ret.show = !ret.show;
            };
            ret[idKey] = i;
            return ret;
        };
        $scope.randomMarkers = [];
        // Get the bounds from the map once it's loaded
        $scope.$watch(function() { return $scope.map.bounds; }, function(nv, ov) {
            // Only need to regenerate once
            if (!ov.southwest && nv.southwest) {
                var markers = [];
                for (var i = 0; i < 1; i++) {
                    markers.push(createRandomMarker(i, $scope.map.bounds))
                }
                $scope.randomMarkers = markers;
            }
        }, true);
        // we can define events for cluster
        $scope.clusterEvents = {
            mouseover: function (cluster, clusterModels) {
                    alert("Cluster Models: clusterModels: " + JSON.stringify(clusterModels));
            }
        };
        // events for single marker
        $scope.markersEvents = {
            // we can define different mouse events to fire different handlers
            // for example, single click will show only the text part of the tweet
            // double click will show all the detail information of this tweet
            click: function (gMarker, eventName, model) {
                    if(model.id){
                        model = model.coords;//use scope portion then
                    }
                    alert("Model: event:" + eventName + " " + JSON.stringify(model));
                }
        };
    });
*/