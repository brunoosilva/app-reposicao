angular.module('starter.controllers', [])

.controller('ListaCtrl', function($ionicPlatform, $cordovaSQLite) {

    var vm = this;

    


    vm.execute = function() {
      var query = "INSERT INTO itens (descricaoGondola, gtin, img) VALUES (?,?,?)";
      $cordovaSQLite.execute(vm.db, query, ["REFRIGERANTE COCA-COLA 2LT", "7894900011531", "https://cdn-cosmos.bluesoft.com.br/products/7894900011531"]).then(function(res) {
        console.log("insertId: " + res.insertId);
        vm.consultar();
      }, function (err) {
        console.error(err);
      });
    };

    vm.consultar = function() {
      var query = "SELECT * FROM itens";
      $cordovaSQLite.execute(vm.db, query).then(function(res) {
        console.log("dados: " + res);
      }, function (err) {
        console.error(err);
      });
    };

    vm.excluir = function($index) {
      vm.items.splice($index, 1);
    };

    function init() {
    $ionicPlatform.ready(function() {
      vm.db = $cordovaSQLite.openDB({ name: "appreposicao.db" });

      vm.execute();
    });

        vm.execute();

      vm.items = [

      {
        descricaoGondola : 'REFRIGERANTE COCA-COLA 2LT',
        gtin : '7894900011531',
        img : 'https://cdn-cosmos.bluesoft.com.br/products/7894900011531'
      },
      
      {
        descricaoGondola : 'TANG UVA',
        gtin : '7891099692138',
        img : 'https://cdn-cosmos.bluesoft.com.br/products/tang-uva-35-g_300x300-PU68406_1.jpg'
      }

      ];
    }

    init();
});
