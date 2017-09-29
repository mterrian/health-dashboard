var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){

});

app.controller('dashboardCtrl', function($scope, $timeout, $location, healthFactory){
    
        $scope.userObject = healthFactory.getLogin();   
        
        $scope.go = function(path){
            $location.path(path)
        }

});

app.controller('loginCtrl', function($scope, $timeout, $location, healthFactory){
    
    $scope.submitWords=function(userInfo){
        console.log("login1")
        healthFactory.checkLogin(userInfo).then(function(){
            $scope.loginError= true;
        });
    };

    $scope.inputType = 'password';
    // Hide & show password function
    $scope.hideShowPassword = function(){
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    };
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };



});