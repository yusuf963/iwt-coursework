<?php

$mensFile = "./mens-grand-slam-winners.json";
$womensFile = "./womens-grand-slam-winners.json";

// Check if the query parameters are set
if(isset($_SERVER['QUERY_STRING'])) {
  
  // Get the query parameters
  $query = $_SERVER['QUERY_STRING'];
  parse_str($query, $params);
  
  // Get the individual parameters
  $file = $params['file'];
  $year = $params['year'];
  $yearOperator = $params['yearOperator'];
  $tournament = $params['tournament'];
  $winner = $params['winner'];
  $runnerUp = $params['runnerUp'];
  
  // Validate the query parameters
  if(!file_exists($file)) {
    $error = array("error" => "File you have choseing is not available.");
    echo json_encode($error);
    exit();
  }
  
  // Load the data from the file
  $jsonData = file_get_contents($file);
  $data = json_decode($jsonData, true);
  
  // Filter the data based on the query parameters
  $filteredData = array();

  if(empty($year) && empty($yearOperator) && empty($tournament) && empty($winner) && empty($runnerUp)) {
    // Return all tournament results from the selected file
    $filteredData = $data;
  } else {
    // Filter the data based on the query parameters
    foreach($data as $item) {
      if(($yearOperator == "=" && $item['year'] == $year) || ($yearOperator == "<" && $item['year'] < $year) || ($yearOperator == ">" && $item['year'] > $year)) {
        if($tournament == "Any" || $item['tournament'] == $tournament) {
          if(empty($winner) || stripos($item['winner'], $winner) !== false) {
            if(empty($runnerUp) || stripos($item['runner-up'], $runnerUp) !== false) {
              $filteredData[] = $item;
            }
          }
        }
      }
    }
  }
  
  // Return the filtered data
  echo json_encode($filteredData);
  
} else {
  $error = array("error" => "Invalid query parameters. please try again with valid filtering");
  echo json_encode($error);
  exit();
}

?>
