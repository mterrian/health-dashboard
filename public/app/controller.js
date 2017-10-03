var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){


});

app.controller('dashboardCtrl', function($scope, $timeout, $location, healthFactory){
    
        

        $scope.userObject = healthFactory.getLogin();   
        
        $scope.go = function(path){
            $location.path(path)
        }
        $scope.userCare=healthFactory.getPrevCare()

        $scope.date=healthFactory.getDate();

});

app.controller('loginCtrl', function($scope, $timeout, $location, healthFactory){
    
    $scope.time = healthFactory.setDate();

    $scope.submitWords=function(userInfo){
        healthFactory.setPrevCare();
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