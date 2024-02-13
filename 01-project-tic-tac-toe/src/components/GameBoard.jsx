//an array which consists of three arrays, in which each each of the array contains 3 items

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
        {/* initially we mapped initialGameBoard which contains three arrays , so it returns each 
        array at a tym that too 3 tyms because it contains 3 arrays */}
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* here we took that array that returned from the above mapping ,
            lets assume that array name as row, 
            now using this row we'll map , to get the items in this row array, 
            like this we'll extract all items from 3 arrays */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
