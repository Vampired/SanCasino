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
    <link rel="stylesheet" href="blackjackCards.css">
    <link rel="stylesheet" href="../header/header.css">

    <title>Blackjack Game</title>
</head>

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
                  <div class="roulette_wheel_button" id="roulette_wheel_button">
      Roulette Wheel
      </div>
    <div class="drop_money_btn" id="drop_money_btn"> Drop all your money </div>
    <?php  if (isset($_SESSION['username'])) : ?>
      <p> <a href="../login.php?logout='1'">Logout</a> </p>
    <?php endif ?>
  </div>

<div class="wrapper">

<div class="container">
    <div class="playerhand">
      <div class="playercard1 card">-</div>
      <div class="playercard2 card">-</div>
      <div class="playercard3 card">-</div>
      <div class="playercard4 card">-</div>
        
    </div>
    
    <div class="menugrybj"> 
      <div>
      <div class="winner" ></div>
      <p>Player points</p>
        </div>
      <div class="playerpkt"></div>
      <p>Computer points</p>
      <div class="computerpkt"></div>
      <div class="buttons">
        <input class="hitbtn drawsbtn" type="button" value="Hit"/>
        <input class="hitbtn1 drawsbtn" type="button" value="Hit"/>
        <input class="standbtn drawsbtn" type="button" value="Stand"/>
        <input class="standbtn1 drawsbtn" type="button" value="Stand"/>
        <input class="postawione" type="number"/>
        <input class="postawbtn drawsbtn" type="button" value="Bet"/>
        <input class="zpbtn" type="button" value="Play again"/>
    </div>
      
    </div>
    
    <div class="playerhand">
      <div class="computercard1 card"></div>
      <div class="computercard2 card"></div>
      <div class="computercard3 card"></div>
      <div class="computercard4 card"></div>
    </div>
  
  </div>
</div>
  <script type="text/javascript" src="blackjackCards.js"></script>
  <script type="text/javascript" src="../header/header.js"></script>
  </body>
  </html>