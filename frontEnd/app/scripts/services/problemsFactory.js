'use strict';

/**
 * @ngdoc service
 * @name milfaqApp.problemsFactory
 * @description
 * # problemsFactory
 * Service in the milfaqApp.
 */

angular.module('problemsFactory',[])
.factory('problemsFactory', ['$resource',function ($resource) {
	return $resource('http://0.0.0.0:3000/problemas/:id/.json', { id: '@_id' },
	{
		'create':  { method: 'POST' },
		'index':   { method: 'GET', isArray: true },
		'show':    { method: 'GET', isArray: false },
		'update':  { method: 'PUT' },
		'destroy': { method: 'DELETE' }
	}
);
}]);