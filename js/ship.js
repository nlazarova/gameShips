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

        $("#first").hide(1000);//Hide everything from div with id=first
        $("#second").fadeIn(3000);
        $("#myTable").fadeIn(3000);
        $("td").addClass("water");//All <td> is assigned a class of 'water'
       
        //======Assigning a ship class to randomly selected cells======//
      
        for (var numShip = 0; numShip < 3; numShip++) {
                
        var col = Math.floor((Math.random() * 5) + 1);
       
        var row = Math.floor((Math.random() * 6) + 0);
       
        var idtd = col*10 + row;

        var residtd = idtd.toString();

        if (document.getElementById(residtd).className != "ship") {
            document.getElementById(residtd).className = "ship";
            console.log(idtd);
            shipArr[numShip]= idtd;          
                       
        } else if (col!=6) {
            col=col+1;
            } else {
                col = col -1;
            }
            var idtd = col*10 + row; 
            var residtd = idtd.toString();
            document.getElementById(residtd).className = "ship";           
            shipArr[numShip]= idtd;          
           
        }  
       
    


//========== Changes the cell color when selecting this cell if it is not a ship showing 'X' if a ship is shown
    var numberHitShip=0;
    var notHit=0;
    $("td").click(function(){ 
        
       
       if ($(this).hasClass("ship") ) {
           $(this).css("background", "url('img/ship.png') no-repeat center center" );
           document.getElementById("notship").innerHTML = "Браво! Ти позна кораб!";
           numberHitShip = numberHitShip + 1;
           
           if (numberHitShip>=3) {
            //What happens when all the ships are found
          
            var notHit1 = notHit + 3;
            document.getElementById("notship").innerHTML = "Браво! Ти позна всички кораби след "+notHit1 +" опита!";
           
           }
             
        }else if (numberHitShip<3) {
            var color = $(this).css('background-color');
            if (color != '#0ba2e3') {           
                notHit = notHit+1;
             }   else {
                notHit = notHit;
             }
            //============
           
           //Changing the background and text color of the selected non-ship cell
           $(this).css({"background-color": '#0ba2e3', "color": "red"});
           var thisHotHitId=$(this).attr('id');
           var resRowNot = thisHotHitId.substr(0, 1);
           var resColNot = thisHotHitId.substr(1, 1);
                          
           //To show how many ships there are in this row and this column
             
          var residtdArr0 = shipArr[0].toString();
          var residtdArr1 = shipArr[1].toString();
          var residtdArr2 = shipArr[2].toString();
           document.getElementById("notship").innerHTML = "Не уцели!";
           
           var resRowShips0 = residtdArr0.substr(0, 1);//
           var resColShips0 = residtdArr0.substr(1, 1);//
           var resRowShips1 = residtdArr1.substr(0, 1);//
           var resColShips1 = residtdArr1.substr(1, 1);//
           var resRowShips2 = residtdArr2.substr(0, 1);//
           var resColShips2 = residtdArr2.substr(1, 1);//
            
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

         
        }


    });//===End======= The end of the function that changes the color of the text and the background into a cell that is selected and is not a ship, if it is a ship it displays

});  //End "#start" click(function()
     
    $("#refresh").click(function(){        
        location.reload();
    });  //End "#refresh" click(function()
     
//==========



});//end ready