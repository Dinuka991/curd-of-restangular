var app = angular.module("sampleApp",["ngRoute"])

    app.config(function ($routeProvider,$locationProvider  ) {

        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/sample_go",{
            templateUrl:"./src/sample/sample.html",
            controller : "sampleCtrl"
        })


    })
    app.controller = ("sampleCtrl" , function($scope){
        $scope.message = "sample";
    })