//ROUTES
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'./angular/views/main-view.html',
        controller:'mainController'
    })
    .when('/characters',{
        templateUrl:'./angular/views/characters-view.html',
        controller:'characterController'
    })
    .when('/books',{
        templateUrl:'./angular/views/books-view.html',
        controller:'bookController'
    })
    .when('/houses',{
        templateUrl:'./angular/views/houses-view.html',
        controller:'houseController'
    })
    .otherwise({
        redirectTo:'/'
    })
    
    
});