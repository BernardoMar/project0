//Winning options
let winingOption;
let player = 1;


// Checks whether a line has Xs.
const trial = function () {
  for (let i=0 ; i < winingOption.length ; i++) {
    if (winingOption[i][0].text() === 'X' &&          winingOption[i][1].text() === 'X' &&
    winingOption[i][2].text() === 'X') {
    alert("X Wins and Bernie is amazing")
    $('button').text('');
  } else if (winingOption[i][0].text() === 'O' &&          winingOption[i][1].text() === 'O' &&
  winingOption[i][2].text() === 'O') {
    alert("O Wins and Bernie is amazing")
    $('button').text('');
  };
};
};

$(document).ready (function (){
 winingOption = [
    [$('#a-one'), $('#a-two'),$('#a-three')],
    [$('#b-one'),$('#b-two'),$('#b-three')],
    [$('#c-one'),$('#c-two'),$('#c-three')],
    [$('#a-one'),$('#b-one'),$('#c-one')],
    [$('#a-two'),$('#b-two'),$('#c-two')],
    [$('#a-three'),$('#b-three'),$('#c-three')],
    [$('#a-one'),$('#b-two'),$('#c-three')],
    [$('#a-three'),$('#b-two'),$('#c-one')]
  ];
  //Fun text editor plugin
  $('h1').funText(33, ['#F6F740', '#D8DC6A', '#6689A1']);


  // Prints X when clicked on a button
  $('button').on('click' , function(){
    if (player == 1) {
      $(this).text('X')
      player = 2;
    } else if (player == 2) {
      $(this).text('O')
      player = 1;
    };

    trial();
  });

});
