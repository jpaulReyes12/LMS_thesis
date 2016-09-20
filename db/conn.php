<?php

  $c_servername = "localhost";
  $c_username ="root";
  $c_password="12345";
  $c_dbname = "learning_mgt";
  $con=mysqli_connect($c_servername,$c_username,$c_password,$c_dbname);
  if(!$con)
  {
  echo "Connection Failed!";
  }


?>
