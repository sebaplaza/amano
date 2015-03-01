angular.module('app')
    .controller("PeopleController", function($scope, PersonaService) {

    	//seteo la variable para ver si el hijo la recibe por scope
    	$scope.childName='cotito';

        $scope.getPeople = function(num) {

            PersonaService.all(num).then(function(data) {
                $scope.people = data;
            });
        };

        //Watch sobre la variable de scope num
        $scope.$watch('num', function(newValue, oldValue) {
            $scope.getPeople(newValue);
        });
    });
