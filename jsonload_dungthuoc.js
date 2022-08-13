var myApp = angular.module('myApp', []);

myApp.controller('jsonCtrl', function ($scope, $http){
    $http.get('thongtindungthuoc.json').success(function (data){
        $scope.employees = data;
    });
    $scope.addEmp = function (){
        if($scope.empName && $scope.empRequire){
            $scope.employees.push({name: $scope.empName, time: $scope.empTime, dosage: $scope.empDosage,
                require: $scope.empRequire, prescription: $scope.empPrescription, note: $scope.empNote});
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
