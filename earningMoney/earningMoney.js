const circle_to_click = document.getElementById('circle_to_click');
let add_money_button = document.getElementById('add_money_button');
const drop_money_btn = document.getElementById('drop_money_btn'); 

get_money_ammount()
circle_to_click.addEventListener("click", increase_money);
circle_to_click.addEventListener("click", show_dolars);
drop_money_btn.addEventListener("click", drop_money);

circle_to_click.addEventListener("click", update_display, false);

function increase_money() {
  let current_balance = localStorage.getItem('balance');
  current_balance++;
  localStorage.setItem('balance', current_balance);
  add_money_button.innerHTML = current_balance + "$"
  get_money_ammount()
};

function drop_money() {
  let current_balance = localStorage.getItem('balance');
  localStorage.setItem('balance', 0);
  get_money_ammount()
};

function get_money_ammount() {
  let test = localStorage.getItem('balance');
  if(test == null) {
    add_money_button.innerHTML = "000$";
  }
  else if(test <= 9) {
    add_money_button.innerHTML = "00" + test + "$";
  }
    else if(test <= 99) {
    add_money_button.innerHTML = "0" + test + "$";
  }
  else {
    add_money_button.innerHTML = test + "$";
    
  }
  
}

function update_display() {
    console.log()
    console.log()
}

function show_dolars() {
    const dolar = document.createElement("div");
    const inside_value = document.createTextNode("1$");
    dolar.classList.add("dolar_text");
    dolar.style.top = event.pageY
    dolar.style.left = event.pageX
    dolar.appendChild(inside_value);
    circle_to_click.appendChild(dolar);
    
    let pos_top = event.pageY;
    let pos_left = event.pageX;
    let text_opacity = 1;
    let random = Math.floor(Math.random() * 2 + 1);

    let text_timer = setInterval(function() {
      pos_top -= 3;
      text_opacity -= 0.02;
      if (random === 1) {
        pos_left -= Math.floor(Math.random() * 2 + 1);
        dolar.style.top = pos_top + "px";
        dolar.style.left = pos_left + "px";
        dolar.style.opacity = text_opacity;
      } else {
        pos_left += Math.floor(Math.random() * 2 + 1);
        dolar.style.top = pos_top + "px";
        dolar.style.left = pos_left + "px";
        dolar.style.opacity = text_opacity;
      }
    }, 50);
    setTimeout(function() {
      circle_to_click.removeChild(dolar);
      clearInterval(text_timer);
    }, 2000);
  }