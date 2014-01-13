'use strict';

angular.module('controllers')
  .service('helpModel', ['$q', '$http', function ($q, $http) {

      var helpData = null;
      var helpRecordCount = 0;
      var dataLoaded = false;

      this.waitForData = function () {
          return $http.get('api/disclaimer');
      }

      this.getDummyData = function () {
          alert("Dummy alert");
      };

      this.isDataLoaded = function () {
          return dataLoaded;
      };

      this.getRecordCount = function () {
          return helpRecordCount;
      };

      this.getRecordData = function () {
          return helpData;
      };

      this.getDataForTitle = function ($title) {
          alert("Hi" + $title);
      };

  }]);