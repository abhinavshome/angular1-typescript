import angular from './vendor/angular.min.js';
import './vendor/angular-route.min.js';
import BookCtrl from './src/controllers/book.ctrl';
import AddBookCtrl from './src/controllers/addBook.ctrl';
import MenuCtrl from './src/controllers/menu.ctrl';
import CartCtrl from './src/controllers/cart.ctrl';
import BookService from './src/services/book.service';
import CartService from './src/services/cart.service';
import RouteConfig from './src/routes';

angular
    .module('booksCart', ['ngRoute'])
    .config(RouteConfig)
    .controller('BookCtrl', BookCtrl)
    .controller('MenuCtrl', MenuCtrl)
    .controller('AddBookCtrl', AddBookCtrl)
    .controller('CartCtrl', CartCtrl)
    .service('bookService', BookService)
    .service('cartService', CartService)
    ;


