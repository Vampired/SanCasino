let playercard1 = document.querySelector('.playercard1');
let playercard2 = document.querySelector('.playercard2');
let playercard3 = document.querySelector('.playercard3');
let playercard4 = document.querySelector('.playercard4');

let computercard1 = document.querySelector('.computercard1');
let computercard2 = document.querySelector('.computercard2');
let computercard3 = document.querySelector('.computercard3');
let computercard4 = document.querySelector('.computercard4');

let hitbtn = document.querySelector('.hitbtn');
let hitbtn1 = document.querySelector('.hitbtn1');
let standbtn = document.querySelector('.standbtn');
let standbtn1 = document.querySelector('.standbtn1');
let postawbtn = document.querySelector('.postawbtn');
let zpbtn = document.querySelector('.zpbtn');

let postawione = document.querySelector('.postawione');

let playerpkt = document.querySelector('.playerpkt');
let computerpkt = document.querySelector('.computerpkt');

let winner = document.querySelector('.winner');

let playerhand = document.querySelector('.playerhand');

let deck = [2,3,4,5,6,7,8,9,10,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10,10,
            2,3,4,5,6,7,8,9,10,10,10,10,11];

function randomize(max,min) {
    return Math.floor(((Math.random() * 100)%max) + min);
}

let randomplayercard1 = deck[randomize(51,0)];
let randomplayercard2 = deck[randomize(51,0)];
let randomplayercard3 = deck[randomize(51,0)];
let randomplayercard4 = deck[randomize(51,0)];

let randomcomputercard1 = deck[randomize(51,0)];
let randomcomputercard2 = deck[randomize(51,0)];
let randomcomputercard3 = deck[randomize(51,0)];
let randomcomputercard4 = deck[randomize(51,0)];


function win() {
   winner.innerHTML = "Player won";
   hitbtn.style.display = "none";
   hitbtn1.style.display = "none";
   zpbtn.style.display = "flex";
   let current_balance = localStorage.getItem('balance')
   new_current_balance = parseInt(current_balance) + (parseInt(postawione.value) * 2);
   localStorage.setItem('balance', new_current_balance);
   get_money_ammount()
}
function lose() {
   winner.innerHTML = " Computer won";
   hitbtn.style.display = "none";
   hitbtn1.style.display = "none";
   standbtn.style.display = "none";
   standbtn1.style.display = "none";
   zpbtn.style.display = "flex";
}
function draw() {
   winner.innerHTML = " Draw";
   zpbtn.style.display = "flex";
   let current_balance = localStorage.getItem('balance')
   new_current_balance = parseInt(current_balance) + parseInt(postawione.value);
   localStorage.setItem('balance', new_current_balance);
   get_money_ammount()
   
}

playercard3.style.visibility = "hidden";
playercard4.style.visibility = "hidden";
computercard3.style.visibility = "hidden";
computercard4.style.visibility = "hidden";

zpbtn.style.display = "none";
hitbtn.style.display = "none";
hitbtn1.style.display = "none";
standbtn.style.display = "none";
standbtn1.style.display = "none";

function get_money_ammount() {
    let test = localStorage.getItem('balance');
    if(test == null) {
      user_balance_input.innerHTML = "000$";
    }
    else if(test <= 9) {
      user_balance_input.innerHTML = "00" + test + "$";
    }
      else if(test <= 99) {
      user_balance_input.innerHTML = "0" + test + "$";
    }
    else {
      user_balance_input.innerHTML = test + "$";
      
    }
    
  }

const change_page_to_earning_money = document.getElementById('earning_money_button');
const change_page_to_wheel = document.getElementById('roulette_wheel_button');

change_page_to_earning_money.addEventListener("click", change_page_to_earning, false);
change_page_to_wheel.addEventListener("click", change_page_to_rulette_wheel, false);

function change_page_to_earning() {
    document.location.href = "../earningMoney/earningMoney.php";
};
function change_page_to_rulette_wheel() {
    document.location.href = "../RouletteWheel/RouletteWheel.php";
};


postawbtn.onclick = function () {
    current_balance = localStorage.getItem('balance');

if(parseInt(current_balance) >= parseInt(postawione.value) && parseInt(postawione.value) >= 1)
    {
        current_balance -= postawione.value;
        localStorage.setItem('balance', current_balance);
        get_money_ammount()

        winner.innerHTML = "Game starts";
        playerpkt.innerHTML = "-";
        computerpkt.innerHTML = "-";
        postawbtn.style.display = "none";
        postawione.style.display = "none";
        hitbtn.style.display = "flex";
        standbtn.style.display = "flex";
       
        
        
        playercard1.innerHTML = randomplayercard1;
        playercard2.innerHTML = randomplayercard2;
      
        computercard1.innerHTML = randomcomputercard1;
        computercard2.innerHTML = "hiden";
        
        playerpkt.innerHTML = (randomplayercard1 + randomplayercard2);
        
        if(randomplayercard1 + randomplayercard2 == 21){
          win()
        }
    }
else {
    alert("You have no money");
}}

