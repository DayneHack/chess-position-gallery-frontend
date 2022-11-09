import './App.css';
import React from 'react';

import {AppBar, Typography, Grid, Box} from '@material-ui/core';
//import pawn from './images/pawn.png';

import Pieces from './components/Pieces';
import Board from './components/Board';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	return(
		<React.Fragment>
			<AppBar className = {classes.heading} position='static' color='inherit'>
				<Typography variant='h2' align='center'>Chess Position Evaluator</Typography>
			</AppBar>
			<Grid container spacing={2} justifyContent='center'>
				<Box item xs={4}>
					<Pieces />
				</Box>
				<Box item xs={8}>
					<Board />
				</Box>
			</Grid>
		</React.Fragment>
			
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