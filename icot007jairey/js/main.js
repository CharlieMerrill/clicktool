// Dynamic Headline - https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


// Scrolling Wrench

$(window).scroll(function() {

    var offset = $(window).scrollTop();
    offset     = 150 + (offset * 0.2);

    $('.wrench').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    $('#yellow-gear').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    offset = 360 - offset;
    $('.multigray-circle').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    $('#pink-gear').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

});


// Video Modal:

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
    if ($( $(this).data('modal-id')).modal().selector == 'modal-video1') {
      document.getElementById('video-frame1').play();
    } else if ($( $(this).data('modal-id')).modal().selector == 'modal-video2') {
      document.getElementById('video-frame2').play();
    }
});

$(".modal-video-div").on("hidden.bs.modal", function () {
  document.getElementById('video-frame1').pause();
  document.getElementById('video-frame2').pause();
});
