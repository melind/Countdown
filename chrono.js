
var total = 60;

function functionName() {

var minutes = Math.floor(total / 60);
var secondes =  total % 60;

if (secondes < 10) {
  secondes = '0' + secondes;
}

document.getElementById('chrono').innerHTML = (minutes+ ':' + secondes );
total--;


if (minutes==secondes) {
  clearInterval(interval);
}
}
var interval = setInterval ('functionName()', 1000);
