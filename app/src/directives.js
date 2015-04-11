wikirace.directive('ngWikibubble', function() {
  return {
    restrict: 'E',
    scope: {
      ngWikimg: '@'
    },
    template: '<div class="bubble">{{ngModel}}</div>',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.getTemp = function(title) {}
    }],
    link: function(scope, iElement, iAttrs, ctrl) {
      scope.getTemp(iAttrs.ngWikimg);
    }
  }
});

wikirace.directive('ngWikimg', function() {
  return {
    controller: function($scope){}
  }
})