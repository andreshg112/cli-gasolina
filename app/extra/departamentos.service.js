(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DepartamentosService', DepartamentosService);

    DepartamentosService.$inject = [];
    function DepartamentosService() {
        this.getDepartamentos = getDepartamentos;
        var departamentos = [
            "Atlántico", "Cesar", "La Guajira", "Magdalena", "Bolívar",
            "Sucre", "Córdoba", "San Andrés y Providencia", "Santander"
        ];
        ////////////////

        function getDepartamentos() { return departamentos.sort(); }
    }
})();