angular.module('services')
    .factory('Persona', function(filltext, $q) {

        return {

        	//We return a promise
            all: function(num) {

                var q = $q.defer();

                var config = {
                    rows: num,
                    fullName: '{firstName}~{lastName}',                    
                    company: '{business}',
                    overview: '{lorem|10}',
                    position: '["CEO","CIO","CFO","C3PO"]'
                }

                filltext.create(config, function(data) {
                    q.resolve(data);
                });

                return q.promise;
            }
        };

    });
