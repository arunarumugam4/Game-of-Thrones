//CONTROLLERS
app.controller('mainController', ['$scope',function($scope){
    $scope.name='main';
    
}]);

app.controller('characterController',['$scope','$http','$log',function($scope,$http,$log){
    
    // SHOW LOADING ICON
     $('#loadicon').show();
    // LOCAL LOAD ICON
     $('#localload').hide();

    
    $scope.key='characters';
    $scope.ref = $scope;
    $scope.ref.page=1;
    $scope.next = function(){
        
        // LOCAL LOAD ICON
        $('#localload').show();

        $scope.ref.page +=1;
       
        
        $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
              
              // LOCAL LOAD ICON
              $('#localload').hide();

                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  let notavailable ='images/imgnotavailable.jpg'
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+"in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){
                      
                      $scope.characterimg[key] = response.data.items[0].link ||notavailable;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                              
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
        
    }
    
    $scope.previous = function(){
        
        // LOCAL LOAD ICON
        $('#localload').show();
        
         if($scope.page<=1){

          // LOCAL LOAD ICON
         $('#localload').hide();


         }

        if($scope.page>1){
        $scope.ref.page -=1;
        
            $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
              // LOCAL LOAD ICON
             $('#localload').hide();                 
                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+"in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){
                      
                      $scope.characterimg[key] = response.data.items[0].link;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                             
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
        }
    }
    
    
    
     $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
                               
              // HIDE LOADING ICON
              $('#loadicon').hide();                 
                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+"in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){
                      
                      $scope.characterimg[key] = response.data.items[0].link;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                               
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
    
    
    
}]);

app.controller('bookController',['$scope','$http','$log',function($scope,$http,$log){
    
    // SHOW LOADING ICON
     $('#loadicon').show();
    
    $scope.key='books';
    $scope.ind ='checker';
    $scope.name ='something';
   
   
    
    $scope.bookdetail =  function(index){
        $log.info("I'm working fine");
        $scope.$parent.ind = index;
        
        
        $scope.ref = $scope.$parent;
        $scope.ref.names = [];
        
        for (let i in $scope.datas[index].povCharacters ){
            
             $http({
            method:'GET',
            url: $scope.datas[index].povCharacters[i]
        }).then(function(response){
              
              $scope.ref.names.push(response.data.name || response.data.aliases[0]); 
              
              
                                
                              
                              }, 
function(error){
        console.log(error);
    });
            
        }
        
        
        
                                
        
};
    
   
                            
    $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key
    }).then(function(response){
               
             // HIDE LOADING ICON
             $('#loadicon').hide();
        
              $scope.datas = response.data;                 
                              }, 
function(error){
        console.log(error);
    });
    
    
  
    
    
    
}]);





app.controller('houseController',['$scope','$http',function($scope,$http){
    // SHOW LOADING ICON
     $('#loadicon').show();
    
    // LOCAL LOAD ICON
     $('#localload').hide();
    
    $scope.key='houses';
    
    $scope.ref = $scope;
    $scope.ref.page=1;
    $scope.next = function(){
        
        // LOCAL LOAD ICON
        $('#localload').show();
        
        $scope.ref.page +=1;
       
        
        $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
                
              // LOCAL LOAD ICON
              $('#localload').hide();                
                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  let notavailable ='images/imgnotavailable.jpg'
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+"in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){
                      
                      $scope.characterimg[key] = response.data.items[0].link ||notavailable;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                              
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
        
    }
    
    $scope.previous = function(){
        
        // LOCAL LOAD ICON
        $('#localload').show();
        
        if($scope.page<=1){
            // LOCAL LOAD ICON
            $('#localload').hide();
        }
        
        if($scope.page>1){
        $scope.ref.page -=1;
        
            $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
             
             // LOCAL LOAD ICON
             $('#localload').hide();
                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+"in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){
                      
                      $scope.characterimg[key] = response.data.items[0].link;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                             
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
        }
    }
    
    
    
     $http({
        method:'GET',
        url:"https://www.anapioficeandfire.com/api/"+$scope.key+"?page="+$scope.ref.page+"&pageSize=5"
    }).then(function(response){console.log(response)
            
                                // HIDE LOADING ICON
                                $('#loadicon').hide(); 
                               
              $scope.datas = response.data;  
              $scope.characterimg = {};
                               
              for(let i in response.data){
                  
                  let key = response.data[i].name || response.data[i].aliases[0];
                  $http({
                      method:'GET',
                      url:"https://www.googleapis.com/customsearch/v1?q="+key+" House in game of thrones&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=1&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8"
                  }).then(function(response){ 
                      
                      $scope.characterimg[key] = response.data.items[0].link;
                  }, function(error){
                      console.log(error);
                  });
              }                   
                               
                               
                               
                              }, 
function(error){
        console.log(error);
    });
    
    
}]);
