(function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('.my-button').bind('click', function(e) {
               
                // Prevents the default action to be triggered. 
                e.preventDefault();
  console.log('click');
                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup();

            });

        });

    })(jQuery);
    
    
     function goDoSomething(d){
            $("#tt").text(d.getAttribute("data-price"));
            $("#product").val(d.getAttribute("data-product"));
        }