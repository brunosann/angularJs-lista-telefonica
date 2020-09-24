const app = angular.module('myRouter', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
      name: '404',
      url: '/404',
      template: '<h1 class="text-center">Pagina nao encontrada</h1>',
    })
    .state({
      name: 'home',
      url: '/',
      template: '<h1>Pagina Home</h1>',
    })
    .state({
      name: 'sobre',
      url: '/sobre/:id/:arrayParam',
      params: {
        arrayParam: { array: true },
      },
      controller: 'sobreController',
      templateUrl: 'pages/sobre.html',
    })
    .state({
      name: 'contato',
      url: '/contato',
      template: '<h1>Pagina Contato</h1>',
    });
});

app.controller('sobreController', function ($scope, $stateParams, $state) {
  $scope.text = 'Meu Controller';
  const { id } = $stateParams;
  console.log($stateParams);
  console.log($state);
  // console.log($state.go('home'));
});
