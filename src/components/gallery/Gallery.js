import React from 'react';
import Post from './Post';
import './Gallery.css';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

const Gallery = ({ setCurrId }) =>{

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
    <>
        <ul className='galleryTitle'>
				<div className='header-text' variant='h1' align='center'>Gallery</div>
			</ul>
    

        <Grid container spacing={4}
        >
            {posts.map((post) => (
                <Grid item xs={3} sm={6} md={4}>
                    <Post key={post.id} post={post} setCurrId={setCurrId}></Post>
                </Grid>
            ))};
        </Grid>
    </>
    )
}

export default Gallery;