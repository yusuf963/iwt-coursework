document.getElementById("year-op").value = "=";
$(document).ready(function() {

  // Clear all form inputs
  $("#query-form :input").val("");
  
  // Handle "Send Query" button click
  $("#send-query").click(function() {
    // Get form data
    var formData = {
      file: $("#file").val(),
      year: $("#year").val(),
      yearOperator: $("#year-op").val(),
      tournament: $("#tournament").val(),
      winner: $("#winner").val(),
      runnerUp: $("#runner-up").val()
    };

    // Check if no form input is entered
    if ($.isEmptyObject(formData) || (formData.year == "" && formData.tournament == "" && formData.winner == "" && formData.runnerUp == "")) {
      // Set formData to have an empty value for all form fields except for the "file" field
      formData = {
        file: $("#file").val(),
        year: "",
        yearOperator: "",
        tournament: "",
        winner: "",
        runnerUp: ""
      };
    }

    // Send GET request to iwt-cw.php with form data as query string
    $.get("iwt-cw.php", formData, function(data) {
      // Clear existing table rows
      $("#results-table tbody").empty();
      // Add new table rows for each result
      $.each(data, function(index, result) {
        var cleanResult = {...result, runnerup: result['runner-up']}
        $("#results-table tbody").append(
          "<tr><td>" + cleanResult.tournament + "</td>" +
          "<td>" + cleanResult.year + "</td>" +
          "<td>" + cleanResult.winner + "</td>" +
          "<td>" + cleanResult.runnerup + "</td></tr>"
        );
      });
    }, "json").fail(function(xhr, status, error) {
      // Show error message if there is an error
      alert("Error: " + xhr.responseText);
    });
  });
  
  // Handle "Clear Input" button click
  $("#clear-input").click(function() {
    // Clear all form inputs
    $("#query-form :input").val("");
  });
  
  // Handle "Clear Output" button click
  $("#clear-output").click(function() {
    // Clear all table rows
    $("#results-table tbody").empty();
  });
  
});

console.log('vewr')