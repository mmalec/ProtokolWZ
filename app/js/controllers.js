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
        .controller('PodstawaPrawnaCtrl', PodstawaPrawnaCtrl)
        .controller('RodzajKontroliCtrl', RodzajKontroliCtrl)
        .controller('ObjektyListaCtrl', ObjektyListaCtrl)
        .controller('KontrolujacyListaCtrl', KontrolujacyListaCtrl)
        .controller('KontrolujacyNowyCtrl', KontrolujacyNowyCtrl)
        ;


function KontrolujacyEdycjaCtrl($scope, $db, $routeParams, $location, $timeout, $rootScope) {

$scope.zaladowany=false
    $db.get($routeParams.id, function(err, doc) {
        console.log(doc)
        if (err == null) {
           
            
                //alert("dziala")
                var _kontrolujacy = angular.fromJson(doc)
                var stan = _kontrolujacy.valid;
                _kontrolujacy.valid=stan;
                 $rootScope.kontrolujacy = _kontrolujacy
                 $scope.zaladowany=true
              $scope.$apply()
            }


        }
    )



    $scope.zapisz = function() {

        $scope.kontrolujacy.data_modyfikacji = new Date().toLocaleString();
        // $scope.kontrolujacy.key = "kontrolujacy"
        //  $scope.kontrolujacy.imiona="moje imiona"
        // var record = angular.toJson($scope.protokul);
        $db.put($scope.kontrolujacy, function(errors, response) {
            console.log(errors)
            if (errors === null) {

                $location.path('/kontrolujacy/lista')
                $scope.$apply()
            }
        })


    }
}

function KontrolujacyNowyCtrl($scope, $db, $location) {


    var _kontrolujacy = angular.fromJson(angular.toJson(kontrolujacy))
    $scope.kontrolujacy = _kontrolujacy;
    $scope.uuid = UUID.generate();
    $scope.stopnie = stopnie;

    $scope.zmiana = function() {
        alert("zmiana");
    }




    $scope.zapisz = function() {

        $scope.kontrolujacy._id = $scope.uuid;
        //  $scope.kontrolujacy._key='kontrolujacy';
        $scope.kontrolujacy.data_utworzenia = new Date().toLocaleString();
        $scope.kontrolujacy.data_modyfikacji = new Date().toLocaleString();
        $scope.kontrolujacy.key = "kontrolujacy"
        //  $scope.kontrolujacy.imiona="moje imiona"
        // var record = angular.toJson($scope.protokul);
        $db.put($scope.kontrolujacy, function(errors, response) {
            console.log(errors)
            if (errors === null) {

                $location.path('/kontrolujacy/lista')
                $scope.$apply()
            }
        })


    }

}

function KontrolujacyListaCtrl($scope, $db) {
    function map(doc) {
        if (doc.type == 'kontrolujacy') {
            emit(doc, null);
        }
    }
    $db.query({map: map}, function(err, response) {

        console.log(err)
        // console.log(response)
        var _kontrolujacy = angular.fromJson(response.rows);
        $scope.znalezionych = _kontrolujacy.length
        console.log(_kontrolujacy)

        $scope.lista = _kontrolujacy;
        // console.log($scope.lista)
        $scope.$apply();
    });

    $scope.usun = function(kontrolujacy) {
        $db.info(function(err, info) {
        })
        $db.remove(kontrolujacy, function(err, response) {
            console.log(err)
            if (err == null) {
                $db.query({map: map}, function(err, response) {

                    console.log(err)
                    // console.log(response)
                    var _kontrolujacy = angular.fromJson(response.rows);
                    $scope.znalezionych = _kontrolujacy.length
                    console.log(_kontrolujacy)

                    $scope.lista = _kontrolujacy;
                    // console.log($scope.lista)
                    $scope.$apply();
                });
                $scope.$apply();

            }
        })

    }

}

