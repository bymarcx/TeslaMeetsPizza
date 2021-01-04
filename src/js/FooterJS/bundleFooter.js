import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'popper.js';
import 'bootstrap';
import fullpage from 'fullpage.js';

require("./Custom/custom");

$(document).ready(function() {

    // initalizing fullpage.js :: Letz fetz!
    var fullPageInstance = new fullpage('#fullpage', {

      // options here
      scrollBar: true,
      autoScrolling:true,
      scrollHorizontally: false,
      css3: true,
      lockAnchors: true,
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: ['Model S', 'Geschmack', 'Performance', 'Nachhaltigkeit', 'Wichtige Daten', 'Bestellen'],
      responsiveWidth: 992,

      afterRender: function(){

        // make tooltip clickable
        Array.prototype.forEach.call(document.querySelectorAll('#fp-nav ul li .fp-tooltip'), function(t, i){
          t.addEventListener('click', function(e) {
            event.target.parentElement.querySelector('a').dispatchEvent(new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            }))
          });
        });
  
      },

    });

    //methods
    fullpage_api.setAllowScrolling(true);

  });


// MOBILE NAVBAR
// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if( currentScrollPos <= (window.innerHeight) ) {
    document.getElementById("header").style.background = "unset";
    document.getElementById("buttons").style.visibility = "hidden";
    document.getElementById("top").style.visibility = "hidden";
    document.getElementById("header").style.width = "unset";
    
    document.getElementById("header").style.position = "absolute";
    document.getElementById("header").style.background = "unset";
  }
  else if (currentScrollPos <= (window.innerHeight + 300 )) {
    document.getElementById("header").style.background = "white";
    document.getElementById("buttons").style.visibility = "visible";
    document.getElementById("top").style.visibility = "visible";
    document.getElementById("header").style.width = "100%";

    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.background = "#fff";
  }
  else {
    document.getElementById("header").style.top = "-150px";

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;

  }
}


// COUNT UP
// Count up number on stage
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
      }

    });  
  });
}, 1200);

