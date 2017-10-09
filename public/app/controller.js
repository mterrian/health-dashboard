var app = angular.module('healthApp');

app.controller('mainCtrl', function($scope, $timeout, healthFactory) {});

app.controller('deductibleCtrl', function(
    $scope,
    $timeout,
    $location,
    healthFactory
) {
    // @TODO Clean this up - JDF
    let userObject = healthFactory.getLogin();
    let barComplete =
        userObject[0].deductiblePaid / userObject[0].deductible * 100;
    let remaining = userObject[0].deductible - userObject[0].deductiblePaid;
    $scope.userObject = healthFactory.getLogin();
    $scope.remaining = remaining;

    $scope.amountPaid = function() {
        let chart = document.getElementById('newChart');
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (width >= barComplete) {
                clearInterval(id);
            } else {
                width++;
                console.log(width);
                chart.style.width = width + '%';
            }
        }
    };

    $scope.amountPaid2 = function() {
        let graph = document.getElementById('newGraph');
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (width >= barComplete) {
                clearInterval(id);
            } else {
                width++;
                console.log(width);
                graph.style.width = width + '%';
            }
        }
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
    $scope.userCare = healthFactory.getPrevCare();

    $scope.date = healthFactory.getDate();
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
