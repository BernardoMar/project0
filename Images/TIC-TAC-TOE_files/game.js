//Winning options
const winingOption = [
  [($('#a-one')), $('#a-two'),$('#a-three')],
  [$('#b-one'),$('#b-two'),$('#b-three')],
  [$('#c-one'),$('#c-two'),$('#c-three')],
  [$('#a-one'),$('#b-one'),$('#c-one')],
  [$('#a-two'),$('#b-two'),$('#c-two')],
  [$('#a-three'),$('#b-three'),$('#c-three')],
  [$('#a-one'),$('#b-two'),$('#c-three')],
  [$('#a-three'),$('#b-two'),$('#c-one')]
];


// Tries* to check whether a line has Xs.
const trial = function () {
  for (let i=0 ; i < winingOption.length ; i++) {
    console.log(winingOption[0][1]);
    for (let x=0 ; x < winingOption[i].length ; x++) {

      if (winingOption[i][x].text() === 'X' ) {
        alert('X Wins');
      };
    };
  };
};

$(document).ready (function (){

  //Fun text editor plugin
  $('h1').funText(33, ['#F6F740', '#D8DC6A', '#6689A1']);



  // Prints X when clicked on a button
  $('button').on('click' , function(){
    $(this).text('X');

  trial();
  });
})
