var app = angular.module('healthApp');

app.factory('healthFactory', function($http, $location) {

    var chart = document.getElementById("newChart")


    return {
        checkProgress: checkProgress,
        chartCtrl: chartCtrl,
    }

    function chartCtrl(){
        var vm = this;
        vm.amountPaid = 30;
        vm.totalAmount = 100;
        return ((vm.amountPaid / vm.totalAmount) * 100+'%');

    }

    function checkProgress(){
        return ((12*7));
    }
    
});