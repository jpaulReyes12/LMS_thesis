<?php

  $data = json_decode(file_get_contents("php://input"));

  $firstname = $mysqli -> real_escape_string($data->firstname);
  $lastname = $mysqli -> real_escape_string($data->lastname);
  // $email = $mysqli -> real_escape_string($data->email);
  $Gend = $mysqli -> real_escape_string($data->Gend);
  $scrtQuestion1 = $mysqli -> real_escape_string($data->scrtQuestion1);
  $scrtans1 = $mysqli -> real_escape_string($data->scrtans1);
  $scrtQuestion2 = $mysqli -> real_escape_string($data->scrtQuestion2);
  $scrtans2 = $mysqli -> real_escape_string($data->scrtans2);
  $utype = $mysqli -> real_escape_string($data->utype);
  $username = $mysqli -> real_escape_string($data->username);
  $password = $mysqli -> real_escape_string($data->password);
  // $ConfPas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         s = $mysqli -> real_escape_string($data->ConfPass);

  include 'db.php';

  $query = "INSERT INTO students('FirstName', 'LastName', 'User_type', 'gender')
    VALUES(?,?,?,?)";
  $statement = $mysqli->prepare($query);

  $statement->bind_param(
    '$firstname',
    '$lastname',
    '$utype',
    '$Gend'
  );

  return true;

?>
