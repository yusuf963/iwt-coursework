$(document).ready(function() {
    // Clear form fields on page load
    $("#query-form")[0].reset();
  
    // Query button click event
    $("#query-button").click(function() {
      // Get form values
      var file = $("#file").val();
      var year = $("#year").val();
      var condition = $("#condition").val();
      var tournament = $("#tournament").val();
      var winner = $("#winner").val();
      var runner_up = $("#runner_up").val();
      console.log('year is')

      console.log(year)
    
      // Send AJAX request to query.php with form data
      $.ajax({
        url: "query.php",
        method: "POST",
        data: {
          file: file,
          year: year,
          condition: condition,
          tournament: tournament,
          winner: winner,
          runner_up: runner_up
        },
        success: function(response) {
          // Update table with response data
          $("#result-table").html(response);
        }
      });
    });
  });
