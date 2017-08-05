//ROUTES
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'../app/angular/views/main-view.html',
        controller:'mainController'
    })
    .when('/characters',{
        templateUrl:'../app/angular/views/characters-view.html',
        controller:'characterController'
    })
    .when('/books',{
        templateUrl:'../app/angular/views/books-view.html',
        controller:'bookController'
    })
    .when('/houses',{
        templateUrl:'../app/angular/views/houses-view.html',
        controller:'houseController'
    })
    .otherwise({
        redirectTo:'/'
    })
    
    
});