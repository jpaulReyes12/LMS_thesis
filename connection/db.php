<?php
  $servername = "localhost";
  $username = "root";
  $password = "12345";
  $db = "learning_mgt";

  // Create connection
  $db = new mysqli($servername, $username, $password, $db);

  if ($db->connect_errno > 0) {
    die('Unable to connect to database [' . $db->connect_error . ']');
  }
?>
