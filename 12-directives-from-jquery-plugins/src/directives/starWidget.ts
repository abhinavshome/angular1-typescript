export default class StarWidget {
    
        templateUrl =  'templates/star-widget.html';
        
        scope : any = {
            points: "=",
            color: "@"
        };

        link (scope, element, attributes) {
            scope.message = 'hello';
            console.log('called', scope.points);
            //Step1: Initial rendering
            function drawStars(rating) {
                scope.stars = [];
                for (var i = 0; i < 5; i++) {
                    var star = (i < rating ? 1 : 0)
                    scope.stars.push(star);
                }
            }
            drawStars(scope.points);

            //Step2: One way of 2way data binding
            scope.updateStars = function (index) {
                console.log('clicked')
                drawStars(index + 1);
                scope.points = index + 1;
            }

            //Step3: Other way of 2way data binding
            scope.$watch('points', function(newVal: number) {
                drawStars(newVal);
            })
        }
}