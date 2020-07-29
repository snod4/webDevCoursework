var dice1 = Math.floor(Math.random() * 6)+1;
var dice2 = Math.floor(Math.random() * 6)+1;

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

var diceFile1 = ".//images//dice"+dice1+".png";
var diceFile2 = ".//images//dice"+dice2+".png";
image1.setAttribute("src",diceFile1);
image2.setAttribute("src", diceFile2);

var result;

if(dice1 > dice2){
  result = "Player 1 won!"
}
else if(dice2 > dice1){
  result = "Player 2 won!";

}
else{
  result = "Draw"
}

document.querySelector("h1").textContent = result;
