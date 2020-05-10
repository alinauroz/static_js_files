$("document").ready(function(){
    let circle = $(".circle");

    for (i = 0; i < circle.length; i++) {
        e = circle[i];
        perc = circle[i].getAttribute('val');
        drawCircle(e, perc)
    }
    function drawCircle(e, perc) {
    jQuery(e).radialProgress("init", {
        'size': 150,
        'fill': 8,
          
      }).radialProgress("to", {'perc': perc * 20, 'time': 1000});
    }
})