$(document).ready(function() {
  setTimeout(function() {
    $(".loader").fadeOut(1500);
  }, 27000);
});



//--------------//
var greenRupee = "green"
var blueRupee = "blue"
var purpleRupee = "purple"
var redRupee = "red"
var silverRupee = "silver"
var yellowRupee = "yellow"
var orangeRupee = "orange"
var skyRupee = "sky"


var images = [greenRupee, greenRupee, blueRupee, blueRupee, purpleRupee, purpleRupee, redRupee, redRupee, silverRupee, silverRupee, yellowRupee, yellowRupee, orangeRupee, orangeRupee, skyRupee, skyRupee]

//--shuffle function where the array is being ramdomly shuffled in the board--//
function shuffleImages(images) {
  var counter = images.length,
    temp, index;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = images[counter];
    images[counter] = images[index];
    images[index] = temp;
  }
  return images;
}
var shuffleImages = shuffleImages(images)
console.log(shuffleImages);
for (var i = 0; i < shuffleImages.length; i++) {
  $('.rupeeBox').eq(i).addClass(shuffleImages[i])
}

//--switch function where it lets 2 divs change place by clicking the to of them--//

var swap = []

$('.rupeeBox').click(function() {
  console.log('this ->', $(this));
  var col = $(this).attr('col')
  swap.push({
    rupeeBox: $(this),
    col: col
  })
  if (swap.length === 2) {
    var diff = Math.abs(swap[0].col - swap[1].col)
    if (diff == 1 || diff == 4) {
      var firstClass = swap[0].rupeeBox.attr('class').split(' ')[1]
      var secondClass = swap[1].rupeeBox.attr('class').split(' ')[1]
      swap[0].rupeeBox.toggleClass(`${firstClass} ${secondClass}`)
      swap[1].rupeeBox.toggleClass(`${firstClass} ${secondClass}`)
      swap = []
    }
  }
});
//--Checking pairs with winning function--//




    // checkWin: function() {
    //   if ($('.unmatched').length === 0) {
    //     $('.super_box').html('<h1>You did it Link!</h1>');

function checkPair(){
  if($('#box1').class('') === $('box2').class(''){
    $(this).animate({
      opacity: 1
    }
  }
}






//--Reset Button--//

$('.reset').click(function() {
  function shuffleImages(images) {
    var counter = images.length,
      temp, index;
    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = images[counter];
      images[counter] = images[index];
      images[index] = temp;
    }
    return images;
  }
  var shuffleImages = shuffleImages(images)
  console.log(shuffleImages);
  for (var i = 0; i < shuffleImages.length; i++) {
    $('.rupeeBox').eq(i).addClass(shuffleImages[i])
  }

});
