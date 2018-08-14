angular.module('app')
    .controller('DialogController', ['$scope','$mdDialog','$rootScope','$http', DialogController])


 function DialogController($scope,$mdDialog,$rootScope, $http) {

 $scope.closeDialog = function() {

          $mdDialog.hide();
        }

// $scope.status = true;
  $scope.save = function(user) {
//alert(JSON.stringify(user))
    user.App_Name = $rootScope.app;

        console.log(JSON.stringify(user));
        $http.post('https://demo.beanlogin.com/BeanLoginAPI/api/v1/BeanLogin/saveAffiliateApps', user).
         then(function(response) {
           console.log("1");
           console.log("!!!!!!!!!!!"+JSON.stringify(response))
         }, function(response) {});

        $scope.closeDialog();
      };

      $scope.cancel = function(user) {
        $scope.closeDialog();
          };

          $scope.App_Name = $rootScope.app;


  $scope.showAdvanced = function(ev) {

  $mdDialog.show({
      controller: 'DialogController',
      templateUrl: '../myaffiliate.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {


      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
};

}
