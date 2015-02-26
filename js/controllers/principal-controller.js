angular.module('app')
    .controller("PrincipalController", function($scope, Persona) {

        $scope.getPeople = function(num) {

            Persona.all(num).then(function(data) {
                $scope.people = data;
            });
        };

        //Watch sobre la variable de scope num
        $scope.$watch('num', function(newValue, oldValue) {            
            $scope.getPeople(newValue);
        });
    });
