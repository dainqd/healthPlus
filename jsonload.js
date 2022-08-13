var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function ($scope, $http){
    $http.get('thongtinhenkham.json').success(function (data){
        $scope.employees = data;
    });
    $scope.addEmp = function (){
        if($scope.empName && $scope.empEmail && $scope.empPhoneNumber && $scope.empDate && $scope.empAdvise){
            $scope.employees.push({name: $scope.empName, email: $scope.empEmail, phoneNumber: $scope.empPhoneNumber,
                date: $scope.empDate, advise: $scope.empAdvise});
                document.getElementById('spanError').classList.add('d-none');
        }else{
            document.getElementById('spanError').classList.remove('d-none');
        }
    }
    $scope.getTotalEmployees = function (){
        return $scope.employees.length;
    }
    $scope.reversedMessage = function (){
        return $scope.empName.split("").reverse().join("");
    }
})
