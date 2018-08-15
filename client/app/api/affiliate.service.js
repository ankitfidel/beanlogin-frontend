
(function () {
    'use strict';


var app = angular.module('app.api-affiliate', []);

app.factory('dataFactory', function ($http) {



    var factory = {};
    factory.GetAffilatePredefinedApps = function () {
      return $http.get("https://demo.beanlogin.com/BeanLoginAPI/api/v1/BeanLogin/GetAffilatePredefinedApps")
      .then(function(response) {
        return response;
        console.log(response.data)
          //$scope.myWelcome = response.data;
      });
    }
    factory.GetAffilateApps = function () {
      return $http.get("https://demo.beanlogin.com/BeanLoginAPI/api/v1/BeanLogin/GetAffilateApps")
      .then(function(response) {
        return response;
        console.log(response.data)
          //$scope.myWelcome = response.data;
      });
    }
    return factory;

});
})();
