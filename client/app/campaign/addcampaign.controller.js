(function () {
    'use strict';

    angular.module('app')
        .controller('addcampaignCtrl', ['$scope','$http','$mdDialog', addcampaignCtrl])

    function addcampaignCtrl($scope,$http,$mdDialog) {
    	
    	
    	$scope.initAddCamp = function(){
    		
    		$scope.startDate = new Date();
    		$scope.endDate = new Date();
    		
    		$scope.isOpen = false;
    	} 
    	$scope.cancel = function(){
    		$mdDialog.cancel();
    	} 
    	
    	
    	
    }


    


})();
