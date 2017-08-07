
//controlling the routes of app
var app = angular.module("myApp",["ngRoute","appController" ,"sampleApp" ])

    app.config(function ($routeProvider,$locationProvider ) {

        $locationProvider.hashPrefix('');
        $routeProvider

            .when("/",{
                templateUrl:"./src/pages/page1.html",
                controller : "getAllDetailsCtrl"
            })
            .when("/add",{
                templateUrl:"./src/pages/page2.html",
                controller : "getAllDetailsCtrl"
            })
            .when("/update ",{
                templateUrl : "./src/pages/page3.html",

        })



    })
