let userName = prompt("İsminizi Giriniz : ", "İsim...");

let text3 = document.querySelector(".text3");

text3.innerHTML = `Merhaba, ${userName}! Hoşgeldin!`;

// Canlı saati ekrana yazdırmak
var clock = document.querySelector(".clock");
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day = d.getDate();
  clock.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);



