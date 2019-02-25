<?php
require 'config/config.php';
require 'config/db.php';

$id = mysqli_real_escape_string($conn,$_GET['id']);

$query = 'SELECT * FROM posts WHERE id = ' .$id;
$result = mysqli_query ($conn,$query);
$post = mysqli_fetch_assoc($result);
mysqli_free_result($result);
mysqli_close($conn);
?>

        <?php include '_comp/header.php' ?>
        <div class="container">
            <h1> <?= $post['title'] ?> </h1>

            <small> Created on <?= $post['created_at'] ?> by <?= $post['author'] ?> </small>
            <p> <?= $post['body'] ?> </p>
            <a class="btn btn-success" href="<?= ROOT_URL ?>editpost.php?id=<?=$post['id']?>">Edit</a>

        </div>
    <?php include '_comp/footer.php' ?>
