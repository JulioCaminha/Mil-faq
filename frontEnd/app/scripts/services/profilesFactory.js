'use strict';

/**
 * @ngdoc service
 * @name milfaqApp.profilesFactory
 * @description
 * # profilesFactory
 * Service in the milfaqApp.
 */

angular.module('profilesFactory',[])
.factory('profilesFactory', ['$resource',function ($resource) {
	return $resource('http://0.0.0.0:3000/perfis/:id/.json', { id: '@_id' },
	{
		'create':  { method: 'POST' },
		'index':   { method: 'GET', isArray: true },
		'show':    { method: 'GET', isArray: false },
		'update':  { method: 'PUT' },
		'destroy': { method: 'DELETE' }
	}
);
}]);