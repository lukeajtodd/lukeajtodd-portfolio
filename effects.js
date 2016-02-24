$(document).ready(function() {
  var $sparkleDiv = $('.sparkles');
  var time = new Date().getHours();
  var elemLimit = 30;

  function checkElemNum() {
    $sparkCount = $('.spark').length;
    $starCount = $('.star').length;
    if ($sparkCount > 0) {
      if ($sparkCount === elemLimit) {
        $('.spark:first').remove();
      }
    } else {
      if ($starCount === elemLimit - 5) {
        $('.star:first').remove();
      }
    }
  }

  function makeElem(elemType) {
    var maxWidth = $(window).width() - 10;
    var maxHeight = $sparkleDiv.height();
    checkElemNum();
    if (elemType == "spark") {
      var posx = Math.floor(Math.random() * maxWidth);
      var $newSpark = $("<div class='spark'></div>").css({
        'left': posx + 'px'
      });
      $newSpark.appendTo($sparkleDiv).delay(100).fadeIn(100, function() {
        makeElem("spark");
      });
    } else if (elemType == "star") {
      var posx = Math.floor(Math.random() * maxWidth);
      var posy = Math.floor(Math.random() * (maxHeight / 2)) + 20;
      var $newStar = $("<div class='star'></div>").css({
        'left': posx + 'px',
        'top': posy + 'px'
      });
      $newStar.appendTo($sparkleDiv).delay(400).fadeIn(100, function() {
        makeElem("star");
      });
    }
  }

  if (time >= 17 || time < 7) {
    makeElem("star");
  } else {
    makeElem("spark");
  }





});
