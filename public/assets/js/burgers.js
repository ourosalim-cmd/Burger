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
    //var id = $(this).data("id");
    var id = $(this).data("id");
    console.log(id);
    var devoured = $(this).data("isdevoured");
    //console.log($(this).parent().parent());
    console.log(devoured);
    //console.log("simple devoured: "+devoured);
    // $(".devBurger").append($(this));

    var newValue = {
      devoured: true
    };
    console.log("changed to ", newValue);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newValue
    }).then(
      function() {
        console.log("changed to ", newValue.devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});