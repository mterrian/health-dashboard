var app = angular.module('healthApp');

app.factory('healthFactory', function($http, $location) {
    var userObj = {};
    var loginError = false;
    var userCare = {};
    var time = {};
    var stayHealthy = {};

    return {
        // These are our two methods.
        loginError: loginError,
        checkLogin: checkLogin,
        getLogin: getLogin,
        setStayHealthy: setStayHealthy,
        getStayHealthy: getStayHealthy,
        setPrevCare: setPrevCare,
        getPrevCare: getPrevCare,
        setDate: setDate,
        getDate: getDate
    };

    function checkLogin(userInfo) {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/profile/'
        }).then(function successfullCallBack(dataBase) {
            userObj = dataBase.data;
            if (
                userInfo.username === userObj[0].username &&
                userInfo.password === userObj[0].password
            ) {
                localStorage.setItem('userObj', JSON.stringify(userObj));

                $location.path('/dashboard');
                console.log('thisPassed');
            } else {
                loginError = true;
                userObj = loginError;
                console.log('This failed');
            }
        });
    }

    function getLogin() {
        return userObj;
    }

    function setStayHealthy(){
        return $http({
            method: 'GET',
            // url: 'http://localhost:3000/profile/'
        }).then(function successfullCallBack(dataBase) {
            stayHealthy = dataBase.data;
            localStorage.setItem('userObj', JSON.stringify(userObj));
            $location.path('/dashboard');
        });
    }  
    function getStayHealthy(){
        return stayHealthy;
    }

    function setPrevCare() {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/prevCare/'
        }).then(function successfullCallBack(dataBase) {
            userCare = dataBase.data;
            localStorage.setItem('userCare', JSON.stringify(userCare));
        });
    }

    function getPrevCare() {
        return userCare;
    }

    function setDate() {
        return $http({
            method: 'GET',
            url: '/time'
        }).then(function successfullCallBack(response) {
            console.log(response.data);
            time = response.data;
            localStorage.setItem('time', JSON.stringify(time));
        });
    }

    function getDate() {
        return time;
    }
});
