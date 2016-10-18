import angular from '../vendor/angular.min.js';
import '../vendor/angular-route.min.js';
import {editableField} from './components/editableField';
import {heroDetail} from './components/heroDetail';
import {heroList} from './components/heroList';
import {aboutPage} from './components/aboutPage';
import {menu} from './components/menu';
import RouteConfig from './routes';

angular
    .module('heroApp', ['ngRoute'])
    .config(RouteConfig)
    .component('editableField', editableField)
    .component('heroDetail', heroDetail)
    .component('heroList', heroList)
    .component('aboutPage', aboutPage)
    .component('menu', menu)
    ;


