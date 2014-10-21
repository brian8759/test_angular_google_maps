var myController = angular.module('appMaps.Controller', []);

myController
.controller('mainCtrl', function($scope, $rootScope, $timeout) {
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
            var geo = { type: "Point", coordinates: [ -105.01621, 39.57422] };
            var ret = {
                //geometry: { type: "Point", coordinates: [ -105.01621, 39.57422] },
                //geometry : geo,
                latitude: latitude,
                longitude: longitude,
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

        var createMarker = function (i, idKey) {
            
            if (idKey == null) {
                idKey = "id";
            }

            var latitude = -90 + (Math.random() * 180);
            var longitude = -90 + (Math.random() * 180);
            //var geo = { type: "Point", coordinates: [ -105.01621, 39.57422] };
            var ret = {
                //geometry: { type: "Point", coordinates: [ -105.01621, 39.57422] },
                geometry: {
                latitude: latitude,
                longitude: longitude
                },
                title: 'm' + i,
                text: "This is a test Tweet!",
                show: false
            };
            ret[idKey] = i;
            return ret;
        };

        $scope.randomMarkers_1 = [];
        var markers = [];
        for (var i = 0; i < 100; i++) {
            markers.push(createMarker(i))
        }
        $scope.randomMarkers_1 = markers;

        $timeout(function() {
            console.log("Sencond Batch!");
            $scope.randomMarkers_2 = [];
            var markers = [];
            for (var i = 0; i < 100; i++) {
                markers.push(createMarker(i))
            }
            $scope.randomMarkers_2 = markers;
        }, 3000);

        $timeout(function() {
            console.log("Third Batch!");
            $scope.randomMarkers_3 = [];
            var markers = [];
            for (var i = 0; i < 100; i++) {
                markers.push(createMarker(i))
            }
            $scope.randomMarkers_3 = markers;
        }, 6000);
        /*
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
        */  
        // we can define events for cluster
        $scope.clusterEvents = {
            mouseover: function (cluster, clusterModels) {
                    alert("Cluster Models: clusterModels: " + JSON.stringify(clusterModels));
            }
        };
        // events for single marker
        $scope.markersEvents = {
            click: function (marker) {
                console.log("click");
                marker.show = true;
                $scope.$apply();
            },
            mouseover: function (marker) {
                console.log("mouseover");
                marker.show = true;
                $scope.$apply();
            },
            // we can define different mouse events to fire different handlers
            // for example, single click will show only the text part of the tweet
            // double click will show all the detail information of this tweet
            /*
            mouseover: function (gMarker, eventName, model) {
                    model.show = true;
                    $scope.$apply();
                    //alert("Model: event:" + eventName + " " + JSON.stringify(model));
            },
            */
            dblclick: function (marker) {
            alert("Double Clicked!");
            }
        };
    });
