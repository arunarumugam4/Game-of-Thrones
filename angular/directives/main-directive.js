//DIRECTIVES
app.directive('characterDirective', function(){
    return {
        restrict:'E',
        templateUrl:'./angular/views/character-directive-view.html',
        replace:true
        
    }
});


app.directive('bookDirective', function(){
    return {
        restrict:'E',
        templateUrl:'./angular/views/book-directive-view.html',
        replace:true,
 
    }
});


app.directive('houseDirective', function(){
    return {
        restrict:'E',
        templateUrl:'./angular/views/house-directive-view.html',
        replace:true,
        
    }
})
