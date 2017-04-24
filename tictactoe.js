var prompt = require('prompt');

const tictactoe = function() {
  let winner = false;

  let board = [[' ',' ',' '], [' ',' ',' '], [' ',' ',' ']];

  const checkH = function(row) {
    if ((row[0] === row[1]) && (row[0] === row[2])) {
      winner = true;
    }
  }

  const checkV = function(column) {
    if ((board[0][column] === board[1][column]) && (board[0][column] === board[2][column])) {
      winner = true;
    }
  }

  const checkD = function() {
    if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2]) && board[1][1] !== ' ') {
      winner = true;
    }
    if ((board[0][2] === board[1][1]) && (board[0][2] === board[2][0]) && board[1][1] !== ' ') {
      winner = true;
    }
  }

  const drawBoard = function() {
    console.log('   0   1   2');
    for (let i=0; i<3; i++) {
      console.log(i+'  '+board[i][0]+' | '+board[i][1]+' | '+board[i][2]);
      if (i<2) {
        console.log('  --- --- ---');
      }
    }
  }


  const playGame = function() {
    console.log('Shall we play a game?\n\n');
    let plays = 0;
    let row, col;
    let player = 'X';
    drawBoard();

    const makeMove = function() {
      console.log('Your move, player '+player+'. Please enter a row and a column.');
      prompt.start();
      prompt.get([{name: 'row', required: true},{name: 'column', required: true}], function(err, result) {
        row = result.row;
        col = result.column;
        if (board[row][col] !== ' ') {
          console.log('Sorry, that space is taken.  Try again.');
          makeMove();
        } else {
          board[row][col] = player;
          plays++;
          drawBoard();
          checkH(row);
          checkV(col);
          checkD();
          if (winner) {
            console.log('Congratulations, '+player+', you won!');
            return;
          } else {
            if (plays === 9) {
              console.log('Stalemate! The only winning move is not to play');
              return;
            }
            player = player === 'X' ? 'O' : 'X';
            makeMove();
          }
        }
      });
    };

    makeMove();

  };

  playGame();

};

tictactoe()