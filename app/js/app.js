'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
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
                        .otherwise({redirectTo: '/view1/'});
            }]);


app.run( function($rootScope) {
    var protokul = {
    nazwa:"Moja nazwa",
    objekt:{
            id:"1"
    }
}

    var db = new PouchDB('protocols');
    db.put({
        _id: 'mydoc',
        title: 'Heroes'
    }, function(err, response) {
    });

    db.put({
        _id: 'mydoc',
        _rev: '1-A6157A5EA545C99B00FF904EEF05FD9F',
        title: 'Lets Dance',
    }, function(err, response) {
    })

    db.info(function(err, info) {
        console.log(info.db_name);
    });
    $rootScope.db=db
    
    $rootScope.protokul = protokul;
    


})
