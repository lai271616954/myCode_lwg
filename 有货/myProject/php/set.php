<?php
    ini_set("error_reporting","E_ALL & ~E_NOTICE");
    header('Content-type:text/html;chrset=utf-8');
    $id = $_POST["userId"];
	  $pwd = $_POST["userPwd"];
    $conn=mysql_connect('localhost','root','root');
    if($conn){
		mysql_select_db("setlog");
    }
    $result = mysql_query("select * from log where userid='$id'",$conn);
    $num=mysql_num_rows($result);
    if($num==0){
    mysql_query("insert into log values ('$id','$pwd')",$conn);
    echo 'success';
    }
    else{
      echo 'fail';
    }

?>