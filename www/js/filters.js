angular.module('app.filters', [])

.filter('platform_asset', function($ionicPlatform) {
  return function(input){
 return $ionicPlatform.is('android')?'/android_asset/www/' +input : input;
 };
})
.filter('format_transkript',function(){
return function(input){
return input.split('<br>').map(function(line){ return line.split(' ').map(function(word){ return '<span class="word" ng-click="tap($event)" >'+word+'</span>';  }).join(' ');}).join('<br>');
};

})
;
