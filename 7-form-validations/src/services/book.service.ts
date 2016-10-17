import {Book, Item, Cart} from '../interfaces';

export default class BookService {
    private books : Book[] = [
        {
            title: 'The Alchemist',
            author: 'Paulo Cohelo',
            price: 23,
            rating: 4
        },
        {
            title: 'The Monk who sold his ferrari',
            author: 'Robin Sharma',
            price: 21,
            rating: 2
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            price: 12,
            rating: 5
        },
        {
            title: 'The Lean Startup',
            author: 'Eric Ries',
            price: 10,
            rating: 1
        }
    ];

    getBooks () : Book[] {
        return this.books;
    };

    addBook (book : any) {
        var bookToAdd : Book = {
            title: <string> book.title,
            author: <string> book.author,
            price: parseInt(book.price),
            rating: parseInt(book.rating)
        };

        this.books.unshift(bookToAdd);
    };

    rateUp (book : Book) {
        if (book.rating < 5)
            book.rating++;
    }

    rateDown (book : Book) {
        if (book.rating > 1)
            book.rating--;
    }
}