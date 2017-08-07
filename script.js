var app =  angular.module('appController',['restangular'])

app.config( function ( RestangularProvider ) {
    RestangularProvider.setBaseUrl('https://reqres.in/api')
    RestangularProvider.addResponseInterceptor(function ( data ,operation) {
        var extractedData ;

        if( operation === "getList"  )
        {
            extractedData = data.data.data ;
            return extractedData ;
        }
        else
        {
            extractedData = data.data;
            return  extractedData ;
        }
    })


} )

app.controller('getAllDetailsCtrl',function ($scope , Restangular) {

    Restangular.one('users',2).get().then(function (results) {
        console.log(results);
        $scope.records = results;
    })

    Restangular.all('users').customGET().then(function (results2) {
        console.log(results2.plain());
        $scope.userData = results2.plain();
    })



})

