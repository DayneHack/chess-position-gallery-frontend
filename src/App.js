import './App.css';
import React, { useEffect } from 'react';

import {Grid, Box} from '@material-ui/core';
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
		</>
			
  	);
}

export default App;

/*
		<Container maxwidth='lg'>
			<AppBar className = {classes.heading} position='static' color='inherit'>
				<Typography variant='h2' align='center'>Chess Position Evaluator</Typography>
				<img className={classes.image} src={pawn} alt='pawn' height='80' />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify='space-between' alignItems='stretch' spacing={3}>
						<Grid item xs={12} sm={7}>
							<Pieces />
						</Grid>
						<Grid className={classes.board} item xs={12} sm={5}>
							<Board />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
*/
//<img className={classes.image} src={pawn} alt='pawn' height='80' />