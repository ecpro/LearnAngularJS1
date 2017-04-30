// define angular module with 'ngRoute' module injection
var app = angular.module('MyApp', ['ngRoute']);

// config the app for SPA routeProvider
app.config(function ($routeProvider) {

    $routeProvider

        .when('/first', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });
});


app.controller('mainController', ['$scope', '$log', function ($scope, $log) {
        $scope.pageName = 'Main';
}]);

app.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
        $scope.pageName = $routeParams.num || 'default';
}]);