function ProtokolEdytujCtrl($rootScope, $scope, $db, $routeParams, $location, $timeout) {


    $scope.komunikat = 'Ładowanie protokołu...'
    $scope.uuid = $routeParams.id;
    $scope.adres = $location.absUrl();
    $db.get($routeParams.id, function(errors, doc) {
        $rootScope.protokul = angular.fromJson(doc)
        // $scope.liczba_art = $rootScope.protokul.przepisy.length;
        $scope.odnosniki = $rootScope.protokul.dane;
        console.log($scope.odnosniki)
        $scope.wybrany = $scope.odnosniki[0]
        $scope.poprzedni = $scope.odnosniki[$scope.odnosniki.indexOf($scope.wybrany_odnosnik) - 1];
        $scope.nastepny = $scope.odnosniki[$scope.odnosniki.indexOf($scope.wybrany_odnosnik) + 1]
        $scope.$apply();

    })

    $scope.klick = function(odnosnik) {
        $scope.wybrany = null;
        //$scope.$apply();
        //alert('dziala')
        $timeout(function() {


            angular.forEach($rootScope.protokul.dane, function(odnosnik) {
                odnosnik.aktywny = false;
                console.log('zmianiam na flase');
            });
            odnosnik.aktywny = true;
            $scope.wybrany = odnosnik;
            $scope.poprzedni = $rootScope.protokul.dane[$rootScope.protokul.dane.indexOf(odnosnik) - 1];
            $scope.nastepny = $rootScope.protokul.dane[$rootScope.protokul.dane.indexOf(odnosnik) + 1]
        }, 0);
    }


}



function  ProtokolNowyCtrl($scope, $db, $log, $location) {
    $scope.protokul = protokul;
    $scope.uuid = UUID.generate();
    $scope.zapisz = function() {
        $log.info('Zapis protokołu')
        $scope.protokul._id = $scope.uuid
        $scope.protokul.data_utworzenia = new Date().toLocaleString();
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
    });
}
;


function PodstawaPrawnaCtrl($scope) {

    $scope.czy_dodac_wlasne = false;
    var przepis = {
        nazwa: '',
        wybrany: false,
        wymagany: false,
        dodany: true
    };



    $scope.dodajPrzepis = function() {
        //alert('dziala')
        $scope.wybrany.przepisy.push($scope.przepis);
        $scope.przepis = przepis.constructor();
        $scope.czy_dodac_wlasne = false;
        $scope.edycjaPrzepisu = false;
    }

    $scope.usunPrzepis = function(przepis) {
        var index = $scope.wybrany.przepisy.indexOf(przepis);
        $scope.wybrany.przepisy.splice(index, 1);
    }

    $scope.blurPrzepis = function(valid) {
        //alert('blur'+valid)
        if (valid === false) {
            $scope.przepis.nazwa = startyTytulPrzepisu;
        }
        $scope.edycjaPrzepisu = false;
    }

    $scope.klickChceDodac = function() {
        $scope.przepis = przepis.constructor();
        $scope.przepis.dodany = true;
    }

    var startyTytulPrzepisu = "";

    $scope.edytujPrzepis = function(przepis) {
        $scope.edycjaPrzepisu = true;
        startyTytulPrzepisu = przepis.nazwa;
        $scope.przepis = przepis;
    }

    $scope.klickArtykul = function(artykul) {
        //alert('dziala')
        console.log(artykul.wybrany)
        if (artykul.wybrany === false) {
            angular.forEach(artykul.paragrafy, function(paragraf) {
                paragraf.wybrany = false;
                paragraf.wymagany = false;
                console.log("p wybrany:" + paragraf.wybrany)
                console.log("p wymagany:" + paragraf.nazwa + "" + paragraf.wybrany)
            });
        }

        if (artykul.wybrany === true) {
            angular.forEach(artykul.paragrafy, function(paragraf) {
                // paragraf.wybrany = false;
                paragraf.wymagany = true;
                console.log("p:" + paragraf.wybrany)
                console.log("p wymagany po zmianie na t:" + paragraf.nazwa + "" + paragraf.wymagany)
            });
        }

        angular.forEach($scope.wybrany.przepisy, function(artykul) {
            console.log(artykul.nazwa + artykul.wymagany)
            console.log("sprawdzam " + artykul.nazwa + "=" + artykul.wymagany)
            if (artykul.wybrany === true) {
                czy_jest_wybrany_art = true;
                var czy_jest_wybrany_paragraf = false;
                angular.forEach(artykul.paragrafy, function(paragraf) {
                    if (paragraf.wybrany === true) {
                        czy_jest_wybrany_paragraf = true;
                    }
                })
                if (czy_jest_wybrany_paragraf === true) {
                    angular.forEach(artykul.paragrafy, function(paragraf) {
                        paragraf.wymagany = false;
                    });
                }
                if (czy_jest_wybrany_paragraf === false) {
                    angular.forEach(artykul.paragrafy, function(paragraf) {
                        paragraf.wymagany = true;
                    });
                }

            }



        });

        if (czy_jest_wybrany_art === true) {
            console.log("jest wybrany:" + czy_jest_wybrany_art)
            angular.forEach($scope.wybrany.przepisy, function(artykul) {

                artykul.wymagany = false;
                console.log("sprawdzam po zmianie wymagany" + artykul.nazwa + "=" + artykul.wymagany)
            })
        }
        if (czy_jest_wybrany_art === false) {
            console.log("jest wybranyII:" + czy_jest_wybrany_art)
            angular.forEach($scope.wybrany.przepisy, function(artykul) {
                artykul.wymagany = true;
            });
        }
        czy_jest_wybrany_art = false

    };
}


