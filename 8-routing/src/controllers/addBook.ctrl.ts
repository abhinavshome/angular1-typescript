export default class AddBookCtrl {
    newBook : any;
    static $inject = ['bookService', '$location'];

    constructor(private bookService, private $location) {
        
    }

    addBook() {
        this.bookService.addBook(this.newBook);
        this.$location.path('/');
    }
}