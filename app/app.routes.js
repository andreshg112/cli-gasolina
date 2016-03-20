"use strict";

(function() {
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/components/acerca/acercaView.html'
                })
                .when('/Registrar/', {
                    templateUrl: 'app/components/registrar/registrarView.html'
                })
                .when('/Consultar/', {
                    templateUrl: 'app/components/consultar/consultarView.html'
                })
                .when('/Acerca/', {
                    templateUrl: 'app/components/acerca/acercaView.html'
                });
        }]);
})();
