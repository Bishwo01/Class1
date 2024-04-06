<?php
// Retrieve the username and save it to a file named saved-username.txt
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if(isset($input['username'])) {
  $username = $input['username'];

  file_put_contents('saved-username.txt', $username);

  // Respond with a success message or status code
  header('Content-Type: application/json');
  http_response_code(200);
  echo json_encode(array('message' => 'Username saved successfully'));
} else {
  // Respond with an error message if username is not provided
  header('Content-Type: application/json');
  http_response_code(400);
  echo json_encode(array('message' => 'Username not provided'));
}
?>