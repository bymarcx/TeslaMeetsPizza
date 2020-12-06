import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'popper.js';
import 'bootstrap';

import fullpage from 'fullpage.js';


require("./Custom/custom");
//require("./Custom/init-fp");

console.log("TESTING");

// refresh page on browser resize
// initalizing fullpage new on every resize
// FULLPAGE: "mimimimi" 
// $(window).bind('resize', function(e)
// {
//   console.log('window resized..');
//   this.location.reload(false); /* false to get page from cache */
// });




$(document).ready(function() {

  // It's only fullpage on desktop!
  if($(window).width() > 992) {

    // initalizing fullpage.js / Letz fetz!
    var fullPageInstance = new fullpage('#fullpage', {

      // options here
      scrollBar: true,
      autoScrolling:true,
      //scrollOverflow:true,
      scrollHorizontally: false,
      css3: true,
      //showActiveTooltip: true,
      lockAnchors: true,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: ['Model S', 'Geschmack', 'Performance', 'Nachhaltigkeit', 'Wichtige Daten', 'Bestellen'],

      afterLoad: function( origin, destination, direction){
      var loadedSection = this;

        // using destination index to change logo color.
        if(destination.index == 0){
          //document.getElementById("textlogo").style.fill="white";
        }
        if(destination.index == 1){
          //document.getElementById("textlogo").style.fill="black";
          $(".fade").fadeIn();
        }
        if(destination.index == 2){
          //document.getElementById("textlogo").style.fill="white";
        }

      } 

    });

    //methods
    fullpage_api.setAllowScrolling(true);

  }

  });






$(document).ready(function () {

    $('#los').click(function(){

        if(!$("#collapseExample").hasClass('show')){

            // document.getElementById("stage").style.display = "none";
            // document.getElementById("sec2").style.display = "none";
            // document.getElementById("sec3").style.display = "none";
            // document.getElementById("sec4").style.display = "none";

            document.querySelector('#sec1').classList.add('fp-normal-scroll');
            document.querySelector('#sec1').classList.add('fp-scrollable');
            //fullpage_api.setAllowScrolling(false);

            fullpage_api.reBuild();

            $('#sec1').animate({
              scrollTop: $("#collapseSec1").offset().top
            }, 1000);

            // setTimeout(function() {
            //     $.fn.fullpage.setAllowScrolling(false);
            //     $.fn.fullpage.reBuild();
            //     console.log("set scrolling false;")
            // }, 100);
            
            


            // if (document.querySelector('#fp-nav') !== null) {
            //     document.querySelector('#fp-nav').classList.add('big');
            // }

            // // setTimeout(function() {
            // //     scrollToElement(collapseExample);
                
            // // }, 300);
            

        }
        else {


            document.querySelector('#sec1').classList.remove('fp-normal-scroll');
            document.querySelector('#sec1').classList.remove('fp-scrollable');

            //fullpage_api.setAllowScrolling(true);
            
            fullpage_api.reBuild();


            
            //$.fn.fullpage.moveTo(1);

            // setTimeout(function() {
            //   $.fn.fullpage.setAllowScrolling(true);
            //   $.fn.fullpage.reBuild();
              
            //   console.log("set scrolling true;")
            // }, 300);

            // $.fn.fullpage.moveTo(3);

            // document.getElementById("stage").style.display = "table";
            // document.getElementById("sec2").style.display = "table";
            // document.getElementById("sec3").style.display = "table";
            // document.getElementById("sec4").style.display = "table";

            // if (document.querySelector('#fp-nav') !== null) {
            //     document.querySelector('#fp-nav').classList.remove('big');
            // }
            
        }

    });
    
});




// MOBILE NAVBAR!!!
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if( currentScrollPos <= (window.innerHeight - 150) ) {
    document.getElementById("header").style.background = "unset";
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("top").style.visibility = "hidden";

    document.getElementById("header").style.position = "absolute";
    document.getElementById("header").style.background = "unset";
  }
  else {
    document.getElementById("header").style.background = "white";
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("top").style.visibility = "visible";

    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.background = "#fff";

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;

  }
}


// COUNT UP

setTimeout(function() {
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 1500,
      easing:'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });  
  });
}, 1200);