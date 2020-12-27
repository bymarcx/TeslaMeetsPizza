import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'popper.js';
import 'bootstrap';

import fullpage from 'fullpage.js';

require("./Custom/custom");

$(document).ready(function() {

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
      responsiveWidth: 992,

    });

    //methods
    fullpage_api.setAllowScrolling(true);

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
        //alert('finished');
      }

    });  
  });
}, 1200);

