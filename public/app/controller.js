var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout){



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


app.controller('loginCtrl', function($scope, $timeout, $location){
    
    $scope.submitWords=function(userInfo){
        // healthFactory.checkLogin(userInfo)
        $location.path('/dashboard');
      }
 });