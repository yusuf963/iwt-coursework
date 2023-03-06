<?php

// make the API request
$menGrandSlam = 'https://www.dcs.bbk.ac.uk/~ptw/teaching/IWT/2023/coursework/mens-grand-slam-winners.json';
$womenGrandSlam = 'https://www.dcs.bbk.ac.uk/~ptw/teaching/IWT/2023/coursework/womens-grand-slam-winners.json';
$data = file_get_contents('https://www.dcs.bbk.ac.uk/~ptw/teaching/IWT/2023/coursework/womens-grand-slam-winners.json');

// decode the JSON response
$json = json_decode($data);

// set the response headers to indicate that this is a JSON response
header('Content-Type: application/json');

// output the JSON response
echo json_encode($json[0]);

?>
