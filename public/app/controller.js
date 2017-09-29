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
  
});