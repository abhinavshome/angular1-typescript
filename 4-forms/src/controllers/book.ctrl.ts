import {Book, Item, Cart} from '../interfaces';

export default class BookCtrl{
    person;
    newBook;
    cart : Cart = {
        items: [],
        totalPrice: 0
    };

    books : Book[] = [{
        title: 'The Alchemist',
        author: 'Paulo Cohelo',
        price: 23,
        rating: 4
    }, {
        title: 'The Monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 21,
        rating: 2
    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        price: 12,
        rating: 5
    }, {
        title: 'The Lean Startup',
        author: 'Eric Ries',
        price: 10,
        rating: 1
    }];

    addBook() {
        this.newBook.price = parseInt(this.newBook.price);
        this.books.unshift(this.newBook);
        this.newBook = {};
    };

    rateUp(book) {
        if (book.rating < 5)
            book.rating++;
    };

    rateDown(book) {
        if (book.rating > 1)
            book.rating--;
    };

    addToCart(book) {
        var item = this.findInCart(book.title);

        if (item) {
            item.qty++;
        } else {
            var item : Item = {
                name: book.title,
                price: book.price,
                qty: 1
            };

            this.cart.items.push(item);
        }

        this.cart.totalPrice += book.price;
    };

    private findInCart(title) {
        for (var i = 0; i < this.cart.items.length; i++) {
            var item = this.cart.items[i];
            if (item.name == title)
                return item;
        }
    }
});
