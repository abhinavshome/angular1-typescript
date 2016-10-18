import '../vendor/jquery-1.11.3.min.js';
import '../vendor/jquery-ui.js';
import angular from '../vendor/angular.min.js';
import '../vendor/angular-route.min.js';
import BookCtrl from './controllers/book.ctrl';
import AddBookCtrl from './controllers/addBook.ctrl';
import MenuCtrl from './controllers/menu.ctrl';
import CartCtrl from './controllers/cart.ctrl';
import TopBooksCtrl from './controllers/topBooks.ctrl';
import BookService from './services/book.service';
import CartService from './services/cart.service';
import TopBooksService from './services/topBooks.service';
import RouteConfig from './routes';
import titlecase from './filters/titlecase';
import StarWidget from './directives/starWidget';
import Slider from './directives/slider';

angular
    .module('booksCart', ['ngRoute'])
    .config(RouteConfig)
    .controller('BookCtrl', BookCtrl)
    .controller('MenuCtrl', MenuCtrl)
    .controller('AddBookCtrl', AddBookCtrl)
    .controller('CartCtrl', CartCtrl)
    .controller('TopBooksCtrl', TopBooksCtrl)
    .service('bookService', BookService)
    .service('cartService', CartService)
    .service('topBooksService', TopBooksService)
    .filter('titlecase', titlecase)
    .directive('starWidget', function() { return new StarWidget() })
    .directive('slider', function() { return new Slider() })
    ;


