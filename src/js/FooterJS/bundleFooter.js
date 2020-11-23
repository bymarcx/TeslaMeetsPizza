import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'popper.js';
import 'bootstrap';

// fullpage and webpack is somehow now working together. :/

//import './Custom/collapse_sec.js'
//import './Custom/init-fp.js'

console.log("TESTING");


$(document).ready(function() {

    // It's only fullpage on desktop!
    if($(window).width() > 992) {
  
      $('#fullpage').fullpage({
        //options here
        scrollBar: true,
        autoScrolling:true,
        scrollOverflow:true,
        scrollHorizontally: false,
        css3: true,
        
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Model 3', 'Geschmack', 'Performance', 'Technische Daten', 'Kaufen'],
  
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
      $.fn.fullpage.setAllowScrolling(true);
  
    }
  
    });





$(document).ready(function () {

    $('#los').click(function(){

        if(!$("#collapseExample").hasClass('show')){

            setTimeout(function() {
                fullpage_api.reBuild();
                //fullpage_api.moveTo(2);
                $.fn.fullpage.setAllowScrolling(false);
                
            }, 100);
            
            if (document.querySelector('#fp-nav') !== null) {
                document.querySelector('#fp-nav').classList.add('big');
            }

            // setTimeout(function() {
            //     scrollToElement(collapseExample);
                
            // }, 300);
            

        }
        else {
            setTimeout(function() {
                fullpage_api.reBuild();                
            }, 300);
            $.fn.fullpage.setAllowScrolling(true);

            if (document.querySelector('#fp-nav') !== null) {
                document.querySelector('#fp-nav').classList.remove('big');
            }
            
        }

    });
    
});




// MOBILE NAVBAR!!!

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if(currentScrollPos <= window.innerHeight) {
    document.getElementById("header").style.background = "unset";
    document.getElementById("buttons").style.visibility = "hidden";
  }
  else {
    document.getElementById("header").style.background = "white";
    document.getElementById("buttons").style.visibility = "visible";

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;

  }
}