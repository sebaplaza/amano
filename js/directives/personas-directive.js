angular.module('directives')
    .directive('personas', function() {
        // Runs during compile        
        return {
            scope: {},
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment            
            templateUrl: 'js/directives/personas-directive.html',
            replace: true,
            link: function(scope, elem, attrs) {

            	console.log(JSON.stringify(attrs.people));
            }
        };
    });
