import React from 'react';
import Post from './Post';
import './Gallery.css';
import { useSelector } from 'react-redux';

const Gallery = () =>{

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
        <>
        <h1>Gallery</h1>

        <Post />
        <Post />
        </>
    )
}

export default Gallery;