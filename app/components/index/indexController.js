"use strict";

app.controller('indexController', ['$location', function($location) {
    console.log("Entró a indexController");
    var vm = this;
    var init = function() {
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
    };
    init();
    vm.declaraciones = [];

    //Variables y funciones sólo para manipular el estado y la clase 'active' de los enlaces del navbar.
    vm.verRegistrar = false;
    vm.verConsultar = false;
    vm.verAcerca = true;
    vm.activeRegistrar = function() {
        //Si se hizo clic en Registrar, desactivar los demás.
        //Esto hará que el link Registrar tome la clase 'active' y su color sea más claro. 
        vm.verRegistrar = true;
        vm.verAcerca = false;
        vm.verConsultar = false;
    };
    vm.activeConsultar = function() {
        vm.verConsultar = true;
        vm.verRegistrar = false;
        vm.verAcerca = false;
    };
    vm.activeAcerca = function() {
        vm.verAcerca = true;
        vm.verRegistrar = false;
        vm.verConsultar = false;
    };
    //Verificar en cuál ruta está, en caso de recargar la página.
    if ($location.path() == '/registrar/') {
        vm.activeRegistrar()
    } else if ($location.path() == '/consultar/') {
        vm.activeConsultar();
    } else if ($location.path() == '/acerca/') {
        vm.activeAcerca();
    }
    //Fin

    vm.meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    vm.guardar = function() {
        vm.declaracion.correccion.fecha = $('#datepicker').val();
        var cantidad_anterior = vm.declaraciones.length;
        var cantidad_nueva = vm.declaraciones.push(vm.declaracion);
        if (cantidad_anterior < cantidad_nueva) {
            console.log(vm.declaracion);
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