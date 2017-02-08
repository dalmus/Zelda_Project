$(document).ready(function() {
  setTimeout(function() {
    $(".loader").fadeOut(1500);
  },27000);
});
//

      var imgCount = 3;
       var images = new Array
           images[0] = "img/green.png",
           images[1] = "img/blue.png",
           images[2] = "img/red.png",
           images[3] = "img/purple.png"

for (var i = 0; i < 17; i++) {
  var randomCount = Math.round(Math.random() * 3)
  document.getElementsByClassName("rupee_box")[i].style.backgroundImage = "url(" + images[randomCount] + ")";
}


//----------









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
