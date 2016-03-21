(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .controller('ConsultarController', ConsultarController);

    ConsultarController.$inject = ['DeclaracionesService'];
    function ConsultarController(DeclaracionesService) {
        console.log("Entró a ConsultarController");
        var vm = this;
        vm.declaracionSeleccionada = {};
        vm.declaraciones = [];
        vm.isMostrado = false; //Variable para el alert que muestra el registro. Inicia sin ser mostrado.
        vm.mostrarDeclaracion = mostrarDeclaracion;

        function mostrarDeclaracion(declaracion) {
            vm.declaracionSeleccionada = declaracion;
            vm.isMostrado = true;
            console.log("Declaración seleccionada:", declaracion);
        }

        function activate() {
            vm.declaraciones = DeclaracionesService.all();
        }

        activate();
    }
})();