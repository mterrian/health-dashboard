var app = angular.module('healthApp');

app.factory('healthFactory', function($http, $location) {

    var userObj = {};
    var loginError = false;
    
      return {
        // These are our two methods.
        checkLogin: checkLogin,
        getLogin: getLogin
      }

    function checkLogin(userInfo){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/profile/'
        }).then(function successfullCallBack(dataBase){
            userObj = dataBase.data;
        if(userInfo.username === userObj[0].username && userInfo.password === userObj[0].password) {
            userObj = dataBase.data;
            $location.path('/dashboard')
            console.log("checkLogin")
        }   
        else {
            loginError = true;
            console.log("This failed");
            }
        });
    };

    function getLogin(){
        return userObj;
    }



});