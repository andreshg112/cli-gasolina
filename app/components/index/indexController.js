"use strict";

app.controller('indexController', [function() {
    console.log("Entró a indexController");
    var vm = this;
    var init = function() {
        vm.declaracion = {};
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
    };
    init();
    vm.declaraciones = [];
    vm.isActive = function(link) {
        //Para verificar en cuál menú se encuentra ubicado el usuario y asignar la clase 'active' al link.
        return true;
    };
    vm.meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    vm.guardar = function() {
        var cantidad_anterior = vm.declaraciones.length;
        var cantidad_nueva = vm.declaraciones.push(vm.declaracion);
        if (cantidad_anterior < cantidad_nueva) {
            init();
            alert("Registró correctamente");
        } else {
            alert("Error registrando.")
        }
    };
    vm.mostrar = function(dato) {
        console.log(dato);
    };
    vm.calcular = function(gasolina) {
        gasolina.base_gravable = gasolina.galones_gravado * (1 - (gasolina.porcentaje_alcohol / 100)) * gasolina.precio_referencia;
        gasolina.sobretasa = gasolina.base_gravable * 0.06;
    };
}]);