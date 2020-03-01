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
});