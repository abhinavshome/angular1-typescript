import angular from './vendor/angular.min.js';
import BookCtrl from './src/controllers/book.ctrl';


angular
    .module('booksCart', [])
    .controller('BookCtrl', BookCtrl)
    ;


