wikirace.directive('ngWikibubble', function() {
  return {
    restrict: 'A',
    require: '^ngModel',
    scope: {
      ngModel: '='
    },
    template: '<div class="bubble">{{ngModel}}</div>'
  }
})