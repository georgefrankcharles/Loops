// generate the graph's bars using this data array

var data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

var left = 20

for (var i=0; i<data.length; i++) {

  var bar = document.createElement('div');            // create an empty div
  bar.setAttribute('class', 'bar');                 // assign the div class="bar"
  document.getElementById('frame').appendChild(piece);  // add the div to the id="board"
  bar.style.background-color = (data[i])
  bar.style.height = (data[i] += 1)
  bar.style.left = left + 'px';


  /*
  document.write(data[i]);
  document.write('<br />');
  */
}
