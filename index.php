<?php
session_start();
if(!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>
        <?php 
            echo "Profile : "
        ?>
    </title>
</head>
<body>
    <nav>
        <strong>
            Library Managment System
        </strong>
        <b id="title    ">
            <?php
                echo "Welcome : "
            ?>
        </b>
        <button id="menu">MENU</button>
        <ul>
            <li><a href="profile.php">Profile</a></li>
            <li><a href="home.php">Home</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>
    <section class="content">

    </section>
    <footer>

    </footer>
</body>
</html>