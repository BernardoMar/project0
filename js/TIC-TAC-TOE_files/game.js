//Winning options
let winingOption;
let player = 1;
let playerOneScore = 0 ;
let playerTwoScore = 0 ;
let playerTurn = 'Player 1';





// Checks if any of the winning arrays if full of 'x' or 'o'
const game = function () {
  for (let i=0 ; i < winingOption.length ; i++) {
    if (winingOption[i][0].text() === 'X' &&          winingOption[i][1].text() === 'X' &&
    winingOption[i][2].text() === 'X') {
    alert(`${$('#player-one-name').val()} wins.`)
    playerOneScore = playerOneScore + 1;
    $('#points-one').addClass('player-ready')
    $('#points-one').text(`${playerOneScore}`); //Updates players score
    $('button').text(''); //restarts the game
  } else if (winingOption[i][0].text() === 'O' &&          winingOption[i][1].text() === 'O' &&
  winingOption[i][2].text() === 'O') {
    alert(`${$('#player-two-name').val()} wins.`)
    playerTwoScore = playerTwoScore + 1;
    $('#points-two').addClass('player-ready')
    $('#points-two').text(`${playerTwoScore}`);
    $('button').text(''); //restarts the game
    };
  };
};



// This fuction is for when all buttons have been clicked and no one has won - alerts and resets all buttons
const reStart = function () {
  if ($('#a-one').text().length === 1 &&
      $('#a-two').text().length === 1 &&
      $('#a-three').text().length === 1 &&
      $('#b-one').text().length === 1 &&
      $('#b-two').text().length === 1 &&
      $('#b-three').text().length === 1 &&
      $('#c-one').text().length === 1 &&
      $('#c-two').text().length === 1 &&
      $('#c-three').text().length === 1 ) {
        alert(`No one wins. Try again.`);
        $('button').text('');
      };
};

$(document).ready (function (){

// Array of winning options
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
  //Fun text editor plugin for H1
  $('h1').funText(33, ['#F6F740', '#D8DC6A', '#6689A1']);



  // Prints X when clicked on a button
  $('button').on('click' , function() {
    if ($(this).text().length === 1) {
      $(this).off('click'); // if there is a value in the button, this disables the click
    } else if (player == 1) {
      $(this).text('X')
      player = 2; //this changes the player turn
      $('.turn-is').text(`${$('#player-two-name').val()}`)
    } else if (player == 2) {
      $(this).text('O')
      player = 1; //changes player turn
      $('.turn-is').text(`${$('#player-one-name').val()}`)
    };
    game();
    reStart();
  });

  //Gets Player 1 name
  $('#insert-one-name').on('click' , function () {
    $('#player-one').text(`${$('#player-one-name').val()}'s score:`);
    $('#insert-one-name').hide();
    $('#player-one-name').hide();
    $('.turn-is').text(`${$('#player-one-name').val()}`)
  })
  $('#insert-two-name').on('click' , function () {
    $('#player-two').text(`${$('#player-two-name').val()}'s score:`);
    $('#insert-two-name').hide();
    $('#player-two-name').hide();
  })

  //Restart game
  $('#restart').on('click' , function () {
    $('#points-one').removeClass('player-ready').text('')
    $('#points-two').removeClass('player-ready').text('')
    $('#insert-one-name').show();
    $('#player-one-name').show().val('');
    $('#insert-two-name').show();
    $('#player-two-name').show().val('');
    $('#player-one').text(`Player 1 score:`);
    $('#player-two').text(`Player 2 score:`);
    $('.turn-is').text('');
    playerOneScore = 0 ;
    playerTwoScore = 0 ;
  })


});
