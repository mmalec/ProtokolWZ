'use strict';

/* Directives */


angular.module('myApp.directives', []).
        directive('appVersion', ['version', function(version) {
                return function(scope, elm, attrs) {
                    elm.text(version);
                };
            }]);

app.directive("appheader", function() {
    return {
        templateUrl: "tpls/header.html"
    };
});

app.directive("protokulMenu", function() {
    return {
        controller: protokulMenu,
        templateUrl: "tpls/protokul_menu.html"
    };
});

app.directive("protokolMenuPasek", function() {
    return {
        controller: (protokulMenu),
        templateUrl: "tpls/protokol_menu_pasek.html"
    };
});


function protokulMenu($rootScope, $location, $anchorScroll) {

    
    

}