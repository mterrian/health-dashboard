var app = angular.module('healthApp');

app.factory('healthFactory', function($http, $location) {
    var userObj = {};
    var loginError = false;
    var userCare = {};
    var time = {};
    var userToken = {};

    return {
        // These are our two methods.
        loginError: loginError,
        checkLogin: checkLogin,
        getLogin: getLogin,
        setToken: setToken,
        getToken: getToken,
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

    function setToken(tokenObject){
        return $http({
            method: 'GET',
            url: 'https://api.fitbit.com/1/user/-/profile.json',
            headers: {
                Authorization: "Bearer " + tokenObject.access_token
            }
        }).then(function successfullCallBack(dataBase) {
            userToken = dataBase.data;
            console.log(userToken);
            // localStorage.setItem('userObj', JSON.stringify(userObj));
            $location.path('/stay-healthy');
        });
    }  
    function getToken(){
        console.log(userToken);
        return userToken;
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
