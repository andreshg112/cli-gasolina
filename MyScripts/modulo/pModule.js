var app;
(function () {
    app = angular.module("recibosApp", ['ngRoute']);
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                    .when('/Registrar/', {
                        templateUrl: 'MyScripts/view/registrar.html',
                        controller: 'RecibosCtrl'
                    })
                    .when('/Consultar/', {
                        templateUrl: 'MyScripts/view/consultar.html',
                        controller: 'RecibosCtrl'
                    })
                    .when('/Acerca/', {
                        templateUrl: 'MyScripts/view/acerca.html',
                        controller: 'RecibosCtrl'
                    });
        }]);
})();
