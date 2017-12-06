<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="semantic/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="css/timesheet.css">
    <script src="js/timesheet.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="semantic/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/tagcloud.jquery.min.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="js/tagscript.js"></script>
    <script src="semantic/semantic.min.js"></script>
</head>


<body>
<?php include('html/formulaire'); ?>
<div class="ui container pushable" id="global">

    <?php include('html/lateral.html'); ?>

    <div class="pusher">
        <div class="ui container" id="content">
            <div class="ui basic segment">
                <?php include('html/home.html'); ?>

                <?php include('html/competences.html'); ?>

                <?php include('php/duree.php'); ?>
                <?php include('html/realisations.html'); ?>

                <?php include('html/experiences.html'); ?>

                <?php include('html/formations.html'); ?>


            </div>

        </div>

    </div>


</body>