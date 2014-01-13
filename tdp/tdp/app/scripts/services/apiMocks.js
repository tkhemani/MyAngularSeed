'use strict';

angular.module('apiMocks', ['ngMockE2E', 'ngResource'])
  .run(function ($httpBackend, $resource) {

    // returns the current list of accounts
    $httpBackend.whenGET('api/myaccounts').respond($resource('mocks/myAccounts.json').get());

    $httpBackend.whenGET('api/help').respond($resource('mocks/help.json').get());
    $httpBackend.whenGET('api/disclaimer').respond($resource('mocks/disclaimer.json').get());
    //  // adds a new phone to the phones array
    //  $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
    //    phones.push(angular.fromJSON(data));
    //  });
    //  $httpBackend.whenGET(/^\/templates\//).passThrough();

    $httpBackend.whenGET().passThrough();
    $httpBackend.whenPOST().passThrough();
  });