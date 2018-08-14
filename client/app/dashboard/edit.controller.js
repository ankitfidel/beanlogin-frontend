angular.module('app')
    .controller('EditController', ['$scope','$mdDialog','$rootScope','$http', EditController])


 function EditController($scope,$mdDialog,$rootScope,$http) {


   $scope.closeDialog = function() {

          $mdDialog.hide();
        }
        $scope.onChange = function(cbState) {
          $scope.message = cbState;
        };
    $scope.App_Name = $rootScope.supportedApps;

  $scope.save = function(user) {
    alert(JSON.stringify(user))
    user.App_Name = $rootScope.supportedApps;
        console.log(JSON.stringify(user));
        $scope.closeDialog();
      };

      $scope.cancel = function(user) {
        $scope.closeDialog();
          };
  $scope.showGmail = function(ev,appname) {

    $rootScope.app = appname.Affiliate_Apps;


  $mdDialog.show({
      controller: 'EditController',
      templateUrl: '../editApp.html',
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
