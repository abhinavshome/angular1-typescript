import {Book, Item, Cart} from '../interfaces';

export default class BookCtrl {
    books : Book[];
    cart: Cart;
    newBook : any;

    constructor (private bookService, private cartService) {
        this.books = bookService.getBooks();
        this.cart = cartService.getCart();
    }

    addBook  () {
        this.bookService.addBook(this.newBook);
        this.newBook = {};
    };

    rateUp (book) {
        this.bookService.rateUp(book);
    };

    rateDown (book) {
        this.bookService.rateDown(book);
    };

    addToCart (book) {
        this.cartService.addToCart(book);
    };

    highRated (book) {
        return book.rating > 3;
    };

    cheap (book) {
        return book.price < 15;
    };

    all (book) {
        return true;
    };
}