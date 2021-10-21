let user_balance_input = document.getElementById('user_balance_input');

function drop_money() {
  let current_balance = localStorage.getItem('balance');
  localStorage.setItem('balance', 0);
  get_money_ammount()
};

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

get_money_ammount()