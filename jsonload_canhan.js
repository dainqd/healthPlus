var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function ($scope, $http){
    $http.get('suckhoecanhan.json').success(function (data){
        $scope.employees = data;
    });
    $scope.addEmp = function (){
        if($scope.empName && $scope.empPhoneNumber && $scope.empBirthday 
            && $scope.empHeight && $scope.empWeight && $scope.empBlood_sugar
            && $scope.empBlood_pressure){
            $scope.employees.push({name: $scope.empName, phoneNumber: $scope.empPhoneNumber, birthday: $scope.empBirthday,
                height: $scope.empHeight, weight: $scope.empWeight, 
                blood_sugar: $scope.empBlood_sugar, blood_pressure: $scope.empBlood_pressure});
                document.getElementById('spanError').classList.add('d-none');
        }
        else{
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