standbtn.onclick = function () {
  hitbtn.style.display = "none";
  standbtn.style.display = "none";
  computercard2.innerHTML = randomcomputercard2;
  computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2);
  
  if(randomcomputercard1 + randomcomputercard2 > randomplayercard1 + randomplayercard2){
    lose()
  }
  
  if(randomcomputercard1 + randomcomputercard2 == randomplayercard1 + randomplayercard2){
    if(randomcomputercard1 + randomcomputercard2 >= 17){
      draw()
    }
    else{
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2){
            draw()
          }
        }
      }
    }
    
      
    }
  }
  
  if(randomcomputercard1 + randomcomputercard2 < randomplayercard1 + randomplayercard2){
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2){
            draw()
          }
        }
      }
    }
    
  }
    

}

hitbtn.onclick = function (){
  hitbtn.style.display = "none";
  hitbtn1.style.display = "flex";
  standbtn.style.display = "none";
  standbtn1.style.display = "flex";
  playercard3.innerHTML = randomplayercard3;
  playercard3.style.visibility = "visible";
  playerpkt.innerHTML = (randomplayercard1 + randomplayercard2 + randomplayercard3 );
    
  if(randomplayercard1 + randomplayercard2 + randomplayercard3 > 21){
    lose()
  }
 }

standbtn1.onclick = function () {
  hitbtn1.style.display = "none";
  standbtn1.style.display = "none";
  computercard2.innerHTML = randomcomputercard2;
  computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2);
  
  if(randomcomputercard1 + randomcomputercard2 > randomplayercard1 + randomplayercard2 + randomplayercard3){
    lose()
  }
  
  if(randomcomputercard1 + randomcomputercard2 == randomplayercard1 + randomplayercard2 + randomplayercard3){
    if(randomcomputercard1 + randomcomputercard2 >= 17){
      draw()
    }
    else{
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2 + randomplayercard3){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2 + randomplayercard3){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2 + randomplayercard3){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3){
            draw()
          }
        }
      }
    }
    
      
    }
  }
  
  if(randomcomputercard1 + randomcomputercard2 < randomplayercard1 + randomplayercard2 + randomplayercard3){
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2 + randomplayercard3){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2 + randomplayercard3){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2 + randomplayercard3){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3){
            draw()
          }
        }
      }
    }
    
  }
    

}


hitbtn1.onclick = function (){
  playercard4.innerHTML = randomplayercard4;
  playercard4.style.visibility = "visible";
  hitbtn1.style.display = "none";
  standbtn1.style.display = "none";
  playerpkt.innerHTML = (randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4 );
    
  if(randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4 > 21){
    lose()
  }
  else{
    
  computercard2.innerHTML = randomcomputercard2;
  computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2);
  
  if(randomcomputercard1 + randomcomputercard2 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
    lose()
  }
  
  if(randomcomputercard1 + randomcomputercard2 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
    if(randomcomputercard1 + randomcomputercard2 >= 17){
      draw()
    }
    else{
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            draw()
          }
        }
      }
    }
    
      
    }
  }
  
  if(randomcomputercard1 + randomcomputercard2 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
    computercard3.innerHTML = randomcomputercard3;
    computercard3.style.visibility = "visible";
    computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3);
    
    if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > 21){
      win()
    }
    else{
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        lose()
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 >= 17){
          draw()
        }
        else{
          computercard4.innerHTML = randomcomputercard4;
          computercard4.style.visibility = "visible";
          computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
           win()
          }
          else{
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            win()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            lose()
          }
           if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            draw()
          }
        }
        }
      }
      if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
        computercard4.innerHTML = randomcomputercard4;
        computercard4.style.visibility = "visible";
        computerpkt.innerHTML = (randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4);
        if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > 21){
          win()
        }
        else{
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 < randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            win()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 > randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            lose()
          }
          if(randomcomputercard1 + randomcomputercard2 + randomcomputercard3 + randomcomputercard4 == randomplayercard1 + randomplayercard2 + randomplayercard3 + randomplayercard4){
            draw()
          }
        }
      }
    }
    
  }
    
  }
 }
 

zpbtn.onclick = function () {
  window.setInterval(location.reload(true));
};
