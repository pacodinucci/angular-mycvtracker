(function() {
  'use strict';

  angular.module('MyCvTracker.theme.components')
    .directive('baWizard', baWizard);

  /** @ngInject */
  function baWizard() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/theme/components/baWizard/baWizard.html',
      controllerAs: '$baWizardController',
      controller: 'baWizardCtrl'
    }
  }
})();
