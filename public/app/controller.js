var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory) {});

app.controller('deductibleCtrl', function(
    $scope,
    $timeout,
    $location,
    healthFactory
) {
    // @TODO Clean this up - JDF
    let userObject = 
        JSON.parse(localStorage.getItem('userObj')) || healthFactory.getLogin();
    
    function barComplete(paid, total) {
        return paid / total * 100;
    }
    function remaining(total, paid) {
        return total - paid;
    }

    function logOut(){
        return localStorage.clear();
    }
    
    $scope.userObject= userObject;
    $scope.remainingInNetwork = remaining(userObject[0].deductible, userObject[0].deductiblePaid);
    $scope.remainingOutNetwork = remaining(userObject[0].outOfNetworkDeductible, userObject[0].outOfNetworkPaid);

    $scope.amountPaid = function() {
        let chart = document.getElementById('newChart');
        let width = 1;
        let frame = function () {
            if (width >= barComplete(userObject[0].deductiblePaid, userObject[0].deductible)) {
                clearInterval(id);
            } else {
                width++;
                console.log('first',width);
                chart.style.width = width + '%';
            }
        }
        let id = setInterval(frame, 10);

        
    };

    $scope.amountPaid2 = function() {
        let graph = document.getElementById('newGraph');
        let width = 1;
        let frame2 = function () {
            if (width >= barComplete(userObject[0].outOfNetworkPaid, userObject[0].outOfNetworkDeductible)) {
                clearInterval(id);
            } else {
                width++;
                console.log('second', width);
                graph.style.width = width + '%';
            }
        }
        let id = setInterval(frame2, 10);

       
    };
    $scope.go = function(path) {
        $location.path(path);
    };
});

app.controller('dashboardCtrl', function(
    $scope,
    $timeout,
    $location,
    healthFactory
) {
    $scope.userObject =
        JSON.parse(localStorage.getItem('userObj')) || healthFactory.getLogin();

    $scope.go = function(path) {
        $location.path(path);
    };
    $scope.userCare = 
        JSON.parse(localStorage.getItem('userCare')) || healthFactory.getPrevCare();

    $scope.date = 
        JSON.parse(localStorage.getItem('time')) || healthFactory.getDate();
    
});

app.controller('loginCtrl', function(
    $scope,
    $timeout,
    $location,
    healthFactory
) {
    $scope.time = healthFactory.setDate();

    $scope.submitWords = function(userInfo) {
        healthFactory.setPrevCare();
        healthFactory.checkLogin(userInfo).then(function() {
            $scope.loginError = true;
        });
    };

    $scope.inputType = 'password';
    // Hide & show password function
    $scope.hideShowPassword = function() {
        if ($scope.inputType == 'password') $scope.inputType = 'text';
        else $scope.inputType = 'password';
    };
});
