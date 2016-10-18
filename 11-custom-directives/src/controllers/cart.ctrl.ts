import {Cart} from '../interfaces';

export default class CartCtrl {
    cart : Cart;

    static $inject = ['cartService'];

    constructor(cartService) {
        this.cart = cartService.getCart();
    }
}