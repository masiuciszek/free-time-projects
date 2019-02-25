<?php

// require 'config.php';

//create Connection
// $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
// $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
$conn = mysqli_connect('localhost', 'root', 'legia94', 'blog_php');

// check connection
if(mysqli_connect_errno()) {
    //connceted failed
    echo 'Failed to connect to MySQL ' . mysqli_connect_errno();
}