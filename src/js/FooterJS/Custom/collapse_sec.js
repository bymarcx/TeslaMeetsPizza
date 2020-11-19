$(document).ready(function () {

    $('#los').click(function(){

        if(!$("#collapseExample").hasClass('show')){

            setTimeout(function() {
                fullpage_api.reBuild();
                fullpage_api.moveTo(2);
                
            }, 100);
            $.fn.fullpage.setAllowScrolling(false);

            if (document.querySelector('#fp-nav') !== null) {
                document.querySelector('#fp-nav').classList.add('big');
            }

        }
        else {
            
            $.fn.fullpage.setAllowScrolling(true);
            setTimeout(function() {
                fullpage_api.reBuild();
                fullpage_api.moveTo(2);
                
            }, 300);

            if (document.querySelector('#fp-nav') !== null) {
                document.querySelector('#fp-nav').classList.remove('big');
            }
            
        }

    });
    
});


