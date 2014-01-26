//'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
        controller('MyCtrl1', function($rootScope, $scope, $q, $timeout) {

            var name
            var i = 1
            $scope.laduj = function() {

                //  alert("dziala klick")
                // $scope.name = name;
                var defer = $q.defer();
                alert("timeout")
                //  defer.resolve(function() {
                alert("resolve")
                i = i + 1
                $scope.db.info(function(err, info) {
                    alert("start info")
                    i = i + 1
                    $scope.name = "drugie"
                    $scope.text = "To jest text"
                    $scope.$apply();
                    alert("i " + i)
                    defer.resolve(function() {
                        alert("w resolve")
                    });
                })
                alert("promise " + defer.promise)
                var protokul = $rootScope.protokul;
                //$scope.i = defer.promise
                //   });

                // $timeout(function() {

                // }, 200);

//return defer.promise 


            }
            $scope.name = "trzecie"
            $scope.$watch('pierwszy', function() {
                //alert("zmiana "+ $scope.pierwszy)
            })
            //alert(name)
        })
        .controller('MyCtrl2', [function() {

            }])
        .controller('ProtokolyCtrl', ProtokolyCtrl)
        .controller('ProtokolNowyCtrl', ProtokolNowyCtrl)
        .controller('ProtokolEdytujCtrl', ProtokolEdytujCtrl)
        ;


function ProtokolEdytujCtrl($rootScope, $scope, $db, $routeParams, $location, $anchorScroll) {


    $scope.odnosniki = [
        {'nazwa': 'Informacje podstawowe',
            wybrany: false, path: 'partials/protokolTpls/informacje_podstawowe.html'},
        {'nazwa': 'Podstawa prawna',
            wybrany: false, path: 'partials/protokolTpls/podstawa_prawna.html'},
        {'nazwa': 'Kontrolujący',
            wybrany: false, path: 'partials/protokolTpls/kontrolujacy.html'}
    ]

    $scope.wybrany_odnosnik = $scope.odnosniki[0]
    $scope.poprzedni = $scope.odnosniki[$scope.odnosniki.indexOf($scope.wybrany_odnosnik) - 1];
    $scope.nastepny = $scope.odnosniki[$scope.odnosniki.indexOf($scope.wybrany_odnosnik) + 1]
    $scope.klick = function(odnosnik) {
        //alert('dziala')
        angular.forEach($scope.odnosniki, function(odnosnik) {
            odnosnik.wybrany = false;
        })

        odnosnik.wybrany = true

        // if(odnosnik.archor === true){
        //     $location.hash(odnosnik.cel);
        //$anchorScroll();
        // }
        // $scope.$apply();
        $scope.wybrany_odnosnik = odnosnik
        $scope.poprzedni = $scope.odnosniki[$scope.odnosniki.indexOf(odnosnik) - 1];
        $scope.nastepny = $scope.odnosniki[$scope.odnosniki.indexOf(odnosnik) + 1]
    }



    $scope.komunikat = 'Ładowanie protokołu...'
    $scope.uuid = $routeParams.id;
    $scope.adres = $location.absUrl();
    $db.get($routeParams.id, function(errors, doc) {
        $rootScope.protokul = angular.fromJson(doc)
        $scope.liczba_art=$rootScope.protokul.przepisy.length
        $scope.$apply();
    })

}

function  ProtokolNowyCtrl($scope, $db, $log, $location) {
    $scope.protokul = protokul;
    $scope.uuid = UUID.generate();
    $scope.zapisz = function() {
        $log.info('Zapis protokołu')
        $scope.protokul._id = $scope.uuid
        var record = angular.toJson($scope.protokul);
        $db.put($scope.protokul, function(errors, response) {
            console.log(errors)
            if (errors === null) {

                $location.path('/protokoly')
                $scope.$apply()
            }
        })


    }
}
;

function ProtokolyCtrl($scope, $timeout, $db) {

    $db.allDocs({include_docs: true}, function(err, response) {
        console.log(err)
        console.log(response)
        var _protokoly = angular.fromJson(response.rows);
        $scope.liczba_protokolow = _protokoly.length
        console.log(_protokoly)

        $scope.protokoly = _protokoly;
        console.log($scope.protokoly)
        $scope.$apply();
    })
}
;