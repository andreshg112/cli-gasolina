app.controller('mainController', [function () {
        console.log("Entró a mainController");
        var vm = this;
        vm.declaracion = {};
        vm.declaraciones = [];
        vm.guardar = function () {
            var cantidad_anterior = vm.declaraciones.length;
            var cantidad_nueva = vm.declaraciones.push(vm.declaracion);
            if (cantidad_anterior < cantidad_nueva) {
                vm.declaracion = {};
                alert("Registró correctamente");
            } else {
                alert("Error registrando.")
            }
        };
        vm.mostrar = function (dato) {
            console.log(dato);
        };
        vm.calcular = function (gasolina) {
            gasolina.base_gravable = gasolina.galones_gravado * (1 - (gasolina.porcentaje_alcohol / 100)) * gasolina.precio_referencia;
            gasolina.sobretasa = gasolina.base_gravable * 0.06;
        };
    }]);