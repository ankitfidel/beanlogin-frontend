(function () {
    'use strict';

    angular.module('app')
        .controller('creativeAdsCtrl', ['$scope','$stateParams', creativeAdsCtrl])

    function creativeAdsCtrl($scope, $stateParams) {
    	 $scope.id = $stateParams.id;
    }
  

})();
