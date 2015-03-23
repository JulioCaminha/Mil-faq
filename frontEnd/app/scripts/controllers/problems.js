'use strict';

/**
 * @ngdoc function
 * @name milfaqApp.controller:ProblemsCtrl
 * @description
 * # ProblemsCtrl
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')

.controller('ProblemsIndexController', ['$scope', 'problemsFactory', function($scope, problemsFactory) {
    
    $scope.problema_to_destroy = {};

    $scope.index = function(){
      problemsFactory.index().$promise.then(
        function (data) {
          $scope.problems = problemsFactory.index();
          $scope.sortType = "id";
          $scope.sortReverse = false;
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.destroy = function(problem) {
        problemsFactory.destroy({id: problem.id}).$promise.then(
          //sucess
          function( data ){
            console.log( data );
            $scope.index();
          },
          //error
          function( error ){
            console.log( error );
          }
        );
    };

    

  $scope.setProblemaToDestroy = function(id) {
    $scope.problema_to_destroy = id;
  };

  $scope.update = function() {
    $scope.problema.$update({id: $scope.problema.id}).then(
      function( data ) {
        $state.go('problemasIndex');
      },
      function( error ){
        console.log( error );
      }
    );
  };

  $scope.index();
}])

.controller('ProblemsShowController', ['$scope', '$stateParams', 'problemsFactory', 'answersFactory', function($scope, $stateParams, problemsFactory, answersFactory) {
  
    $scope.problem = {};

    $scope.show = function() {
      problemsFactory.show({id: $stateParams.id}).$promise.then(
      //sucess
      function ( data ){
        console.log( data );
        $scope.problem = data;

      },
      //error
      function ( error ){
        console.log( error );
      }
    );
  };

  $scope.answer = function() {
    $scope.resposta = {
      descricao: $scope.problema.resposta,
      usuario_id: $scope.problema.usuario_id,
      problema_id: $scope.problema.id,
    };

    answersFactory.create($scope.resposta).$promise.then(
      function ( data ){
        $scope.show();
        console.log (data); 
      },
      function ( error ){
        console.log (error);

        $scope.problema = {};

        $scope.save = function() {
          $scope.problema.status_id = 1;
          answersFactory.create($scope.problema).promise.then(
            function ( data ) {
              $state.go('problemsIndex');
            })
        }
      }
      );
  };

  $scope.show();
    
}])

.controller('ProblemsNewController', ['$scope', '$stateParams','$state', 'problemsFactory', 'usersFactory', function($scope, $stateParams, $state ,problemsFactory, usersFactory) {
    
    $scope.problem = {};

    $scope.save = function() {
        $scope.problem.status_id = 1;
        problemsFactory.create($scope.problem).$promise.then(
        //sucess
        function( data ){
          console.log( data );
          $state.go('problemsIndex');
        },
        //error
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
        function (data) {
          $scope.usuarios = data
        },
        function (error) {
          console.log(error);
        }
      );
    };

    
    
    


    $scope.load_usuarios();

}])

.controller('ProblemsEditController', ['$scope', '$stateParams','$state', 'problemsFactory', 'usersFactory', function($scope, $stateParams, $state, problemsFactory, usersFactory) {
    
    $scope.problem = {};

    $scope.update = function() {
      console.log($scope.problems);
      $scope.problem.$update({id: $scope.problem.id}).then(
        function( data ) {
          console.log( data );
          $state.go('problemsIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.problem = problemsFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.problem = data;
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
          function (data) {
            $scope.usuarios = data
          },
          function (error) {
            console.log(error);
          }
      );
    };

    $scope.load_usuarios();
    $scope.load();
}]);