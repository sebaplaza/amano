angular.module('app')
    .config(function($stateProvider) {

        $stateProvider

            .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })

        .state('about', {
            url: '/about',
            template: '<h1>wena wacho about</h1>'
        })

        .state('people', {
            url: '/people',
            templateUrl: 'partials/people.html',
            controller: 'PeopleController'
        })

        .state('herencias', {
            abstract: true,       
            template: '<ui-view/>',
            controller:'HerenciasController'
        })

        //Just to test scope share between parent-child
        .state('herencias.child', {
            url: '/herencias/child',
            templateUrl: 'partials/herencias.child.html',
            controller: 'HerenciasChildController'
        })

        //Just to test scope share between parent-child
        .state('herencias.child2', {
            url: '/herencias/child2',
            templateUrl: 'partials/herencias.child2.html' ,
            controller:'HerenciasChild2Controller'
        });        


    });
