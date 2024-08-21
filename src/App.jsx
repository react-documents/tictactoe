import { useState } from "react";
import Square from "./components/Square";

const App = () => {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  const [isValueSquareX, setIsValueSquareX] = useState(false);
  const [tictactoeStatus, setTictactoeStatus] = useState('');
  const [winnerState, setWinnerState] = useState(null);

  const determineTicTacToeEnd = (squareArray) => {
    const numbersOfCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < numbersOfCases.length; i++) {
      const [a, b, c] = numbersOfCases[i];
      
      if (squareArray[a] && squareArray[a] === squareArray[b] && squareArray[a] === squareArray[c]) {
        return squareArray[a];
      }
    } // forEach: 콜백함수 실행중 return 문이 있더라도 전체 함수를 돌기 때문에 원하는 시점에 함수 실행 중지 x, 따라서 원하는 결과값이 안나올 수 있음.

    return null;
  }

  const onClickSquare = (squareIndex) => {
    const copySquare = [...squareValue];
    if(winnerState || copySquare[squareIndex]) return;

    copySquare[squareIndex] = isValueSquareX ? 'X' : 'O';
    setSquareValue(copySquare);
    setIsValueSquareX(!isValueSquareX);

    let winner = determineTicTacToeEnd(copySquare);

    if (winner) {
      setTictactoeStatus('Winner: ' + winner);
      setWinnerState(true);
    } else {
      setTictactoeStatus('Next player: ' + (isValueSquareX ? 'O' : 'X'));
    }
  }
  
  return (
    <div className="m-5">
      {tictactoeStatus}
      <tr className="flex">
        <Square value={squareValue[0]} onClickSquare={() => onClickSquare(0)} />
        <Square value={squareValue[1]} onClickSquare={() => onClickSquare(1)} />
        <Square value={squareValue[2]} onClickSquare={() => onClickSquare(2)} />
      </tr>
      <tr className="flex">
        <Square value={squareValue[3]} onClickSquare={() => onClickSquare(3)} />
        <Square value={squareValue[4]} onClickSquare={() => onClickSquare(4)} />
        <Square value={squareValue[5]} onClickSquare={() => onClickSquare(5)} />
      </tr>
      <tr className="flex">
        <Square value={squareValue[6]} onClickSquare={() => onClickSquare(6)} />
        <Square value={squareValue[7]} onClickSquare={() => onClickSquare(7)} />
        <Square value={squareValue[8]} onClickSquare={() => onClickSquare(8)} />
      </tr>
    </div>
  );
};

export default App;
