$(document).ready(function() {
    $('#fullpage').fullpage({
      //options here
      scrollBar: true,
      autoScrolling:true,
      scrollOverflow:true,
      scrollHorizontally: false,
      css3: true,
      normalScrollElements: '',
      
      navigation: true,
      navigationPosition: 'left',
      navigationTooltips: ['Model 3', 'Geschmack', 'Performance', 'Technische Daten', 'Kaufen'],

      afterLoad: function( origin, destination, direction){
      var loadedSection = this;

        //using index to change logo color.
        if(destination.index == 0){
          document.getElementById("textlogo").style.fill="white";
        }
        if(destination.index == 1){
          document.getElementById("textlogo").style.fill="black";
        }
        if(destination.index == 2){
          document.getElementById("textlogo").style.fill="black";
        }

      } 

    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
  });