angular.module('app')
    .controller('HerenciasChildController', ['$scope', function($scope) {

        $scope.$parent.childName2 = 'Nastacio';

    }]);
