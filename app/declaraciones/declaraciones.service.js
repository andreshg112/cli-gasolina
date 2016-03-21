(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DeclaracionesService', DeclaracionesService);

    DeclaracionesService.$inject = [];
    function DeclaracionesService() {
        var declaraciones = [];
        this.all = all;
        this.save = save;

        function all() {
            return declaraciones;
        }
        function save(declaracion) {
            var cantidadAnterior = declaraciones.length;
            var cantidadNueva = declaraciones.push(declaracion);
            return cantidadAnterior < cantidadNueva;
        }
    }
})();
