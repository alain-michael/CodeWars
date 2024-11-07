function isSolved(board) {
  for (let i=0; i<3; i++) {
    if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != 0) {
      return board[i][0];
    }
    if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != 0) {
      return board[0][i];
    }
    if(board[0][i] == board[1][1] && board[1][1] == board[2][2-i] && board[0][i] != 0) {
      return board[0][i];
    }
  }

  if([].concat(...board).indexOf(0) !== -1) {
    return -1;
  }
  return 0 
}
