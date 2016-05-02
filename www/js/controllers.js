angular.module('app.controllers', [])

.controller('partCtrl', function($http,$scope,$stateParams) {
 $http.get('res/'+$stateParams.partId+'.json').then(function(response){
// get parts data from json file for more extensibilite

  $scope.part=response.data;
}, function(error){
    //there was an error fetching from the server
    $scope.parts=[];


});
  console.log('here');
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
.controller('lektionCtrl', function($http,$scope,$stateParams) {
  $http.get('res/'+$stateParams.lektionId+'/'+$stateParams.lektionId+'.json').then(function(response){
 // get parts data from json file for more extensibilite
$scope.lektion=response.data;
}, function(error){
     //there was an error fetching from the server
     console.log(error);
     $scope.lektion={};
     $scope.lektion.traks=[]


 });




})
