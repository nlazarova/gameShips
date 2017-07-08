var shipArr=[];

$(document).ready(function(){
    for (var i = 0; i < 100; i++) {          
      $("#shipanimatebig").animate({left: '905px', top:'225px', opacity: 0.95}, 1000, function(){});
      $("#shipanimatebig").animate({left: '900px', top:'230px', opacity: 0.95}, 1000, function(){});
      $("#shipanimatemiddle").animate({left: '1253px', top:'221px', opacity: 0.85}, 1000, function(){});
      $("#shipanimatemiddle").animate({left: '1250px', top:'220px', opacity: 0.85}, 1000, function(){});
      $("#shipanimatemin").animate({left: '1201px', top:'201px', opacity: 0.75}, 1000, function(){});
      $("#shipanimatemin").animate({left: '1200px', top:'200px', opacity: 0.75}, 1000, function(){});
    }
    var h2=$("h2");
    h2.animate({left: '100px'}, "slow");
    h2.animate({fontSize: '2em'}, "slow");
    var h1=$("h1");
    h1.animate({left: '100px'}, "slow");
    h1.animate({fontSize: '3em'}, "slow");
    $("#start").click(function(){        
        document.getElementById("myTable").style.cursor = "pointer";
        $("#cloud").fadeIn(3000);
        $("#cloud").animate({left: '+850px'}, 100000, function(){});

        $("#first").hide(1000);//скриване на всичко от div с id=first
        $("#second").fadeIn(3000);
        $("#myTable").fadeIn(3000);
        $("td").addClass("water");//на всички <td> се присвоява клас water
       
        //======присвояване клас ship на случайно избрани клетки======//
       // var shipArr=[];
        for (var numShip = 0; numShip < 3; numShip++) {
                
        var col = Math.floor((Math.random() * 5) + 1);
       // document.getElementById("demo").innerHTML = col;
        var row = Math.floor((Math.random() * 6) + 0);
       // document.getElementById("demo1").innerHTML = row;
        var idtd = col*10 + row; 
        var residtd = idtd.toString();
        if (document.getElementById(residtd).className != "ship") {
            //document.getElementById("anew").className = "ship";
            document.getElementById(residtd).className = "ship";
            console.log(idtd);
            shipArr[numShip]= idtd; 
          //  console.log(shipArr[numShip]);
            //numShip=numShip+1;            
        } else if (col!=6) {
            col=col+1;
            } else {
                col = col -1;
            }
            var idtd = col*10 + row; 
            var residtd = idtd.toString();
            document.getElementById(residtd).className = "ship";
           // console.log(idtd);
            shipArr[numShip]= idtd;
           // console.log(shipArr[numShip]); 

           // numShip=numShip+1; 
        }
   
       // $( ".ship" ).hide();
    //document.getElementById("45").style()
        //$("#anew").addClass("ship");
        //document.getElementById("demo3").innerHTML = idTd;
    


//========== сменя цвета на клетката от синьо в сиво при избор на тази клетка, ако не е кораб, ако е кораб се показва той
    var numberHitShip=0;
    var notHit=0;
    $("td").click(function(){ 
        
       // $("#text1").text("Браво! Ти позна всички кораби!");
       if ($(this).hasClass("ship") ) {
           $(this).css("background", "url('img/ship.png') no-repeat center center" );
           document.getElementById("notship").innerHTML = "Браво! Ти позна кораб!";
           numberHitShip = numberHitShip + 1;
           //alert(numberHitShip);
           if (numberHitShip>=3) {
            //какво става когато са открити всички кораби
           // alert(numberHitShip);
            var notHit1 = notHit + 3;
            document.getElementById("notship").innerHTML = "Браво! Ти позна всички кораби след "+notHit1 +" опита!";
           
           }
          // $(this).show();    
        }else if (numberHitShip<3) {
            var color = $(this).css('background-color');
            if (color != '#0ba2e3') {
           // if (($(this).css("background-color"))!= "#cccccc") {
                notHit = notHit+1;
             }   else {
                notHit = notHit;
             }
            //============} else { //за 
           //$(this).css("background-color", '#cccccc');
           //смяна на сивия '#cccccc' със син цвят '#0ba2e3'
           $(this).css({"background-color": '#0ba2e3', "color": "red"});
           var thisHotHitId=$(this).attr('id');
           var resRowNot = thisHotHitId.substr(0, 1);
           var resColNot = thisHotHitId.substr(1, 1);
          // alert(resColNot);
          // alert(thisHotHitId, resRowNot, resColNot);
          // alert($(this).attr('id'));

                //notHit = notHit+1;
           //да се изпише колко кораби има в тази редица и в тази колона
             
          var residtdArr0 = shipArr[0].toString();
          var residtdArr1 = shipArr[1].toString();
          var residtdArr2 = shipArr[2].toString();
           document.getElementById("notship").innerHTML = "Не уцели!";
           // console.log(shipArr[0]);
           //console.log(residtdArr1);
           var resRowShips0 = residtdArr0.substr(0, 1);//
           var resColShips0 = residtdArr0.substr(1, 1);//
           var resRowShips1 = residtdArr1.substr(0, 1);//
           var resColShips1 = residtdArr1.substr(1, 1);//
           var resRowShips2 = residtdArr2.substr(0, 1);//
           var resColShips2 = residtdArr2.substr(1, 1);//
            //console.log("row ",resRowShips0);
             //console.log("col ",resColShips0);
             if ((resRowNot==resRowShips0) || (resRowNot==resRowShips1) || (resRowNot==resRowShips2)) {
                 document.getElementById("notship").innerHTML = "Не уцели! На този ред има кораб.";
                 if ((resRowNot==resRowShips0) && (resRowNot==resRowShips1)) {document.getElementById("notship").innerHTML = "Не уцели! На този ред има поне два кораба.";}
                 if ((resRowNot==resRowShips0) && (resRowNot==resRowShips2)) {document.getElementById("notship").innerHTML = "Не уцели! На този ред има поне два кораба.";}
                 if ((resRowNot==resRowShips2) && (resRowNot==resRowShips1)) {document.getElementById("notship").innerHTML = "Не уцели! На този ред има поне два кораба.";}
             }
             if ((resColNot==resColShips0) || (resColNot==resColShips1) ||(resColNot==resColShips2)) {
                 document.getElementById("notship").innerHTML = "Не уцели! На тази колона има кораб.";
                 if ((resColNot==resColShips0) && (resColNot==resColShips1)) {document.getElementById("notship").innerHTML = "Не уцели! На тази колона има поне два кораба.";}
                 if ((resColNot==resColShips0) && (resColNot==resColShips2)) {document.getElementById("notship").innerHTML = "Не уцели! На тази колона има поне два кораба.";}
                 if ((resColNot==resColShips2) && (resColNot==resColShips1)) {document.getElementById("notship").innerHTML = "Не уцели! На тази колона има поне два кораба.";}
             }

         //=======}//else за сивия цвят, да не брой повторно натискане върху такава клетка
        }


    });//===End======= Край на функцията, която сменя цвета на клетката от синьо в сиво при избор на тази клетка, ако не е кораб, ако е кораб се показва той


});  //End "#start" click(function()
     
    $("#refresh").click(function(){
        //jQuery("body").load(window.location.href);
        location.reload();
    });  //End "#refresh" click(function()
     
//==========



});//end ready