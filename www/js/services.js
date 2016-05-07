angular.module('app.services', [])
.service('translateService', ['$http','$rootScope',function($http,$rootScope){
this.translteThis=function(word,src,trg)
{
  $rootScope.resultWord='';
   // get translation from google api
  var apiKey='trnsl.1.1.20160507T101338Z.f774a165842606e3.d9a315896fbb85f23dd59e7d6a3f4df96d6624bf';
  var url='https://translate.yandex.net/api/v1.5/tr.json/translate?key=';
  var params='&format=plain&text='+word+'&lang='+src+'-'+trg+'&callback=JSON_CALLBACK';
  $http.jsonp(url+apiKey+params).success(function(data){
    $rootScope.resultWord= data.text;
    console.log(data);
 }).error(function(error){
     //there was an error fetching from the server
     $rootScope.resultWord='kein translte';
});
};
}]);
