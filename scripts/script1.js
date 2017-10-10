




$(document).ready(function(){



   /* LOADING ICON SETUP */
  $('#loadicon').hide();
   
   // LOCAL LOAD ICON
     $('#localload').hide();
  

  /* ENGINE FOR ACCESSING IMAGES (GOOGLE CLOUD CUSTOM SEARCH API) */

  

  $.imageurl = [];
  $.searchkey = "Game of thrones season 7 hd images";
  $.myurl = "https://www.googleapis.com/customsearch/v1?q="+$.searchkey+"&cx=013925633981226473305%3A8qlxinkhy-m&fileType=jpg&imgSize=large&imgType=face&num=10&safe=high&searchType=image&key=AIzaSyB6qbkLW1PU7V65U-S3KLx7Mja2VgwHoa8";
  $.ajax({
    url: $.myurl,
    datType:"JSON",
    method:"GET",
    success:function(response){
      console.log(response.items);
      for(let i in response.items){
       $.imageurl.push(response.items[i].link); 
     }
     console.log($.imageurl);

   }
   
   
 });


  
  /* ------------------------------------------ */
  /* ENGINE FOR NAVBAR BUTTONS */

  $(".nav li").on("click", function(){
    $(this).children().addClass( 'active' )
    $(this).siblings().children().removeClass( 'active' );
  });


  /*  -------------------------------------------- */

  /* ENGINE FOR BANNER */

  $.imagechanger = function(){
   console.log("i helooo");
   var imgurl = urlgenerator();
   
   
 }

 $.imgcounter =0;  

 

 function urlgenerator(){
   $.imgcounter +=1;
   if($.imgcounter===10){
     $.imgcounter = 1;
   }
   
   var source = $.imageurl[$.imgcounter];
   
   return source;
 }

 setInterval(function(){
  var imgurl = urlgenerator();
  
  if(imgurl !== undefined){
    
    $("#banner").attr('src',imgurl);}
  },4000);

 /* ----------------------------------------------------------------- */
 

 /* ENGINE FOR RECENT NEWS (NESAPI.ORG API)  */
 /* JQUERY POPOVER PLUGINS IS ADDED (LINK TO THE PLUGIN DOCUMENTS : https://github.com/sandywalker/webui-popover)  */


 $.chanels = ["google-news","cnn","bbc-news","bbc-sport","buzzfeed","daily-mail","reuters","techcrunch","the-next-web"];
 $.articles;
 var $chanel = "google-news";
 $.ajax({

  url:" https://newsapi.org/v1/articles?source="+$chanel+"&sortBy=top&apiKey=257506e9086541f08cd2467e8e8eb84c",
  method:"GET",
  dataType:"JSON",
  'success':function(response){
   $.articles = response.articles;
   $.uniqid =1;
   $("#staticnews").append("<h3  class='chathead'>"+"<img style='width:40px' src=images/"+response.source+".png>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+response.source +"</h3>"); 
   response.articles.forEach(function(elem){
     $.uniqid +=1;
     
        //$("#staticnews").append("<h1 class='chatroom'>"+elem.title+"<h1>"); 
   			//$("#staticnews").append("<h4 class='chatroom'>published at : "+elem.publishedAt+"</h5>");
   			$("#staticnews").append("<h3 id="+'pop'+$.uniqid+" class='chatroom popcool'>"+"<img style='width:20%' src="+elem.urlToImage+">&nbsp;&nbsp;&nbsp;&nbsp;"+elem.title +"</h3>");
         $("#staticnews").append("<div id="+$.uniqid.toString()+" class='popee'><img id='popimg'  src="+elem.urlToImage+"><p id=''class='popees'>"+elem.description+"</p></div>");
   		  //$("#staticnews").append( '<a href="#" style="z-index:5;" data-placement="top" data-html="true" data-toggle="popover" data-content="Some content">Click Me</a>');
        $("#staticnews").append("<hr class='chatroom'></hr>");
        $('#pop'+$.uniqid).webuiPopover({url:'#'+$.uniqid.toString(), trigger:'hover',placement:'left',animation:'fade',width:'400px',height:'auto',cache:'false'});
        
      });
   
   
 }

});
 
 $.chncounter =0;
 function channelgenerator(){
   $.chncounter +=1;
   if($.chncounter===8){
     $.chncounter = 0;
   }
   
   var source = $.chanels[$.chncounter];
   
   return source;
 }


 setInterval(function(){
  $chanel = channelgenerator();

  $.ajax({

    url:" https://newsapi.org/v1/articles?source="+$chanel+"&sortBy=top&apiKey=257506e9086541f08cd2467e8e8eb84c",
    method:"GET",
    dataType:"JSON",
    'success':function(response){
     $.articles = response.articles;
     $(".chatroom").detach();
     $(".chathead").detach();
     $("#staticnews").append("<h3 class='chathead'>"+"<img style='width:40px' src=images/"+response.source+".png>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+response.source +"</h3>"); 
     response.articles.forEach(function(elem){
       $.uniqid +=1;
       
        //$("#staticnews").append("<h1 class='chatroom'>"+elem.title+"<h1>"); 
        //$("#staticnews").append("<h4 class='chatroom'>published at : "+elem.publishedAt+"</h5>");
        $("#staticnews").append("<h3 id="+'pop'+$.uniqid+" class='chatroom popcool'>"+"<img style='width:20%' src="+elem.urlToImage+">&nbsp;&nbsp;&nbsp;&nbsp;"+elem.title +"</h3>");
        $("#staticnews").append("<div id="+$.uniqid.toString()+" class='popee'><img id='popimg'  src="+elem.urlToImage+"><p id=''class='popees'>"+elem.description+"</p></div>");
        //$("#staticnews").append( '<a href="#" style="z-index:5;" data-placement="top" data-html="true" data-toggle="popover" data-content="Some content">Click Me</a>');
        $("#staticnews").append("<hr class='chatroom'></hr>");
        $('#pop'+$.uniqid).webuiPopover({url:'#'+$.uniqid.toString(), trigger:'hover',placement:'left',animation:'fade',width:'400px',height:'auto',cache:'false'});
        
      });
     
     
   }

 });       },20000);


 /* -------------------------------------------------------------- */


}); 
