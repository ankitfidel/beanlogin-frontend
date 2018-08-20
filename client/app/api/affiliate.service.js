
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
    factory.readApps = function(id){
      return $http.get("https://demo.beanlogin.com/BeanLoginAPI/api/v1/BeanLogin/GetAffilateAppDetails?id="+ id)
      .then(function(response) {
        return response;
        console.log(response.data)
          //$scope.myWelcome = response.data;
      });
  }
  // update product
factory.updateApps = function($scope){
  var data = $.param({
    App_Name: $scope.App_Name,
    App_Description:$scope.App_Description,
    Username:$scope.Username,
    Password:$scope.Password,
    App_URL:$scope.App_URL,
    Status:$scope.Status
  });
  var config = {
          headers : {
              'Content-Type': 'application/json'
          }
      }
  return $http.post("https://demo.beanlogin.com/BeanLoginAPI/api/v1/BeanLogin/saveAffiliateApps", data)
  .then(function(response) {
    return response;
      //$scope.myWelcome = response.data;
  });
};
    return factory;

});
})();
