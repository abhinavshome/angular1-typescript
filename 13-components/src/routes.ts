export default class RouteConfig {
    static $inject = ['$routeProvider'];

    constructor($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<hero-list></hero-list>'
            })
            .when('/about', {
                template: '<about-page></about-page>'
            });
    }
}