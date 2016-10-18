export default class TopBooksService {
    static $inject = ['$http'];

    constructor(private $http) {
        
    }

    getTopBooks() {
        //just return the promise
        return this.$http.get('data/books.json');
    }
}