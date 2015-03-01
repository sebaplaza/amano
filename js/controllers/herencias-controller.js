angular.module('app')
    .controller('HerenciasController', ['$scope', function($scope) {

    	//Soy un estado abstracto, y esta variable sera usada por Child1
    	$scope.childName='Pelayo';

    }]);