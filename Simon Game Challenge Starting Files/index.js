var count = 1;
var patList = [];
var inProgress = false;
var playing = false;
$(document).keypress(function() {
  if(!inProgress && !playing){
    play();
  }
});



$(".btn").on("click",
  function() {
    var buttonId = $(this).attr("id");
    if (!playing) {
      if (patList.length !== 0) {
        if (patList.shift() === buttonId) {
          (new Audio("sounds/" + buttonId + ".mp3")).play();
          if(patList.length === 0){
            inProgress = false;
            count++;

            setTimeout(play, 1500);

          }
        } else {
          (new Audio("sounds/wrong.mp3")).play();
          $("#level-title").text("Game Over. Press any key to play again.");
          count = 1;
          inProgress = false;
        }


      }
    }
    else{
      (new Audio("sounds/" + buttonId + ".mp3")).play();
      console.log("PLaying");


    }


    $(this).animate({
      opacity: 0.5
    }, 100);
    $(this).animate({
      opacity: 1
    }, 100);




  });




function generatePattern(numItems) {
  var patternList = [];
  for (var i = 0; i < numItems; i++) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        patternList[i] = "red";
        console.log("red");
        break;
      case 1:
        patternList[i] = "blue";
        console.log("blue");
        break;
      case 2:
        patternList[i] = "green";
        console.log("green");
        break;
      case 3:
        patternList[i] = "yellow";
        console.log("yellow");
        break;
      default:
        console.log("Random pattern value not between 0 and 3 inclusive");
    }
  }

  return patternList;
}


function play() {
  if (playing === false) {
    playing = true;
    $("#level-title").text("Level " + count);
    patternList = generatePattern(count);
    patList = patternList;
    //  var i = 0;

    //  console.log("#" + patternList[i]);
    let i = 0;
    var intervalVar = setInterval(function() {
      //console.log(patternList.length - 1);
      console.log(patternList)
      $("#" + patternList[i]).click();
      if (i === patternList.length - 1) {
        console.log("Here");
        clearInterval(intervalVar);
        playing = false;
        inProgress = true;
      }
      i++;
    }, 500);



  }



}
