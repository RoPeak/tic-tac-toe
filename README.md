# Tic-Tac-Toe

A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Play against a friend in this timeless strategy game with a clean, modern interface.

## Features

- **Two-Player Gameplay** - Play X vs O with a friend
- **Modern UI** - Clean, responsive design
- **Win Detection** - Automatically detects wins and draws
- **Restart Functionality** - Quick game reset
- **Hover Effects** - Visual feedback for next move
- **Responsive Design** - Works on all screen sizes

## How to Play

### Game Rules

1. The game is played on a 3×3 grid
2. Players take turns placing their mark (X or O)
3. **X always goes first**
4. The first player to get 3 of their marks in a row wins
5. Rows can be horizontal, vertical, or diagonal
6. If all 9 squares are filled without a winner, the game is a draw

### Playing the Game

1. Open `index.html` in your web browser
2. Player X clicks any cell to place their mark
3. Player O clicks a cell for their turn
4. Continue alternating until someone wins or it's a draw
5. Click "Restart" to play again

## Winning Combinations

There are 8 possible ways to win:

**Rows:**

- Top row: [0, 1, 2]
- Middle row: [3, 4, 5]
- Bottom row: [6, 7, 8]

**Columns:**

- Left column: [0, 3, 6]
- Middle column: [1, 4, 7]
- Right column: [2, 5, 8]

**Diagonals:**

- Top-left to bottom-right: [0, 4, 8]
- Top-right to bottom-left: [2, 4, 6]

## Project Structure

```
Tic-Tac-Toe/
├── index.html     # Game structure and layout
├── script.js      # Game logic and win detection
├── styles.css     # Styling and animations
└── README.md
```

## Technologies Used

- **HTML5** - Game structure
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic and interactivity

## Technical Implementation

### Game State Management

The game tracks:

- Current turn (X or O)
- Board state (which cells are filled)
- Win/draw conditions

```javascript
let oTurn; // false = X's turn, true = O's turn

// Cell states stored using CSS classes:
// - 'x' class = X marked
// - 'o' class = O marked
// - No class = empty
```

### Win Detection Algorithm

The game checks all 8 winning combinations after each move:

```javascript
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
```

### Turn Management

- Hover effect shows which symbol will be placed next
- Cells can only be clicked once (event listener removed after click)
- Turns automatically alternate between X and O

## Features Breakdown

### Interactive Hover Effects

- Hovering over empty cells shows a preview of your mark
- Different styles for X and O hover states
- Disabled on filled cells

### Win/Draw Detection

- Checks for winner after every move
- Detects draw when all cells filled
- Displays result message overlay

### Restart Button

- Clears the board
- Resets to X's turn
- Re-enables all cells

## Customisation

### Changing Colors

Edit `styles.css`:

```css
:root {
  --x-color: #1e90ff; /* X color */
  --o-color: #ff6b6b; /* O color */
  --board-color: #333; /* Board background */
}
```

### Changing Grid Size

The current implementation uses a 3×3 grid. To change to a larger grid, you would need to:

1. Add more cells in `index.html`
2. Update winning combinations in `script.js`
3. Adjust CSS grid template

## Game Strategy Tips

**For X (First Player):**

- Start in the center or corner for best advantage
- Control the center to maximise winning combinations
- Force opponent into defensive positions

**For O (Second Player):**

- If X takes center, take a corner
- If X takes corner, take center
- Block X's winning moves

**General Strategy:**

- Always block opponent's winning move
- Create multiple threats simultaneously (fork)
- Recognise when a draw is inevitable

## Possible Enhancements

- [ ] **AI Opponent** - Single player mode with computer AI
  - Easy mode: Random moves
  - Medium mode: Block wins, take winning moves
  - Hard mode: Minimax algorithm (unbeatable)
- [ ] **Score Tracking** - Keep track of wins across multiple games
- [ ] **Player Names** - Customise player names instead of X/O
- [ ] **Animations** - Smooth mark placement and win celebration
- [ ] **Sound Effects** - Click sounds and win/lose audio
- [ ] **Different Themes** - Dark mode, colorful mode, minimal mode
- [ ] **Larger Boards** - 4×4 or 5×5 grids
- [ ] **Undo Move** - Take back the last move
- [ ] **Online Multiplayer** - Play against remote opponents

## AI Implementation (Future)

A simple AI could be implemented using the Minimax algorithm:

```javascript
function minimax(board, depth, isMaximising) {
    // Base cases
    if (checkWin(X_CLASS)) return -10 + depth;
    if (checkWin(O_CLASS)) return 10 - depth;
    if (isDraw()) return 0;

    if (isMaximising) {
        let bestScore = -Infinity;
        // Try all possible moves
        for (each empty cell) {
            place O, recurse, undo move
            bestScore = max(bestScore, score);
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        // Try all possible moves
        for (each empty cell) {
            place X, recurse, undo move
            bestScore = min(bestScore, score);
        }
        return bestScore;
    }
}
```

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Requires:

- CSS Grid support
- ES6 JavaScript (arrow functions, spread operator)
- CSS custom properties (variables)

## Running Locally

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start playing!

No build process or dependencies required.

## Learning Resources

- [Tic-Tac-Toe Strategy](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Minimax Algorithm Explanation](https://www.neverstopbuilding.com/blog/minimax)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Fun Facts

- Tic-Tac-Toe is also known as "Noughts and Crosses"
- The game has been played for thousands of years
- Perfect play from both players always results in a draw
- There are 255,168 possible games (accounting for symmetry)
- There are only 138 unique terminal positions

## License

This is a personal educational project.

## Acknowledgments

A classic game implementation demonstrating DOM manipulation, event handling, and game logic in JavaScript!
