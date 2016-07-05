<?php

  // mysql_connect("localhost", "root", "12345");
  // mysql_select_db("learning_mgt");

  require 'db.php';


  $data = json_decode(file_get_contents("php://input"));

  $firstname = $data->firstname;
  $lastname = $data->lastname;
  $Gend = $data->Gend;
  $scrtQuestion1 = $data->scrtQuestion1;
  $scrtans1 = $data->scrtans1;
  $scrtQuestion2 = $data->scrtQuestion2;
  $scrtans2 = $data->scrtans2;
  $utype = $data->utype;
  $username = $data->username;
  $password = $data->password;

  //
  //
  // $query = 'INSERT INTO user_info("FirstName", "LastName", "User_type", "gender")VALUES("'.$firstname.'","'.$lastname .'","'.$utype.'","'.$Gend.'")';
  //
  // $mysql_query($query);

  $statement = $db->prepare("INSERT INTO user_info('Firstname', 'LastName', 'User_type', gender)VALUES(?, ?, ?, ?)");

  $statement->bind_param($firstname, $lastname, $utype, $Gend);

  $statement->execute();

  
?>
