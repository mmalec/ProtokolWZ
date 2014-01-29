'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
  
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.bootstrap'
]).
        config(['$routeProvider', function($routeProvider) {
                $routeProvider
                        .when('/view1/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'})
                        .when('/view2/', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'})
                        .when('/protokoly/', {templateUrl: 'partials/protokoly.html', controller: 'ProtokolyCtrl'})
                        .when('/protokol/edytuj/:id', {templateUrl: 'partials/protokol_edytuj.html', controller: 'ProtokolEdytujCtrl'})
                        .when('/protokol/nowy/', {templateUrl: 'partials/protokol_nowy.html', controller: 'ProtokolNowyCtrl'})
                .when('/objekty', {templateUrl: 'szablony/objekty/lista.html', controller: 'ObjektyListaCtrl'})
                        .otherwise({redirectTo: '/view1/'});
            }]);


app.run(function($rootScope) {
   // $rootScope.protokul = protokul.constructor();

   


})


var log = {
    info: function(msg) {
        console.log(msg)
    }
}



