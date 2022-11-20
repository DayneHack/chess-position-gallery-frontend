import './App.css';
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

import Pieces from './components/Pieces';
import Board from './components/Board';
import Gallery from './components/gallery/Gallery'
import Form from './components/form/form';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return(
		<>
			<ul className='header'>
				<div className='header-text' variant='h1' align='center'>Chess Position Gallery</div>
			</ul>
			<div className='main' id='main'>
				<div className='main' id='piecesAndBoard'>
					<Pieces />

					<Board />
				</div>

				<Form />

			</div>
			<Gallery />
		</>
			
  	);
}

export default App;

/*
		<ul className='header'>
				<div className='header-text' variant='h1' align='center'>Chess Position Gallery</div>
			</ul>
			<Grid container spacing={2} justifyContent='center'>
				<Box item md={2}>
					<Pieces />
				</Box>
				<Box item md={8}>
					<Board />
				</Box>
				<Box item md={2}>
					<Form />
				</Box>
			</Grid>
			<Gallery className='gallery'/>
*/
//<img className={classes.image} src={pawn} alt='pawn' height='80' />