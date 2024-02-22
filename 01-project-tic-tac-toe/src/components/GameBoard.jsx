

export default function GameBoard({
  onSelectSquare,
  board,
  // activePlayerSymbol,
}) {
  

  //here we commented out the gameboard & started using gameTurns ,
  // because through this gameBoard , we get info like which player clicked & which sqare clicked
  //but not in a order which is a limited info,
  //so instead of this we created a new state gameTurns
  //which consists of all the required data for gameBoard as well as for log

  // //creating this state to update the game board with (X, O) i.e., in  rows & columns
  // // initially we'll set the value to null, so using initialgameboard
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // //this function is used foe clicking simply for selecting square & putting our mark,
  // //so to know which square it was clicked, it takes tha arguments rowIndex and colIndex,
  // //rowIndex gives which array it is initially selecte,
  // //colIndex gives which item is selected from the array that is selected from rowIndex,
  // function handleSelectSquare(rowIndex, colIndex) {
  //   // for updating the board we set this as setGameBoard,
  //   // initially it takes the prevGameBoard as an arguments
  //   setGameBoard((prevGameBoard) => {
  //       //when we r using arrays / objects we need to use spread operator(...),
  //       //if we don't use then ui will directly get updated
  //       //this spread operator makes a copy of the initialGameBoard,
  //       //& we stored in the const updatedBoard, so we'll update it through this const
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {/* initially we mapped initialGameBoard which contains three arrays , so it returns each 
        array at a tym that too 3 tyms because it contains 3 arrays */}
      {/* here now gameBoard initial value is initialGameBoard itself , so for state updating,
        we used gameBoard here directly */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* here we took that array that returned from the above mapping ,
            lets assume that array name as row, 
            now using this row we'll map , to get the items in this row array, 
            like this we'll extract all items from 3 arrays */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
