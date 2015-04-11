var url = "http://en.wikipedia.org/wiki/";

var getTemp = function(title) {
  $http({
    method: 'GET',
    url: url + title
  }).success(function(data) {
    console.log(data);
  });
}