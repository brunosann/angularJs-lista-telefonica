angular
  .module('myApp', ['ngMessages'])
  .controller('mainController', function ($scope) {
    $scope.app = 'Lista Telefonica';

    $scope.contatos = [
      {
        name: 'Funalo',
        telefone: 99999999,
        operadora: 'Tim',
        data: new Date(),
      },
      { name: 'João', telefone: 99999888, operadora: 'Oi', data: new Date() },
      { name: 'Ana', telefone: 99999777, operadora: 'Claro', data: new Date() },
    ];

    $scope.operadoras = [
      { nome: 'Oi', codigo: 14 },
      { nome: 'Tim', codigo: 44 },
      { nome: 'Claro', codigo: 15 },
    ];

    $scope.adicionar = (user) => {
      if (!user) return;
      console.log(user);
      $scope.contatos.push(angular.copy(user));
      user.name = '';
      user.telefone = '';
      $scope.contatoForm.$setPristine();
    };

    $scope.orderName = '-name';
    $scope.direcao = true;
    $scope.ordenarPor = (campo) => {
      $scope.direcao = $scope.orderName === campo ? !$scope.direcao : false;
      $scope.orderName = campo;
    };
  });
