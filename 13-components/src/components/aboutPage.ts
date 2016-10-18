class AboutCtrl {
    message: string = 'About Us';
}

export var aboutPage = {
    template: '<h2>{{$ctrl.message}}</h2>',
    controller: AboutCtrl
}