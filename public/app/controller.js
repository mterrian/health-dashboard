var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){

});

app.controller('dashboardCtrl', function($scope, $timeout, healthFactory){
    
        $scope.userObject = healthFactory.getLogin();     

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

});