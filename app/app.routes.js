"use strict";

(function() {
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/acerca/acercaView.html'
                })
                .when('/registrar/', {
                    templateUrl: 'app/components/registrar/registrarView.html'
                })
                .when('/consultar/', {
                    templateUrl: 'app/components/consultar/consultarView.html'
                })
                .when('/acerca/', {
                    templateUrl: 'app/components/acerca/acercaView.html'
                });
        }]);
})();
