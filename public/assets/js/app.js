// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/sushis/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newSushi = {
        sushi_name: $("#sushiNameInput").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/sushis/", {
        type: "POST",
        data: newSushi
      }).then(
        function() {
          console.log("created new sushi");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });