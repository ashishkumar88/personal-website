(function($) {
    $(document).ready(function() {
      $('.more-link').click(function(e) {
      	e.preventDefault();
        $('.more-link').each(function() {
          $(this).closest('article').css({"width":"", "height":"", "top": "", "left" : ""});
        });
        var parent = $(this).closest('article');
        var id = parent.attr('id');
        var n = id.lastIndexOf('-');
        var post_id = id.substring(n + 1);
        $.ajax({
          type:"POST",
          url: "http://dev-personal-profile.ws.asu.edu/wp-admin/admin-ajax.php",
          data: { 
              action: "my_action",
        		  "post-id" : post_id
          },
          success: function (data) {         
          	alert('here');
            var current_width = parent.width()*2;
            var current_height = parent.height()*1.5;
            parent.css({"width":current_width, "height":current_height});
          }
      	});
      });
    });
}(jQuery));
