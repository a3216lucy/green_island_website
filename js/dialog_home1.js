
$( function() {
    $('#back-to-top').click(function () {
        $('html,body').animate({scrollTop: 0},1000);
        return false;
    });
});


$(function(){
    $("#dialogouter").hide();
    $( "#openDialog" ).click(function(){        
        $("#dialogouter").fadeIn(200);
    });
    $("#closeDialog").click(function(){
        $("#dialogouter").fadeOut(200);

    });
});


$(function(){
    $("#dialogouter2").hide();
    $( "#openDialog2" ).click(function(){        
        $("#dialogouter2").fadeIn(200);
    });
    $("#closeDialog2").click(function(){
        $("#dialogouter2").fadeOut(200);

    });
});

$(function(){
    $("#dialogouter3").hide();
    $( "#openDialog3" ).click(function(){        
        $("#dialogouter3").fadeIn(200);
    });
    $("#closeDialog3").click(function(){
        $("#dialogouter3").fadeOut(200);

    });
});