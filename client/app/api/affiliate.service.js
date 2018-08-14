
angular.factory('affiliate', affiliate)

/*@ngInject*/
function affiliate($http, $q) {

    var service = {
        getAffiliateApps: getAffiliateApps,
    }

    return service;

    function hasUser() {
        return true;
    }

    function getAffiliateApps(user) {
      alert()
        var deferred = $q.defer();
        var loginRequest = {
            username: user.name,
            password: user.password
        };
        $http.post('/api/auth/login', loginRequest).then(function success(response) {
            deferred.resolve(response);
        }, function fail(response) {
            deferred.reject(response);
        });
        return deferred.promise;
    }

}
