<?php

  $data = json_decode(file_get_contents("php://input"));

  $firstname =  mysql_real_escape_string($data->firstname);
  $lastname =  mysql_real_escape_string($data->lastname);
  // $email =  mysql_real_escape_string($data->email);
  $Gend =  mysql_real_escape_string($data->Gend);
  $scrtQuestion1 =  mysql_real_escape_string($data->scrtQuestion1);
  $scrtans1 =  mysql_real_escape_string($data->scrtans1);
  $scrtQuestion2 =  mysql_real_escape_string($data->scrtQuestion2);
  $scrtans2 =  mysql_real_escape_string($data->scrtans2);
  $utype =  mysql_real_escape_string($data->utype);
  $username =  mysql_real_escape_string($data->username);
  $password =  mysql_real_escape_string($data->password);
  // $ConfPass =  mysql_real_escape_string($data->ConfPass);

  include 'db.php';

  
?>
