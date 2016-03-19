app.controller('RecibosCtrl', function ($scope, recibosService) {
    //VistaModelo
    $scope.recibo = {}; //Objeto Actual
    $scope.recibos = []; //Listado de Objetos
    $scope.editMode = false; // Modo de Edición
    //Cargar los datos
    loadRecords();
    //Function to Reset Scope variables
    function initialize() {
        $scope.recibo = {};
    }


    $scope.imprSelec = function (muestra){
        var ficha = document.getElementById(muestra);
        var ventimp = window.open(' ','popimpr');
        ventimp.document.write(ficha.innerHTML);
        ventimp.document.write(
            '<link href="http://bootswatch.com/simplex/bootstrap.min.css" rel="stylesheet"/>'
            + '<link href="css/styles.css" rel="stylesheet"/>'
            );

        ventimp.document.close();
        ventimp.print();
        ventimp.close();
    }


    function loadRecords() {
        var promiseGet = recibosService.getAll();
        promiseGet.then(function (pl) {
            $scope.recibos = pl.data.result;
        },
                function (errorPl) {
                    console.log('failure loading Contactos', errorPl);
                });
    }
    $scope.anular = function(recibo) {
        recibo.estado = "anulado";
        $scope.update(recibo);
    };
    //Model popup events
    $scope.showadd = function () {
        initialize();
        $scope.editMode = false;
        $('#regModal').modal('show');
    };
    $scope.cancel = function () {
        if (!$scope.editMode) {
            initialize();
        }
        $('#regModal').modal('hide');
    };
    $scope.get = function () {
        $scope.recibo = this.recibo;
        $('#viewModal').modal('show');
    };
    $scope.valorLetras = function() {
        if ($scope.recibo.valor == 0) {
            $scope.recibo.valor_letras = "CERO PESOS";
        } else if($scope.recibo.valor == undefined) {
            $scope.recibo.valor_letras = "";
        } else {
            $scope.recibo.valor_letras = valorEnLetras($scope.recibo.valor);
        }
        
    };
    $scope.showconfirm = function () {
        $scope.Product = this.product;
        $('#confirmModal').modal('show');
    };
    $scope.edit = function (recibo) {
        var editRecibo = recibo;
        $scope.recibo = editRecibo;
        $scope.editMode = true;
        $('#regModal').modal('show');
    };
    //Function to Submit the form
    $scope.add = function () {
        var promise = recibosService.post($scope.recibo);
        promise.then(function (d) {
            alert(d.data.mensaje);
            loadRecords();
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Function to Cancel Form
    $scope.cancelForm = function () {
        initialize();
    };
    //Functin Para Actualizar
    $scope.update = function (recibo) {
        var promise = recibosService.put(recibo.numero, recibo);
        promise.then(function (d) {
            loadRecords();
            alert(d.data.mensaje);
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Confirmar Para Eliminar
    $scope.showconfirm = function () {
        $scope.Contacto = this.recibo;
        if (confirm("Desea Eliminar al Contacto:" + $scope.Contacto.nombre)) {
            var promise = recibosService.delete($scope.Contacto.id);
            promise.then(function (pl) {
                if (pl.data.result) {
                    alert("Contacto eliminado");
                    loadRecords();
                } else {
                    alert("Error eliminando en el servidor.")
                }
            },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    });
        }
    };
});

