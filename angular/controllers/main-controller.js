//CONTROLLERS
app.controller('mainController', ['$scope',function($scope){
    $scope.name='main';
    
}]);

app.controller('characterController',['$scope',function($scope){
    $scope.name='character';
    
}]);

app.controller('bookController',['$scope','$http',function($scope,$http){
    
    $scope.key='books'
    
    $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key
    }).then(function(response){console.log(response)
                               
              $scope.datas = response.data;                 
                              }, 
function(error){
        console.log(error);
    });
    
    
    
}]);

app.controller('houseController',['$scope',function($scope){
    $scope.name='house';
    
}]);