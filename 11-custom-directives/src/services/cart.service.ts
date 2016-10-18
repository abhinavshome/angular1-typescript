import {Book, Item, Cart} from '../interfaces';

export default class CartService {
    private cart : Cart = {
        items: [],
        totalPrice: 0
    };

    getCart () {
        return this.cart;
    };

    addToCart (book : Book) {
        var item = this.findInCart(book.title);

        if (item) {
            item.qty++;
        } else {
            var item = {
                name: book.title,
                price: book.price,
                qty: 1
            };

            this.cart.items.push(item);
        }

        this.cart.totalPrice += book.price;
    };

    private findInCart(title : string) {
        for (var i = 0; i < this.cart.items.length; i++) {
            var item = this.cart.items[i];
            if (item.name == title)
                return item;
        }
    }
});