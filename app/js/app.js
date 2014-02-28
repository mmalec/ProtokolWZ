'use strict';

var _DB_NAME = 'protocols'

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
                        .when('/protokol/edytuj/:id/:index_odnosnika', {templateUrl: 'partials/protokol_edytuj.html', controller: 'ProtokolEdytujCtrl'})
                        .when('/protokol/nowy/', {templateUrl: 'partials/protokol_nowy.html', controller: 'ProtokolNowyCtrl'})
                        .when('/objekty', {templateUrl: 'szablony/objekty/lista.html', controller: 'ObjektyListaCtrl'})
                .when('/kontrolujacy/nowy', {templateUrl: 'szablony/kontrolujacy/nowy.html', controller: 'KontrolujacyNowyCtrl'})
        .when('/kontrolujacy/edycja/:id', {templateUrl: 'szablony/kontrolujacy/edycja.html', controller: 'KontrolujacyEdycjaCtrl'})
                   .when('/kontrolujacy/lista', {templateUrl: 'szablony/kontrolujacy/lista_osob.html', controller: 'KontrolujacyListaCtrl'})
                              .when('/osoby/lista', {templateUrl: 'szablony/osoby/lista_osob.html', controller: 'OsobyListaCtrl'})
                              .when('/osoby/nowa', {templateUrl: 'szablony/osoby/nowa_osoba.html', controller: 'OsobyNowaCtrl'})

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



