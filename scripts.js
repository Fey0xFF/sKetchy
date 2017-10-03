function gridInit (numSquare,gridHeight,gridWidth) {
  $('#container').width(gridHeight);
  $('#container').height(gridWidth);
  for (rows = 0; rows < numSquare; rows++) {
    for (cols = 0; cols < numSquare; cols++) {
      $("#container").append("<div class = 'square'></div>");
    }
    $('.square').width(gridWidth/numSquare);
    $('.square').height(gridHeight/numSquare);
  }
}

$(document).ready(function() {
  gridInit(5,500,500);

  $(".square").mouseenter(function() {
    console.log("mouseover");
    $(this).addClass("mouseOn");
  });

  $(".square").mouseleave(function() {
    console.log("mouseover");
    $(this).removeClass("mouseOn");
  });
});
