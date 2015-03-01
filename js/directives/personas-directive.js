angular.module('directives')
    .directive('personasDir', function() {
        // Runs during compile        
        return {
            scope: {
                people: '='
            },
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment            
            templateUrl: 'js/directives/personas-directive.html',
            replace: true,
            link: function(scope, elem, attrs) {

            }
        };
    });
