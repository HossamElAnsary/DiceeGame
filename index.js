var randomDiceValue = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomDiceValue + ".png";

var image1 = document.querySelectorAll("img")[0];

var diceOne = randomDiceValue;

image1.setAttribute("src",randomImageSource);

randomDiceValue = Math.floor(Math.random() * 6) + 1;

var diceTwo = randomDiceValue;

randomImageSource = "images/dice" + randomDiceValue + ".png";

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);


if(diceOne > diceTwo){
  document.querySelector("h1").innerHTML = "🔥Player 1 Wins!";
}else if (diceOne < diceTwo) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🔥";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
