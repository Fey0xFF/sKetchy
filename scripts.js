//  DECLARE VARIABLES
var brushColor;
var brushOn = true;
var randCol = false;
var reverseFade;

//  INITALIZE GRID
$(document).ready(function() {
  gridInit(16,720,720);
})

function brushApply() {
  if (brushOn) {
    var opac = +$(this).css("opacity");
    console.log(opac);

    if (reverseFade) {
      opac -= 0.20;
    } else {
      opac += 0.20;
    }
    $(this).css("opacity", opac);

    // credit to this wonderful post for random color: https://stackoverflow.com/questions/1484506/random-color-generator
    if (randCol) {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      $(this).css("background-color", color)
    } else {
      $(this).css("background-color", brushColor)
    }
  }
}

//  RANDOM COLOR BUTTON LISTENER
$("#brushColor").click(function brushColorChange() {
  randCol = true;
});

//  BRUSH COLOR BLACK LISTENER
$("#brushBlack").click(function brushColorBlack() {
  brushColor = "black";
  randCol = false;
});

//  REVERSE THE FADE
$("#fadeToggle").click(function fadeToggler() {
  if (reverseFade) {
    reverseFade = false;
  } else {
    reverseFade = true;
  }
});

//  ENABLE/DISABLE THE BRUSH
$("#container").click(function() {
  if (brushOn === true) {
    brushOn = false;
  } else {
    brushOn = true;
  }
})

//  RESET GRID TO DEFAULT LISTENER
$("#resetGrid").click(function (){
  resetGrid();
  gridInit(16,960,960);
})

//  RESET GRID TO USER SETTINGS LISTENER
$("#userResetGrid").click(function (){
  userDefineGrid();
})

//  FUNCTION TO INITIALIZE GRID
function gridInit (numSquare,gridHeight,gridWidth) {
  $('#container').width(gridWidth);
  $('#container').height(gridHeight+5);
  for (rows = 0; rows < numSquare; rows++) {
    for (cols = 0; cols < numSquare; cols++) {
      $("#container").append("<div class = 'square'></div>");
    }
  }
  $('.square').width(gridWidth/numSquare);
  $('.square').height(gridHeight/numSquare);
  $(".square").mouseenter(brushApply);
}

//  FUNCTION TO CLEAR GRID
function resetGrid () {
  $(".square").remove();
}

//  FUNCTION TO SET GRID TO USER SETTINGS
function userDefineGrid () {
  resetGrid();
  var uGU = $('#userGridUnits').val();
  gridInit(uGU,720,720);
}
