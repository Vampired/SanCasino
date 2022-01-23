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

<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/86ce0e705f.js" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" href="earningMoney.css">
        <link rel="stylesheet" href="../header/header.css">
    </head>

    
    <body>
        <div class="header"> 
        <?php  if (isset($_SESSION['username'])) : ?>
    	    <p>Welcome: <strong><?php echo $_SESSION['username']; ?></strong></p>
        <?php endif ?>
            <div class="roulette_wheel_button" id="roulette_wheel_button">
            Roulette Wheel
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

        <div class="wrapper">
            <span class="circle_to_click" id="circle_to_click">$</span>
        </div>
    </body>  
    <script type="text/javascript" src="earningMoney.js"></script>
    <script type="text/javascript" src="../header/header.js"></script>
</html>
