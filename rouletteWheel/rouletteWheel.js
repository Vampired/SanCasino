let container = document.querySelector(".container");
let spin_btn = document.getElementById("spin");
let display = document.querySelector('.display');
const change_page_to_earning_money = document.getElementById('earning_money_button'); 

let number = 0;
let stopnie = 45; // stopnie 360/7

 const wygranatab = {
    1: 100,
    2: 1,
    3: 3,
    4: 500,
    5: 1,
    6: 30,
    7: 5,
    8: 15,
  };
 
 
 change_page_to_earning_money.addEventListener("click", change_page, false);
 spin_btn.addEventListener("click", spin_the_wheel, false);


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

function disable_buttons_while_spinning() {
    spin_btn.disabled()
}

 function handleWin(actualDeg) {
    const wygrana = Math.ceil(actualDeg / stopnie);
    display.innerHTML = wygranatab[wygrana];
    let current_balance = localStorage.getItem('balance')
    new_current_balance = parseInt(current_balance) + wygranatab[wygrana]
    localStorage.setItem('balance', new_current_balance);
    get_money_ammount()
    spin_btn.addEventListener("click", spin_the_wheel, false);
    
  };


 function change_page() {
    document.location.href = "../earningMoney/earningMoney.html";
};

 function spin_the_wheel() {
    spin_btn.removeEventListener("click", spin_the_wheel, false);
    display.innerHTML = "-";
    disable_buttons_while_spinning
    let current_balance = localStorage.getItem('balance');
    if(current_balance >= 15)
        {
            current_balance -= 15;
            localStorage.setItem('balance', current_balance);
            get_money_ammount()
            container.style.transition = 'none';
            display.innerHTML = "-";
            number = Math.floor(5000 + Math.random() * 5000);
            container.style.transition = 'all 2s ease-out';
            container.style.transform = `rotate(${number-22.5}deg)`;
        }
    else {
        display.innerHTML = "You have no money";
    }

}

container.addEventListener('transitionend', () => {
  container.style.transition = 'none';
  const actualDeg = number % 360;
  handleWin(actualDeg);
  });


function reload_page() {
    
}
