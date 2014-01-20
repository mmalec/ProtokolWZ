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
        .controller('ProtokolyCtrl', function($scope, $timeout, $db) {

           $db.allDocs({include_docs: true}, function(err, response) { 
           console.log(err)
           console.log(response)
               var _protokoly = angular.fromJson(response.rows);
              console.log(_protokoly)
               
               $scope.protokoly = _protokoly;
                console.log($scope.protokoly)
               $scope.$apply();
           })
            }




          

      
        )
        .controller('ProtokulNowyCtrl', function($scope, $db, $log, $location) {

            $scope.uuid = UUID.generate();

            $scope.zapisz = function() {
                $log.info('Zapis protokołu')
                $scope.protokul._id = $scope.uuid
                var record = angular.toJson($scope.protokul);
                $db.put($scope.protokul, function(errors, response) {
                    console.log(errors)
                    if (errors === null) {
                        alert('bledy')
                        $location.path('/protokoly')
                        $scope.$apply()
                    }
                })


            }
        })
        ;