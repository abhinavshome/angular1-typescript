export default class RouteConfig {
    static $inject = ['$routeProvider'];

    constructor($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'BookCtrl',
                controllerAs: 'ctrl'
            })
            .when('/about', {
                template: '<h3>About US</h3>This is a good shop cart.'
            })
            .when('/new-book', {
                templateUrl: 'templates/new-book.html',
                controller: 'AddBookCtrl',
                controllerAs: 'ctrl'
            })
            .when('/cart', {
                templateUrl: 'templates/cart.html',
                controller: 'CartCtrl',
                controllerAs: 'ctrl'
            })
            .when('/top-books', {
                templateUrl: 'templates/top-books.html',
                controller: 'TopBooksCtrl',
                controllerAs: 'ctrl'
            })
            ;
    }
}