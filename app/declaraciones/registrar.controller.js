(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['DeclaracionesService', 'MesesService', 'DepartamentosService', 'AniosService'];
    function RegistrarController(DeclaracionesService, MesesService, DepartamentosService, AniosService) {
        console.log("Entró a RegistrarController");
        var vm = this;

        //Declaraciones de variables y funciones, en orden alfabético.
        vm.calcular = calcular;
        vm.guardar = guardar;
        vm.meses = MesesService.getMeses();
        vm.departamentos = DepartamentosService.getDepartamentos();
        vm.anios = AniosService.getAnios();

        function activate() {
            vm.declaracion = {};
            vm.declaracion.correccion = {};
            //Así son las clases en Javascript ES 5.
            var Gasolina = function(clase = "") {
                this.clase = clase;
                this.galones_gravado = 0;
                this.precio_referencia = 0;
                this.porcentaje_alcohol = 0;
                this.base_gravable = 0;
                this.sobretasa = 0;
            };
            vm.declaracion.gasolinas = [
                new Gasolina("Gasolina corriente básica"),
                new Gasolina("Gasolina corriente oxigenada"),
                new Gasolina("Gasolina extra básica"),
                new Gasolina("Gasolina extra oxigenada"),
                new Gasolina("Gasolina importada"),
                new Gasolina("Gasolina NAL. ZON. ESP. FRONT")
            ];
        }
        //Funciones
        function calcular(gasolina) {
            gasolina.base_gravable = gasolina.galones_gravado * (1 - (gasolina.porcentaje_alcohol / 100)) * gasolina.precio_referencia;
            gasolina.sobretasa = gasolina.base_gravable * 0.06;
        };

        function guardar() {
            vm.declaracion.correccion.fecha = $('#datepicker').val();
            console.log(vm.declaracion);
            if (DeclaracionesService.save(vm.declaracion)) {
                activate();
                alert("Registró correctamente");
            } else {
                alert("Error registrando.")
            }
        }

        activate();
    }
})();