/**
 * Change top "Daily Downloads", "Active Users" values with animation effect
 */
(function () {
    'use strict';

    angular.module('MyCvTracker.theme')
        .directive('loading', loading);

    /** @ngInject */
    function loading($http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };
    }

})();