function RodzajKontroliCtrl($scope, $rootScope) {
    //alert('dziala');

    $scope.edycjaRodzajuKontroli = false;

    $scope.klickChceDodac = function(nowyRodzaj) {
        $scope.rk = {
            nazwa: '',
            wybrany: false,
            wymagany: false,
            dodany: true
        }
    }

    $scope.dodajRodzajKontroli = function() {
        $scope.wybrany.rodzaje_kontroli.push($scope.rk);
        $scope.czy_dodac_wlasne = false
    }

    $scope.edytujRodzajKontroli = function(rk) {
        $scope.edycjaRodzajuKontroli = true;
        $scope.staraNazwa = rk.nazwa;
        $scope.rk = rk;
    }

    $scope.blurRodzajKontroli = function(valid) {

        if (valid === false) {
            $scope.rk.nazwa = $scope.staraNazwa;

        }
        $scope.edycjaRodzajuKontroli = false
    }

    $scope.usunRodzajKontroli = function(rk) {
        var index = $scope.wybrany.rodzaje_kontroli.indexOf(rk)
        $scope.wybrany.rodzaje_kontroli.splice(index, 1);
    }


    $scope.klickRodzajKontroli = function(rodzajKontroli) {

        var czy_jest_wybrany = false;
        angular.forEach($scope.wybrany.rodzaje_kontroli, function(rk) {
            //  console.log('sprawdzany ' + rk.nazwa)
            if (rk.wybrany === true) {
                //  console.log("wybrany " + rk.nazwa)
                czy_jest_wybrany = true;
                return

            }
        })


        if (czy_jest_wybrany === true) {
            angular.forEach($scope.wybrany.rodzaje_kontroli, function(rk) {

                if (rk.wybrany === true) {
                    rk.wymagany = true;
                }
                else {
                    rk.wymagany = false;
                }
            })

        }
        console.log('wybrany ' + czy_jest_wybrany)
        if (czy_jest_wybrany === false) {
            angular.forEach($scope.wybrany.rodzaje_kontroli, function(rk) {
                rk.wymagany = true;
            })

        }


    }

}

function ObjektyListaCtrl($scope, $rootScope) {

}