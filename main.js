(function($) {
    $(document).ready(function() {
      $('.more-link').click(function(e) {
      	e.preventDefault();
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
            data = JSON.parse(data);
            $('.modal-title').html(data.post_title);
            $('.modal-body').html(data.post_content);
          	$("#myModal").modal('show');
          }
      	});
      });
    });
}(jQuery));
