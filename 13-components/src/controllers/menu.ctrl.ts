export default class MenuCtrl {
    static $inject = ['$location'];

    constructor(private $location) {
        
    }

    isCurrent(path: string) {
        return this.$location.path() == path;
    }
}