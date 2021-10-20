let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let display = document.querySelector('.display');

let number = 0
let stopnie = 45; // stopnie 360/7

 const wygranatab = {
    1: "100",
    2: "1",
    3: "3",
    4: "500",
    5: "1",
    6: "30",
    7: "5",
    8: "15",
  }
 
 const handleWin = (actualDeg) => {
    console.log(actualDeg)
    const wygrana = Math.ceil(actualDeg / stopnie);
    console.log(wygrana)
    display.innerHTML = wygranatab[wygrana];

  }

btn.onclick = function () {
  container.style.transition = 'none';
  display.innerHTML = "-";
  number = Math.floor(1000 + Math.random() * 1500);
  container.style.transition = 'all 2s ease-out';
  container.style.transform = `rotate(${number-22.5}deg)`;
}

container.addEventListener('transitionend', () => {
  container.style.transition = 'none';
  const actualDeg = number % 360;
  handleWin(actualDeg);
  });
