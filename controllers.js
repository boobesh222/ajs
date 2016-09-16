angular.module("starter.controllers", ['ngCordova', 'ngResource', 'ionic', 'chart.js'])

.factory('jsonFactory', function($q, $resource) {
    return {
        getJsonDetails: function() {
            alert("service");
            
            var resource = $resource('http://www.json-generator.com/api/json/get/coiSsVnMqG?indent=2');
            var example1 = resource.get();
            console.log(example1);
            alert(example1+"example1");
            
  
            return example1;
        },

        staticobject: function() {
            var staticobject = [{
                "modules": [{
                        "series": "SeriesA",
                        "data": ["90", "99", "80", "91", "76", "75", "60", "67", "59", "55"],
                        "labels": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
                    },

                    {
                        "series": "SeriesB",
                        "data": ["190", "199", "180", "11", "7", "175", "610", "167", "519", "515"],
                        "labels": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
                    }

                ]
            }];


            return staticobject;
        }
    }
})

.controller('contactsController', function($scope, $state, jsonFactory, $ionicPlatform) {
    alert("contacts controller");
    $scope.Contacts = [];


    // var local = jsonFactory.getJsonDetails();
    // console.log(local);

    var resultStatic = jsonFactory.getJsonDetails();
    alert(resultStatic);
    console.log(resultStatic);
    console.log(resultStatic.length);
    $scope.objectvalue = {};
    var seriesname;
    var dataone = [];
    var labelsone = [];
    var datatwo = [];
    var seriestwo = [];
    
    angular.forEach(resultStatic, function(value, key) {
        console.log(key + ': ' + value);
        $scope.objectvalue = value;
        console.log($scope.objectvalue);
    });

    angular.forEach($scope.objectvalue.modules[0], function(value, key) {
        console.log(key + '1:' + value);
        $scope.moduleone = value;
        if (key == 'series') {
            seriesname = value;
            console.log("series name" + seriesname);

        } else if (key == 'data') {
            dataone = value;
            console.log("data values" + dataone);
        } else if (key == 'labels') {
            labelsone = value;
            console.log("labels value" + labelsone);
        }

    });


    angular.forEach($scope.objectvalue.modules[1], function(value, key) {
        console.log(key + '2:' + value);
        $scope.moduletwo = value;
        if (key == 'data') {
            datatwo = value;
            console.log("data values" + datatwo);
        } else if (key == 'series') {
            seriestwo = value;
            console.log("labels value" + seriestwo);
        }

    })


    console.log(seriesname + "  " + dataone + "  " + labelsone + " " + datatwo + " " + seriestwo);

    $scope.labels = labelsone;
    $scope.series = [seriesname, seriestwo];
    $scope.data = [
        dataone,
        datatwo
    ];
    $scope.onClick = function(points, evt) {
        console.log(points, evt);
    };



})