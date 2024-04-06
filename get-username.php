<?php
// Get the saved username from the saved-username.txt file
$storedUsername = file_get_contents('saved-username.txt');

// Respond with the username
header('Content-Type: application/json');
echo json_encode(array('username' => $storedUsername));
?>