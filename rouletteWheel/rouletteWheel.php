<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: ../login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: ../login.php");
  }
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="rouletteWheel.css">
    <link rel="stylesheet" href="../header/header.css">

    <title>Spin Wheel</title>
</head>
<body>
        <div class="header">
          <?php  if (isset($_SESSION['username'])) : ?>
            <p>Welcome: <strong><?php echo $_SESSION['username']; ?></strong></p>
          <?php endif ?>
            <div class="earning_money_button" id="earning_money_button">
            Earning Money
            </div>
          <div id="balance_window" class="balance_window">
            <div class="">  Balance : </div>  
            <div id="user_balance_input" class="user_balance_input"> </div>
          </div>
                        <div class="blackjack_cards_button" id="blackjack_cards_button">
            Black Jack
            </div>
          <div class="drop_money_btn" id="drop_money_btn"> Drop all your money </div>
          <?php  if (isset($_SESSION['username'])) : ?>
            <p> <a href="../login.php?logout='1'">Logout</a> </p>
          <?php endif ?>
        </div>
    
        <div class="displayI">Spin cost: 15$</div>
        <button id="spin">SPIN ME</button>
        <span class="arrow"></span>
    <div class="container">
        <div class="one">15$</div>
        <div class="two">5$</div>
        <div class="three">30$</div>
        <div class="four">1$</div>
        <div class="five">500$</div>
        <div class="six">3$</div>
        <div class="seven">1$</div>
        <div class="eight">100$</div>
    </div>
      <div class="display">-</div>
<script type="text/javascript" src="rouletteWheel.js"></script>
<script type="text/javascript" src="../header/header.js"></script>
</body>
</html>