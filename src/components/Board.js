import React from 'react';
import './Board.css'
//import {Chess} from 'chess.js';

const horizAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertAxis = [1, 2, 3, 4, 5, 6, 7, 8]

const Board = () => {

	let flag = true;
	let board = [];
	
	for (let j = vertAxis.length-1; j>=0; j--){
		for (let i = 0; i<horizAxis.length; i++){
			if(flag){
				board.push(<div key={`${j},${i}`} className='tile lightTile'></div>);
				if(horizAxis[i] !== 'h'){
					flag = false;
				}
			}
			else{
				board.push(<div key={`${j},${i}`} className='tile darkTile'></div>);
				if(horizAxis[i] !== 'h'){
					flag = true;
				}
			}
		}
	}

	return(
        <div 
        id='board'
        > {board}</div>
    )

}




/*
const Board = () => {
	const [game, setGame] = useState(new Chess());

    const makeMove = (move) => {
		const gameCopy = {...game};
		gameCopy.move(move);
		setGame(gameCopy);
		return;
    }

	const onDrop = (startSquare, endSquare) => {
		console.log('ok')
		makeMove({
			from: startSquare,
			to: endSquare,
		});
		console.log('?')
		return;
	}


  return <Chessboard position={game.fen()} onPieceDrop={onDrop} />;

}
*/
export default Board;
