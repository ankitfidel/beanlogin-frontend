(function () {
    'use strict';

    angular.module('app')
        .controller('creativeCtrl', ['$scope','$http','$mdDialog','Upload','$timeout','$location', creativeCtrl])

    function creativeCtrl($scope,$http,$mdDialog,Upload,$timeout,$location) {
    	$scope.selected = [];
        $scope.limitOptions = [5, 10, 15];
        $http.get('https://demo4239408.mockable.io/getCreativeList')
        .then(function(response) {
         $scope.data = response.data;
          console.log(response.data)
        });
        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };
        
        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
        
        $scope.desserts = {
            "count": 9,
            "data": [
                {
                    "name": "Frozen yogurt",
                    "type": "Ice cream",
                    "calories": { "value": 159.0 },
                    "fat": { "value": 6.0 },
                    "carbs": { "value": 24.0 },
                    "protein": { "value": 4.0 },
                    "sodium": { "value": 87.0 },
                    "calcium": { "value": 14.0 },
                    "iron": { "value": 1.0 }
                }, {
                    "name": "Ice cream sandwich",
                    "type": "Ice cream",
                    "calories": { "value": 237.0 },
                    "fat": { "value": 9.0 },
                    "carbs": { "value": 37.0 },
                    "protein": { "value": 4.3 },
                    "sodium": { "value": 129.0 },
                    "calcium": { "value": 8.0 },
                    "iron": { "value": 1.0 }
                }, {
                    "name": "Eclair",
                    "type": "Pastry",
                    "calories": { "value":  262.0 },
                    "fat": { "value": 16.0 },
                    "carbs": { "value": 24.0 },
                    "protein": { "value":  6.0 },
                    "sodium": { "value": 337.0 },
                    "calcium": { "value":  6.0 },
                    "iron": { "value": 7.0 }
                }, {
                    "name": "Cupcake",
                    "type": "Pastry",
                    "calories": { "value":  305.0 },
                    "fat": { "value": 3.7 },
                    "carbs": { "value": 67.0 },
                    "protein": { "value": 4.3 },
                    "sodium": { "value": 413.0 },
                    "calcium": { "value": 3.0 },
                    "iron": { "value": 8.0 }
                }, {
                    "name": "Jelly bean",
                    "type": "Candy",
                    "calories": { "value":  375.0 },
                    "fat": { "value": 0.0 },
                    "carbs": { "value": 94.0 },
                    "protein": { "value": 0.0 },
                    "sodium": { "value": 50.0 },
                    "calcium": { "value": 0.0 },
                    "iron": { "value": 0.0 }
                }, {
                    "name": "Lollipop",
                    "type": "Candy",
                    "calories": { "value": 392.0 },
                    "fat": { "value": 0.2 },
                    "carbs": { "value": 98.0 },
                    "protein": { "value": 0.0 },
                    "sodium": { "value": 38.0 },
                    "calcium": { "value": 0.0 },
                    "iron": { "value": 2.0 }
                }, {
                    "name": "Honeycomb",
                    "type": "Other",
                    "calories": { "value": 408.0 },
                    "fat": { "value": 3.2 },
                    "carbs": { "value": 87.0 },
                    "protein": { "value": 6.5 },
                    "sodium": { "value": 562.0 },
                    "calcium": { "value": 0.0 },
                    "iron": { "value": 45.0 }
                }, {
                    "name": "Donut",
                    "type": "Pastry",
                    "calories": { "value": 452.0 },
                    "fat": { "value": 25.0 },
                    "carbs": { "value": 51.0 },
                    "protein": { "value": 4.9 },
                    "sodium": { "value": 326.0 },
                    "calcium": { "value": 2.0 },
                    "iron": { "value": 22.0 }
                }, {
                    "name": "KitKat",
                    "type": "Candy",
                    "calories": { "value": 518.0 },
                    "fat": { "value": 26.0 },
                    "carbs": { "value": 65.0 },
                    "protein": { "value": 7.0 },
                    "sodium": { "value": 54.0 },
                    "calcium": { "value": 12.0 },
                    "iron": { "value": 6.0 }
                }
            ]
        };
        
        $scope.editComment = function (event, dessert) {
            event.stopPropagation(); // in case autoselect is enabled
            
            var editDialog = {
                modelValue: dessert.comment,
                placeholder: 'Add a comment',
                save: function (input) {
                    if(input.$modelValue === 'Donald Trump') {
                        input.$invalid = true;
                        return $q.reject();
                    }
                    if(input.$modelValue === 'Bernie Sanders') {
                        return dessert.comment = 'FEEL THE BERN!'
                    }
                    dessert.comment = input.$modelValue;
                },
                targetEvent: event,
                title: 'Add a comment',
                validators: {
                    'md-maxlength': 30
                }
            };
            
            var promise;
            
            if($scope.options.largeEditDialog) {
                promise = $mdEditDialog.large(editDialog);
            } else {
                promise = $mdEditDialog.small(editDialog);
            }
            
            promise.then(function (ctrl) {
                var input = ctrl.getInput();
                
                input.$viewChangeListeners.push(function () {
                    input.$setValidity('test', input.$modelValue !== 'test');
                });
            });
        };
        
        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };
        
        $scope.getTypes = function () {
            return ['Candy', 'Ice cream', 'Other', 'Pastry'];
        };
        
        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
                // loading
            }, 2000);
        }
        
        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };
        
        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };
        
        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }
        $scope.initAddCreative = function(){
        	
        	
        	
        }
        $scope.EditCreativeFunction = function(mode,data){
        	
        	$scope.name = data.name;
        	console.log("EditCreativeFunction---"+$scope.name);
        	$scope.description = data.description;
        	$scope.url = data.url;
            $mdDialog.show({
            	
      	       controller: addCreativeController,
      	       templateUrl: '../app/creative/addCreative.html',
      	       parent: angular.element(document.body),
      	       clickOutsideToClose: true,
      	       scope: $scope,
      	       preserveScope: true,
      	       fullscreen: true
      	   });
            
           }
        
        
  $scope.pageads = function(id){
	
        $location.url("/app/creativeads/"+id)
           }
        $scope.AddCreativeFunction = function(mode){
        	$scope.name='';
        	$scope.description='';
        	$scope.url='';
        $mdDialog.show({
        	
  	       controller: addCreativeController,
  	       templateUrl: '../app/creative/addCreative.html',
  	       parent: angular.element(document.body),
  	       clickOutsideToClose: true,
  	       scope: $scope,
  	       preserveScope: true,
  	       fullscreen: true
  	   });
        
       }
        
        $scope.uploadFile = function(files) {
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", files[0]);

          /*  $http.post(uploadUrl, fd, {
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            }).success( "...all right!..." ).error( "..damn!..." );*/

        };
        $scope.uploadFiles = function(file, errFiles) {
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                        console.log(file.result)
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 * 
                                             evt.loaded / evt.total));
                });
            }   
        }
       $scope.createCreative = function(creative){
    	   alert(JSON.stringify(creative));
    	   var creative = {
    	    	     name: creative.name,
    	    	     description:creative.description,
    	    	     url:creative.url,
    	    	     image:creative.image
    	    	   };
    	   
    	   console.log("----------------------"+creative)
    	   alert(creative.image)
       }
    }
  function addCreativeController($scope,$http) {
    	
    }

})();
