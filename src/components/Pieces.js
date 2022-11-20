import { useRef } from 'react';
import { useState } from 'react';
import './Pieces.css';

const horizAxis = ['a', 'b'];
const vertAxis = [1, 2, 3, 4, 5, 6];

const Pieces = () => {

    const populatePieces = () => {

        let pieces = [];
        let flag = true;
        const sourceArrayW = ['images/w_rook.png', 'images/w_knight.png', 'images/w_bishop.png', 'images/w_queen.png', 'images/w_king.png', 'images/w_pawn.png'];
        const sourceArrayB = ['images/b_rook.png', 'images/b_knight.png', 'images/b_bishop.png', 'images/b_queen.png', 'images/b_king.png', 'images/b_pawn.png'];
            
            for (let j = vertAxis.length-1; j>=0; j--){
                let imgSrcW = sourceArrayW[j];
                let imgSrcB = sourceArrayB[j];
                for (let i = 0; i<horizAxis.length; i++){
                    if(flag){
                        pieces.push(<div key={`${j},${i}`} className='tile darkTile'>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcW})`}} className='pieceImage'></div>
                        </div>);
                        flag = false;
                    }
                    else{
                        pieces.push(<div key={`${j},${i}`} className='tile lightTile'>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                            <div style={{backgroundImage: `url(${imgSrcB})`}} className='pieceImage'></div>
                        </div>);
                        flag = true;
    
                    }
                }
            }
            return pieces;
        }

    let pieces = populatePieces();
    const [activePiece, setActivePiece] = useState(null);
    //const [gridX, setGridX] = useState(0);
    //const [gridY, setGridY] = useState(0);
    const chessboardRef = useRef(null);

    const grabPiece = (event) => {

        event.stopPropagation();
        const element = event.target;
        const chessboard = chessboardRef.current;

        if(element.className.includes('pieceImage') && chessboard){
            //const gridX = Math.floor((event.clientX - chessboard.offsetLeft - 200) / 100); //snapping maybe
            //const gridY = Math.abs(Math.ceil((event.clientY - chessboard.offsetTop - 800) / 100));
            //setGridX(gridX);
            //setGridY(gridY);
            const x = event.clientX - 50;
            const y = event.clientY - 50;
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            setActivePiece(element);
        }
    }

    const movePiece = (event) => {

        if(activePiece){
            const x = event.clientX - 50;
            const y = event.clientY - 50;
            activePiece.style.position = 'absolute';
            activePiece.style.left = `${x}px`;
            activePiece.style.top = `${y}px`;
        }
        
    }

    const dropPiece = (event) => {

        const chessboard = chessboardRef.current;

        if(activePiece && chessboard){
            //const x = Math.floor((event.clientX - chessboard.offsetLeft - 200) / 100);
            //const y = Math.abs(Math.ceil((event.clientY - chessboard.offsetTop - 800) / 100));

            //console.log(x,y);
/*
            setPieces((value) => {
                const pieces = value.map((p) => {
                    if(p.x === 1 && p.y === 0){
                        p.x = x;
                        p.y = y;
                    }
                    return p;
                });
                return pieces
            });
*/

            setActivePiece(null);
        }
    }

    const mouseDownFuncs = (e) => {
        grabPiece(e);
        pieces = populatePieces();
    }
    
    return(
        <div 
        onMouseMove={e => movePiece(e)} 
        onMouseDown={e => mouseDownFuncs(e)}
        onMouseUp={e => dropPiece(e)}
        id='pieces'
        ref={chessboardRef}
        > {pieces}</div>
    )

}

export default Pieces;