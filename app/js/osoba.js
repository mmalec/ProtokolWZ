/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var osoba = {
    id: "",
    type: 'osoba',
    data_utworzenia: '',
    data_modyfikacji: '',
    imiona: '',
    nazwisko: '',
    kod: '',
    miejscowosc: '',
    wojewodztwo: '',
    ulica: '',
    valid: false,
    szablon_edycji: 'szablony/osoby/form.html'

}

function OsobaEdycjaCtrl($scope, $db, $routeParams, $location, $timeout, $rootScope) {

    // $scope.zaladowany = false

    $db.get($routeParams.id, function(err, doc) {
        console.log(doc)
        if (err == null) {


            //alert("dziala")
            var _osoba = angular.fromJson(doc)
            var stan = _osoba.valid;
            _osoba.valid = stan;
            $rootScope.osoba = _osoba
            // $scope.zaladowany = true
            $scope.$apply()
        }
    })

$scope.zamknij = function(){
        $location.path('/osoby/lista')
}


    $scope.zapisz = function() {

        $rootScope.osoba.data_modyfikacji = new Date().toLocaleString();
        // $scope.kontrolujacy.key = "kontrolujacy"
        //  $scope.kontrolujacy.imiona="moje imiona"
        // var record = angular.toJson($scope.protokol);
        $db.put($rootScope.osoba, function(errors, response) {
            console.log(errors)
            if (errors === null) {

                $location.path('/osoby/lista')
                $scope.$apply()
            }
        })


    }
}

function OsobyNowaCtrl($scope, $rootScope, $db, $location) {
    $rootScope.osoba = angular.fromJson(angular.toJson(osoba))
    $rootScope.osoba._id = UUID.generate();
    //$rootScope.osoba.imiona = ''


    $scope.zapisz = function() {

        //$scope.kontrolujacy._id = $scope.uuid;
        //  $scope.kontrolujacy._key='kontrolujacy';
        $scope.osoba.data_utworzenia = new Date().toLocaleString();
        $scope.osoba.data_modyfikacji = new Date().toLocaleString();
        //  $scope.osoba.key = "kontrolujacy"
        //  $scope.kontrolujacy.imiona="moje imiona"
        // var record = angular.toJson($scope.protokol);
        //   angular.forEach(this.lista_, function(k_zlisty) {
        //     if (k_zlisty._id === $rootScope.kontrolujacy._id) {
        //         alert('znaleziony')
        //     }
        //  })
        $db.put($rootScope.osoba, function(errors, response) {
            console.log(errors)
            if (errors === null) {
                $rootScope.osoba._rev = response._rev
                $location.path('/osoby/lista')

                //$modalInstance.close()
                $scope.$apply()
            }
        })


    }
}

function OsobyListaCtrl($scope, $rootScope, $db) {

    function map(doc) {
        if (doc.type == 'osoba') {
            emit(doc, null);
        }
    }

    $scope.usun = function(osoba) {
        //$db.info(function(err, info) {
        //})
        $db.remove(osoba, function(err, response) {
            console.log(err)
            if (err == null) {
                $db.query({map: map}, function(err, response) {

                    console.log(err)
                    // console.log(response)
                    var _osoby = angular.fromJson(response.rows);
                    $scope.znalezionych = _osoby.length
                    console.log(_osoby)
                    $scope.lista=[];
                    angular.forEach(_osoby, function(el) {
                        $scope.lista.push(el.key)
                    })

                    // console.log($scope.lista)
                    $scope.$apply();
                });
                $scope.$apply();
            }
        })

    }

    $db.query({map: map}, function(err, response) {

        console.log(err)
        // console.log(response)
        var _osoby = angular.fromJson(response.rows);
        $scope.znalezionych = _osoby.length
        console.log(_osoby)
        var lista_osob = []
        angular.forEach(_osoby, function(el) {
            lista_osob.push(el.key)
        })
        $scope.lista = lista_osob;
        // console.log($scope.lista)
        $scope.$apply();
    });

}

