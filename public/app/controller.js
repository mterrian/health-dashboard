var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){


});

app.controller('dashboardCtrl', function($scope, $timeout, $location, healthFactory){
    
        $scope.userObject = healthFactory.getLogin();   
        
        $scope.go = function(path){
          healthFactory.setPrevCare();
            $location.path(path)
        }

        $scope.userCare=healthFactory.getPrevCare()

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