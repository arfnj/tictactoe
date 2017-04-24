const tictactoe = function() {
  let winner = false;

  let board = [[null,null,null], [null,null,null], [null,null,null]];

  const checkH = function(row) {
    if ((row[0] === row[1]) && (row[0] === row[2]) && row[0]) {
      winner = true;
    }
  }

  const checkV = function(column) {
    if ((row[0][column] === row[1][column]) && (row[0][column] === row[2][column]) && row[0][column]) {
      winner = true;
    }
  }

  const checkD = function() {
    if ((row[0][0]] === row[1][1]) && (row[0][0] === row[2][2]) && row[0][0]) {
      winner = true;
    }
    if ((row[0][2]] === row[1][1]) && (row[0][0] === row[2][0]) && row[0][2]) {
      winner = true;
    }
  }

  const drawboard = function() {
    console.log('   0   1   2');
    for (let i=0; i<3; i++) {
      console.log(i+'  '+board[i][0]+' | '+board[i][1]+' | '+board[i][2]);
      if (i<2) {
        console.log('. --- --- ---')
      }
  }


  const playGame = function() {
    console.log('Shall we play a game?\n\n');
    let plays = 0;
    let row, col;
    let player = 'X'

    const makeMove = function {
      console.log('Your move, player '+player+'. Please enter a row number:');
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', function (data) {
        row = data;
        process.stdin.pause();
      });
      console.log('And a column:')
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', function (data) {
        col = data;
        process.stdin.pause();
      });
      plays++;
      if (board[row][col]) {
        console.log('Sorry, that space is taken.  Try again.');
        makeMove();
      } else {
        board[row][col] = player
        drawboard();
        checkH();
        checkV();
        checkD();
        if (winner) {
          console.log('Congratulations, '+player+', you won!');
          return;
        } else {
          if (plays === 9) {
            console.log('Stalemate! The only winning move is not to play');
            playGame();
          }
          let player = player === 'X' ? 'O' : 'X';
          makeMove();
        }
      }
    }

  }

  playGame();

};

tictactoe();