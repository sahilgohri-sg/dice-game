var randomnumber1 = ((Math.random())*6);
randomnumber1= Math.floor(randomnumber1 + 1);
console.log(randomnumber1);

var randomimagesource1 = "images/" + "dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimagesource1);


var randomnumber2 = (Math.random() * 6);
randomnumber2 = Math.floor(randomnumber2 + 1);
console.log(randomnumber2);

var randomimagesource2 = "images/" + "dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);




if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
