$("button").click(function() {

  var audio = new Audio("sounds/roll-dice.mp3");
  audio.play();

  var randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceNumber2 = Math.floor(Math.random() * 6) + 1;

  $(".img1").attr("src", "images/dice" + randomDiceNumber1 + ".png");
  $(".img2").attr("src", "images/dice" + randomDiceNumber2 + ".png");

  if(randomDiceNumber1 > randomDiceNumber2) {
    $("h1").text("🚩 Player 1 Wins!")
  } else if(randomDiceNumber1 < randomDiceNumber2) {
    $("h1").text("Player 2 Wins! 🚩");
  } else {
    $("h1").text("👑 Draw! 👑");
}
});





