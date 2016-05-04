angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('translateService', ['$http',function($http){
console.log('here');
console.log($http);
this.translteThis=function(word,src,trg)
{
   // get translation from google api

  var api_url='https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&q=test&sl='+src+'&tl'+trg+'&q=encodeURI('+word+')';
  var url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=ar&dt=t&q=encodeURI(land)';
  console.log(url);
  $http.get(url).then(function(response){
  console.log(response);
 }, function(error){
     //there was an error fetching from the server
    console.log(error);
});
};
}]);

// https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=ar&dt=t&q=encodeURI(test);
