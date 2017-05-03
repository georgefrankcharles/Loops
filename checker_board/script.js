/*

to place/spawn a piece using JavaScript:
*/ /*
var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
 */
var y = 0
var x = 0

for (var i= 1; i <= 36; i++) {
  var piece = document.createElement('div');            // create an empty div
  piece.setAttribute('class', 'piece');                 // assign the div class="piece"
  document.getElementById('board').appendChild(piece);  // add the div to the id="board"
  piece.style.top = y + 'px';                              // assign the top/y position
  piece.style.left = x + 'px';                             // assign the left/x position\
  x += 100;
  if (x >= 600) {
    y += 100;
    x = 0;
  }

}
