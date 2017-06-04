(function($) {
    $(document).ready(function() {
      $('.more-link').click(function() {
        $('.more-link').each(function() {
          $(this).css({"width":"", "height":"", "top": "", "left" : ""});
        });
        $(this).css({"width":"300%", "height":"200%"});
      });
    });
}(jQuery));
