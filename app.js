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

    $scope.$watch("sometext", function () {
        nameService.name = $scope.sometext;
    });

}]);

app.controller('secondController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    $scope.pageName = "second";
    $scope.sometext = nameService.name;

    $scope.$watch("sometext", function () {
        nameService.name = $scope.sometext;
    });

    $scope.person = {
        firstName: "Oliver",
        lastName: "Queen",
        age: 14
    };


}]);

app.service("nameService", function () {

    this.name = "Jane Doe";

});


app.directive('myDirective', function () {

    return {
        templateUrl: 'directives/directive.html',
        restrict: 'AECM', // A - attribute, E - element, C - class, M - comment
        replace: true,
        scope: {
            pageName: "@pageName", // making $scope.pageName in controller accessible (one way binding of string) 
            sometext: "@" // or "@sometext" one way binding shorthand
        }
    };
});

// if scope key is not defined at all then it inherits the parent scope ie, the scope of controller that controller this directive


app.directive("youDirective", function () {
    return {
        templateUrl: "directives/secondDirective.html",
        restrict : 'AE',
        replace : true,
        scope : {
            personObject : "=" // or "=person" making $scope.person accesible here. Also this is two way binding. If anything changes personObject then person in secondController scope will also change. So be carefull about it.
    }
    },
})