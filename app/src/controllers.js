var wikirace = angular.module('wikirace', []);

wikirace.controller('WikiLinksCntrl', function($scope) {
  $scope.pages = [
    "Paris",
    "Tennis",
    "Android",
    "Pomona"
  ];
});