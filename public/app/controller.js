var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory){


});

app.controller('deductibleCtrl', function($scope, $timeout, $location) {
    // $scope.ammountPaid = healthFactory.chartCtrl();
    $scope.amountPaid = function(){
        var chart = document.getElementById("newChart");
        var width = 1;
        var id = setInterval(frame, 100);
        function frame(){
            if (width >= 50) {
                clearInterval(id);
            } else {
                width++;
                console.log(width);
                chart.style.width = width + '%'
            }
        }
    }
});


app.controller('dashboardCtrl', function($scope, $timeout, $location, healthFactory){
    
        $scope.userObject = healthFactory.getLogin();   
        
        $scope.go = function(path){
            $location.path(path)
        }
        $scope.userCare=healthFactory.getPrevCare()

});


app.controller('loginCtrl', function($scope, $timeout, $location, healthFactory){
    
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

