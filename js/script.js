$(document).ready(function() {
  setTimeout(function() {
    $(".loader").fadeOut(1500);
  }, 27000);
});


var greenRupee = "green"
var blueRupee = "blue"
var purpleRupee = "purple"
var redRupee = "red"
var silverRupee = "silver"
var yellowRupee = "yellow"
var orangeRupee = "orange"
var skyRupee = "sky"

$(document).ready(function() {
  var grid = {
    cards: [greenRupee, greenRupee, blueRupee, blueRupee, purpleRupee, purpleRupee, redRupee, redRupee, silverRupee, silverRupee, yellowRupee, yellowRupee, orangeRupee, orangeRupee, skyRupee, skyRupee],
    init: function() {
      grid.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < grid.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = grid.cards[i];
        grid.cards[i] = grid.cards[random];
        grid.cards[random] = temp;
      }
      grid.assignCards();
      console.log('Shuffled Card Array: ' + grid.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', grid.cards[index]);
      });
      grid.clickHandlers();
    },
    clickHandlers: function() {
      $('.card').on('click', function() {
        $(this).addClass($(this).data('cardValue')).addClass('selected');
        grid.checkMatch();
      });
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 1
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          grid.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).removeClass('selected ' + $(this).data('cardValue'));
            });
          }, 1000);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        $('.super_box').html('<h1>You did it Link!</h1>');
      }
    }
  };
  grid.init();
});








//
// var rupeeImages = ["img/green.png", "img/blue.png", "img/red.png", "img/purple.png", "img/yellow.png", "img/black.png", "img/orange", "img/silver"]


//--------------//
// var imgCount = 4;
// var images = new Array
// images[0] = "img/green.png",
//   images[1] = "img/blue.png",
//   images[2] = "img/red.png",
//   images[3] = "img/purple.png"
//
// for (var i = 0; i < 17; i++) {
//   var randomCount = Math.round(Math.random() * 3)
//   document.getElementsByClassName("rupee_box")[i].style.backgroundImage = "url(" + images[randomCount] + ")";
// }





// var output = "<ol>";
// for (var i = 0; i < 16; i++) {
//   output += "<li>";
//   output += "<img src = '" + images[i] + "'/>";
//   output += "</li>";
// }
// output += "</ol>";
// document.getElementById("container").innerHTML = output;
// $("img").hide();
//
// var guess1 = "";
// var guess2 = "";
// var count = 0;






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



//----------//



// $(".rupee_box").each(function(index) {
//   $(this).on("click", function() {
//     console.log(index + ": " + $(this).text());
//   });
// });
//


//--------------------//
// var rupeeCards = [];
//
