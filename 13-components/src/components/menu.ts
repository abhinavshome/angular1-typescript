export default class MenuCtrl {
    static $inject = ['$location'];

    constructor(private $location) {
        
    }

    isCurrent(path: string) {
        return this.$location.path() == path;
    }
}

export var menu = {
    templateUrl: 'src/components/menu.html',
    controller: MenuCtrl
}