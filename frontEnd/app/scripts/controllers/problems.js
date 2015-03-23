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
    
    $scope.index = function(){
      $scope.problems = problemsFactory.index();
      $scope.sortType = "id";
      $scope.sortReverse = false;
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

  $scope.index();
}])

.controller('ProblemsShowController', ['$scope', '$stateParams', 'problemsFactory', function($scope, $stateParams, problemsFactory) {
  
   

    problemsFactory.show({id: $stateParams.id}).$promise.then(
      //sucess
      function( data ){
        $scope.problem = data;
      },
      //error
      function( error ){
        console.log( error );
      }
    );

    
}])

.controller('ProblemsNewController', ['$scope', '$stateParams','$state', 'problemsFactory',  function($scope, $stateParams, $state ,problemsFactory) {
    
    $scope.problem = {};

    $scope.save = function() {
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

}])

.controller('ProblemsEditController', ['$scope', '$stateParams','$state', 'problemsFactory', function($scope, $stateParams, $state, problemsFactory) {
    
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

    $scope.load();
}]);