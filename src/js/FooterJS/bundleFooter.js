import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'popper.js';
import 'bootstrap';

// fullpage and webpack is somehow now working together. :/

//import './Custom/collapse_sec.js'
//import './Custom/init-fp.js'

console.log("TESTING");

// refresh page on browser resize
// initalizing fullpage new on every resize
// FULLPAGE: "mimimimi" 
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
});


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
        
        showActiveTooltip: true,
        lockAnchors: true,
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

    $('#losd').click(function(){

        if(!$("#collapseExample").hasClass('show')){

            document.getElementById("stage").style.display = "none";
            document.getElementById("sec2").style.display = "none";
            document.getElementById("sec3").style.display = "none";
            document.getElementById("sec4").style.display = "none";

            document.querySelector('#sec1').classList.add('fp-normal-scroll');
            document.querySelector('#sec1').classList.add('fp-scrollable');

            $.fn.fullpage.setResponsive(true)

            // setTimeout(function() {
            //     $.fn.fullpage.setAllowScrolling(false);
            //     $.fn.fullpage.reBuild();
            //     console.log("set scrolling false;")
            // }, 100);
            
            // document.getElementById("stage").style.display = "none";
            // document.getElementById("sec2").style.display = "none";
            // document.getElementById("sec3").style.display = "none";
            // document.getElementById("sec4").style.display = "none";


            // if (document.querySelector('#fp-nav') !== null) {
            //     document.querySelector('#fp-nav').classList.add('big');
            // }

            // // setTimeout(function() {
            // //     scrollToElement(collapseExample);
                
            // // }, 300);
            

        }
        else {


            document.getElementById("stage").style.display = "table";
            document.getElementById("sec2").style.display = "table";
            document.getElementById("sec3").style.display = "table";
            document.getElementById("sec4").style.display = "table";

            $.fn.fullpage.setResponsive(false);

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

  if(currentScrollPos <= (window.innerHeight - 150) ) {
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