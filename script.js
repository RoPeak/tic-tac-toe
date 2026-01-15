// Tic-Tac-Toe Game Logic

const X_CLASS = 'x';
const O_CLASS = 'o';
const WINNING_COMBINATIONS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.getElementById('winningMessageText');
const restartButton = document.getElementById('restartButton');

let oTurn; // Track whose turn it is

// Start the game
startGame();

// Restart button event listener
restartButton.addEventListener('click', startGame);

/**
 * Initialize or restart the game
 */
function startGame() {
    oTurn = false; // X starts first

    // Clear all cells
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });

    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

/**
 * Handle cell click event
 * @param {Event} e - Click event
 */
function handleClick(e) {
    const cell = e.target;
    const currentClass = oTurn ? O_CLASS : X_CLASS;

    // Place mark
    placeMark(cell, currentClass);

    // Check for win
    if (checkWin(currentClass)) {
        endGame(false);
    }
    // Check for draw
    else if (isDraw()) {
        endGame(true);
    }
    // Continue game - switch turns
    else {
        swapTurns();
        setBoardHoverClass();
    }
}

/**
 * Place X or O mark on a cell
 * @param {HTMLElement} cell - The cell to mark
 * @param {string} currentClass - 'x' or 'o'
 */
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

/**
 * Switch between X and O turns
 */
function swapTurns() {
    oTurn = !oTurn;
}

/**
 * Set hover effect based on current turn
 */
function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);

    if (oTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

/**
 * Check if current player has won
 * @param {string} currentClass - 'x' or 'o'
 * @returns {boolean} True if player has won
 */
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

/**
 * Check if the game is a draw
 * @returns {boolean} True if all cells are filled
 */
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    });
}

/**
 * End the game and show result
 * @param {boolean} draw - True if game is a draw
 */
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!";
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "O's" : "X's"} Win!`;
    }
    winningMessageElement.classList.add('show');
}
