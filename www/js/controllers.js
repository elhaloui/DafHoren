angular.module('app.controllers', ['app.filters'])

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
.controller('lektionCtrl', function($http,$scope,$stateParams,$filter,$ionicPopup) {
  $http.get('res/'+$stateParams.lektionId+'/'+$stateParams.lektionId+'.json').then(function(response){
 // get parts data from json file for more extensibilite
$scope.lektion=response.data;
// filter track url to add compatiblity to differenets platform
$scope.lektion.tracks.map(function(track)
{
  track.url=$filter('platform_asset')(track.url);
  track.transkript=$filter('format_transkript')(track.transkript)
  return track;

});
}, function(error){
     //there was an error fetching from the server
     console.log(error);
     $scope.lektion={};
     $scope.lektion.traks=[]


 });

$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    templateUrl: 'templates/translate.html',
    title: 'Translate',
    scope: $scope,
    buttons: [
      { text: 'Cancel',
        type: 'button-assertive' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {

        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 $scope.tap=function(event){
$scope.word=angular.element(event.target).html();
$scope.showPopup();
 console.log(angular.element(event.target).html());

 };



})
