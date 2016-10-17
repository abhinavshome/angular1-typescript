import angular from './vendor/angular.min.js';
import BookCtrl from './src/controllers/book.ctrl';
import BookService from './src/services/book.service';
import CartService from './src/services/cart.service';


console.log(angular.module)
angular
    .module('booksCart', [])
    .controller('BookCtrl', BookCtrl)
    .service('bookService', BookService)
    .service('cartService', CartService)
    ;


