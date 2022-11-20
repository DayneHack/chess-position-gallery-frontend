import React from 'react';
import Post from './Post';
import './Gallery.css';
import { useSelector } from 'react-redux';

const Gallery = () =>{

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return(
        <div className='gallery'>
            {posts.map((post) => (
                <Post key={post.id} post={post}></Post>
            ))};
        </div>
    )
}

export default Gallery;