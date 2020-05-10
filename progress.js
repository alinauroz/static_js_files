let time = 1000;

$("document").ready(function() {
    console.log("Hello World 998")
    bar = $(".progressbar");
    for (i = 0; i < bar.length; i++) {
        let val = bar[i].getAttribute('val');
        animate(bar[i], val);
    }

    function animate(el, val) {
        let i=0;

        let thumb = document.createElement("div");
        thumb.setAttribute("class", "thumb");
        $(el).html(thumb);

        $(thumb).animate({width : val * 20 + '%'}, time);

        let frame = 20;

        let s = setInterval(function () {
            $(thumb).html("<p style='margin-top:4px'>" + Math.round(val * i * 10) / 10 + "</p>")
            i += 0.05;
            if (i >= 1) {
                clearInterval(s);
                $(thumb).html("<p style='margin-top:4px;overflow:auto'>" + val + "</p>")
            }
        }, time/frame);
    }

})