<?php
  $servername = "localhost";
  $username = "root";
  $password = "12345";
  $db = "learning_mgt";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $db);

  // Check connection
  if ($conn->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
  }
  else {
    # code...
    echo "Connected successfully";
  }
?>
