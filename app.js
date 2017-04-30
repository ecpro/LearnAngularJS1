// define angular module with 'ngRoute' module injection
var app = angular.module('MyApp', ['ngRoute']);

// config the app for SPA routeProvider
app.config(function ($routeProvider) {

    $routeProvider

        .when('/first', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });
});


app.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.pageName = 'Main';
    $scope.sometext = nameService.name;
    
    $scope.$watch("sometext", function() {
        nameService.name = $scope.sometext;
    });
    
}]);

app.controller('secondController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.pageName = "second";
    $scope.sometext = nameService.name;
    
    $scope.$watch("sometext", function() {
        nameService.name = $scope.sometext;
    });


}]);

app.service("nameService", function () {

    this.name = "Jane Doe";

});

app.directive('myDirective', function() {
    
    return {
        templateUrl :  'directives/directive.html',
        restrict : 'AECM',  // A - attribute, E - element, C - class, M - comment
        replace : true
//        // below scope create a isolated scope and this directive no longer inherits from controller if there is any for this template
//        scope : {
//            
//        }
    };
});

























