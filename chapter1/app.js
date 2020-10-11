(function(){
  'use strict';
  angular.module('Food Intake',[])
  .controller('myController',function($scope)
  {
    $scope.items = " ";
    $scope.state = function(){
      return "hello";
    };
    $scope.showIntake = function(){
      if ($scope.items == " "){
        $scope.list = 'Please enter the data first';}
      else if ($scope.items.split(',').length <4){
         $scope.list = 'Enjoy';
      }
    else{
      $scope.list = 'Too much!';
    }
    };
  });
})();
