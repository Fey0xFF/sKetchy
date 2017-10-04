function gridInit (numSquare,gridHeight,gridWidth) {
  $('#container').width(gridHeight);
  $('#container').height(gridWidth);
  for (rows = 0; rows < numSquare; rows++) {
    for (cols = 0; cols < numSquare; cols++) {
      $("#container").append("<div class = 'square'></div>");
    }
  }
  $('.square').width(gridWidth/numSquare);
  $('.square').height(gridHeight/numSquare);
}



function resetGrid () {
  $(".square").remove();
}

function userDefineGrid () {
  resetGrid();
  var uGW = $('#userGridWidth').val();
  var uGH = $('#userGridHeight').val();
  var uGU = $('#userGridUnits').val();
  gridInit(uGU,uGW,uGH);
}


$(document).ready(function() {
  gridInit(16,500,500);

  $("#resetGrid").click(function (){
    resetGrid();
    gridInit(5,500,500);

    $(".square").mouseenter(function() {
      console.log("mouseover");
      $(this).addClass("mouseOn");
    });
  })

  $("#userResetGrid").click(function (){
    userDefineGrid();

    $(".square").mouseenter(function() {
      console.log("mouseover");
      $(this).addClass("mouseOn");
    });
  })



/*  $(".square").mouseleave(function() {
    console.log("mouseover");
    $(this).removeClass("mouseOn");
  });*/
});
