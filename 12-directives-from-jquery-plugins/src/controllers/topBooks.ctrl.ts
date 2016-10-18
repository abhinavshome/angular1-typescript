export default class TopBooksCtrl {
    topBooks : any;

    static $inject = ['topBooksService'];

    constructor(topBookService) {
        var self = this;
        topBookService
            .getTopBooks()
            .then(function(response) {
                console.log(response);
                self.topBooks = response.data;
            });
    }
}