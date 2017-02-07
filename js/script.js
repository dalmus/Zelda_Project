$(document).ready(function() {
  setTimeout(function() {
    $(".loader").fadeOut(1500);
  },27000);
});
//
// rupeeGrid = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];
//
// preload: function(){
//     this.game.load.image('blue', 'image/Blue.png');
//     this.game.load.image('red', 'image/Red.png');
//     this.game.load.image('purple','image/Purple.png');
// },
//
// document.getElementsByClassName('rupee_box').addEventListener('click', function(){
//   random(){
//
//   }
//
//   };
var rupeeColors = [[255, 128, 128],
                     [128, 255, 128],
                     [128, 128, 255],
                     [255, 255, 128],
                     [255, 128, 255],
                     [128, 255, 255],
                     [255, 255, 255]];
