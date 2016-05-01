angular.module('app.controllers', [])

.controller('partCtrl', function($http,$scope,$stateParams) {
 $http.get('res/'+$stateParams.partId+'.json').then(function(response){
// get parts data from json file for more extensibilite

  $scope.part=response.data;
}, function(error){
    //there was an error fetching from the server
    $scope.parts=[];
});

})
.controller('menuCtrl',function($http,$scope)
{
  $http.get('res/parts.json').then(function(response){
// get parts data from json file for more extensibilite
  $scope.parts=response.data;
}, function(error){
    //there was an error fetching from the server
    $scope.parts=[];
});

}
)
.controller('lektionCtrl',function($http,$scope,$stateParams){
  console.log('here');
 $scope.lektionId=$stateParams.lektionId;


})
