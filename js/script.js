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
function shuffleImages(images){
  var counter = images.length, temp, index;
  while(counter > 0){
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = images[counter];
    images[counter] = images[index];
    images[index] = temp;
  }
  return images;
}
var shuffleImages = shuffleImages(images)
console.log( shuffleImages );
for (var i = 0; i < shuffleImages.length; i++) {
  $('.rupeeBox').eq(i).addClass(shuffleImages[i])
}

//--switch function where it lets 2 divs change place by clicking the to of them--//

var swap = []

$('.rupeeBox').click(function() {
  console.log('this ->', $(this));
  var row = $(this).attr('row')
  var col = $(this).attr('col')
  swap.push({
    rupeeBox: $(this),
    row: row,
    col: col
  })
  if(swap.length === 2){
    if(swap[0].row === swap[1].row && Math.abs(swap[0].col - swap[1].col) == 1){
      swap[0].toggleClass('uno dos')
      swap[1].toggleClass('uno dos')
    }
  }
});


// <div class="box rubyRed" row="0" col="0"></div>
// <div class="box rubyGreen" row="0" col="0"></div>
//
// var toSwap = []
// $('.box').click(function(){
//     var row = $(this).attr('row')
//     var col = $(this).attr('col')
//     toSwap.push({
//         box: $(this),
//         row: row,
//         col: col
//     })
//     if (toSwap.length === 2) {
//         if(toSwap[0].row === toSwap[1].row && Math.abs(toSwap[0].col - toSwap[1].col) == 1) {
//             toSwap[0].toggleClass('rubyRed rubyGreen')
//             toSwap[1].toggleClass('rubyRed rubyGreen')
//         }
//     }
// })


























//-----------------------------------------------------//

// for (var i = 0; i < 16; i++) {
//   var randomCount = Math.floor(Math.random() * 15)
//   $(".card")[i].style.backgroundImage = "url(" + images[randomCount] + ")";
// }



// var rupeeImages = ["img/green.png", "img/blue.png", "img/red.png", "img/purple.png", "img/yellow.png", "img/black.png", "img/orange", "img/silver"]


// var greenRupee = "green"
// var blueRupee = "blue"
// var purpleRupee = "purple"
// var redRupee = "red"
// var silverRupee = "silver"
// var yellowRupee = "yellow"
// var orangeRupee = "orange"
// var skyRupee = "sky"
//
// $(document).ready(function() {
//   var grid = {
//     cards: [greenRupee, greenRupee, blueRupee, blueRupee, purpleRupee, purpleRupee, redRupee, redRupee, silverRupee, silverRupee, yellowRupee, yellowRupee, orangeRupee, orangeRupee, skyRupee, skyRupee],
//     init: function() {
//       grid.shuffle();
//     },
//     shuffle: function() {
//       var random = 0;
//       var temp = 0;
//       for (i = 1; i < grid.cards.length; i++) {
//         random = Math.round(Math.random() * i);
//         temp = grid.cards[i];
//         grid.cards[i] = grid.cards[random];
//         grid.cards[random] = temp;
//       }
//       grid.assignCards();
//       console.log('Shuffled Card Array: ' + grid.cards);
//     },
//     assignCards: function() {
//       $('.card').each(function(index) {
//         $(this).attr('data-card-value', grid.cards[index]);
//       });
//       grid.clickHandlers();
//     },
//     clickHandlers: function() {
//       $('.card').on('click', function() {
//         $(this).addClass($(this).data('cardValue')).addClass('selected');
//         grid.checkMatch();
//       });
//     },
//     checkMatch: function() {
//       if ($('.selected').length === 2) {
//         if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
//           $('.selected').each(function() {
//             $(this).animate({
//               opacity: 1
//             }).removeClass('unmatched');
//           });
//           $('.selected').each(function() {
//             $(this).removeClass('selected');
//           });
//           grid.checkWin();
//         } else {
//           setTimeout(function() {
//             $('.selected').each(function() {
//               $(this).removeClass('selected ' + $(this).data('cardValue'));
//             });
//           }, 1000);
//         }
//       }
//     },
//     checkWin: function() {
//       if ($('.unmatched').length === 0) {
//         $('.super_box').html('<h1>You did it Link!</h1>');
//       }
//     }
//   };
//   grid.init();
// });





// <div class="box rubyRed" row="0" col="0"></div>
// <div class="box rubyGreen" row="0" col="0"></div>
//
// var toSwap = []
// $('.box').click(function(){
//     var row = $(this).attr('row')
//     var col = $(this).attr('col')
//     toSwap.push({
//         box: $(this),
//         row: row,
//         col: col
//     })
//     if (toSwap.length === 2) {
//         if(toSwap[0].row === toSwap[1].row && Math.abs(toSwap[0].col - toSwap[1].col) == 1) {
//             toSwap[0].toggleClass('rubyRed rubyGreen')
//             toSwap[1].toggleClass('rubyRed rubyGreen')
//         }
//     }
// })
