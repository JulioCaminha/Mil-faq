'use strict';

describe('Controller: ProblemsCtrl', function () {

  // load the controller's module
  beforeEach(module('milfaqApp'));

  var ProblemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProblemsCtrl = $controller('ProblemsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
