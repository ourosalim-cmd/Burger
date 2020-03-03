$(function(){
$(".addBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("adding new burger");
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: "0"
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

////////
$(".devour").on("click", function(event) {
    var parent = $(this).parent();
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    // $(".devBurger").append($(this));

    var newDevouredState = {
      devoured: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed to ", devoured);
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });

////////////////////////////


});