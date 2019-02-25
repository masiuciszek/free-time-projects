<?php
require 'config/config.php';
require 'config/db.php';

// MySQLI syntax
//select all from posts;
$query = 'SELECT * FROM posts ORDER BY created_at DESC';

//Get result
$result = mysqli_query ($conn,$query);

//fetch data
$posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
// var_dump($posts);

//free result
mysqli_free_result($result);

// close connection
mysqli_close($conn);
?>

    <?php include '_comp/header.php'; ?>
        <div class="container">
            <h1>POSTS</h1>
            <div class="row">
            <?php foreach ($posts as $post) : ?>
            <div class="well col-md-12">
                <h3> <?= $post['title']; ?>  </h3>
                <small> Created on <?= $post['created_at']; ?>
                    by <?= $post['author']; ?>
                </small>
                <p><?= $post['body'] ?></p>
                <!-- <a class="btn btn-success" href="</?= ROOT_URL ?> post.php?id=</?= $post['id']; ?>"> Read More</a> -->
                <a class="btn btn-success" href="post.php?id=<?= $post['id']; ?>">Read more</a>
            </div>
<?php endforeach; ?>
            </div>
        </div>
<?php include '_comp/footer.php' ?>