'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:UsersControlles
 * @description
 * # UsersControlles
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')

.controller('UsersIndexController', ['$scope', 'usersFactory', function($scope, usersFactory) {
    
    $scope.user_to_destroy = {};

    $scope.index = function(){
      $scope.users = usersFactory.index();
      $scope.sortType = "id";
      $scope.sortReverse = false;
    };

    $scope.destroy = function(user) {
        usersFactory.destroy({id: user.id}).$promise.then(
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

    $scope.setUserToDestroy = function(id) {
      $scope.user_to_destroy = id;
    };

  $scope.index();
}])

.controller('UsersShowController', ['$scope', '$stateParams', 'usersFactory', function($scope, $stateParams, usersFactory) {
  
    usersFactory.show({id: $stateParams.id}).$promise.then(
      //sucess
      function( data ){
        $scope.user = data;
      },
      //error
      function( error ){
        console.log( error );
      }
    );

}])

.controller('UsersNewController', ['$scope', '$stateParams','$state', 'usersFactory', 'profilesFactory', function($scope, $stateParams, $state , usersFactory, profilesFactory) {
    
    $scope.users = {};

    $scope.save = function() {
        usersFactory.create($scope.users).$promise.then(
        //sucess
        function( data ){
          console.log( data );
          $state.go('usersIndex');
        },
        //error
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load_perfis = function() {
      profilesFactory.index().$promise.then(
        function (data) {
          $scope.perfis = data;
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.load_perfis();

}])

.controller('UsersEditController', ['$scope', '$stateParams','$state', 'usersFactory', 'profilesFactory', function($scope, $stateParams, $state, usersFactory, profilesFactory) {
    
    $scope.users = {};

    $scope.update = function() {
      console.log($scope.users);
      $scope.users.$update({id: $scope.users.id}).then(
        function( data ) {
          console.log( data );
          $state.go('usersIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.users = usersFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.users = data;
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load_perfis = function() {
      profilesFactory.index().$promise.then(
        function (data) {
          $scope.perfis = data;
        },
        function (error) {
          console.log(error);
        }
      );
    };
    
    $scope.load_perfis();
    $scope.load();
}]);
