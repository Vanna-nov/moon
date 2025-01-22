// Variables to keep track of game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// Function to check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

// Function to handle a player's move
function handleMove(square) {
  const index = parseInt(square.dataset.index);

  // Check if the square is already occupied or if there's a winner
  if (board[index] || checkWinner()) {
    return;
  }

  // Update the board array and the UI
  board[index] = currentPlayer;
  square.textContent = currentPlayer;

  // Check for a winner
  const winner = checkWinner();
  if (winner) {
    alert(`Player ${winner} wins!`);
  } else if (board.every(square => square !== '')) {
    alert("It's a draw!");
  } else {
    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to initialize the game
function init() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('click', () => {
      handleMove(square);
    });
  });
}

// Initialize the game
init();
