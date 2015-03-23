'use strict';

describe('Service: problemsFactory', function () {

  // load the service's module
  beforeEach(module('milfaqApp'));

  // instantiate service
  var problemsFactory;
  beforeEach(inject(function (_problemsFactory_) {
    problemsFactory = _problemsFactory_;
  }));

  it('should do something', function () {
    expect(!!problemsFactory).toBe(true);
  });

});
