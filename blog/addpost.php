<?php
require 'config/db.php';
require 'config/config.php';


// Check For Submit
if(isset($_POST['submit'])){
    // Get form data
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $body = mysqli_real_escape_string($conn, $_POST['body']);
    $author = mysqli_real_escape_string($conn,$_POST['author']);

    $query = "INSERT INTO posts(title, author,body) VALUES('$title', '$author', '$body')";

    if(mysqli_query($conn, $query)){
        header('Location: '.ROOT_URL);
    } else {
        echo 'ERROR: '. mysqli_error($conn);
    }
}




?>
    <?php include '_comp/header.php' ?>
        <h1>Add Post</h1>

    <?php include '_comp/form.php'; ?>

    </div>
    <?php include '_comp/footer.php' ?>