<?php

require_once 'dice.php';

$dices = 1;

if(isset($_GET['dices'])) {
    $dices = $_GET['dices'];
}

$sides = 6;

if(isset($_GET['sides'])) {
    $sides = $_GET['sides'];
}

$dice = [];

for($i = 0; $i < $dices; $i++ ){
    $die = new Dice($sides);
    $die->roll();
    $dice[] = $die;
}

var_dump($_GET);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dice roller</title>
    <link rel="stylesheet" href="style.css">
</head>
    <body>

        <nav>

        </nav>

            <h1>Welcome to dice roller game</h1>
            <h3>built with PHP</h3>

            <form action="" method="get">
                <input type="text" name="dices">
                <select name="sides" id="sides">
                    <option value="4" <?=$sides == 4 ? 'selected' : '' ?> > 4 </option>
                    <option value="6" <?=$sides == 6 ? 'selected' : '' ?> >6</option>
                    <option value="8" <?=$sides == 8 ? 'selected' : '' ?> >8</option>
                    <option value="10" <?=$sides == 10 ? 'selected' : '' ?> >10</option>
                    <option value="20" <?=$sides == 20 ? 'selected' : '' ?>  >20</option>
                </select>
                <br>
                <input type="submit" value="Let's roll">
            </form>

      <div class="dice">
                <?php foreach($dice as $die) : ?>

                <?php echo $die ?>

            <?php endforeach; ?>

      </div>
    </body>
</html>