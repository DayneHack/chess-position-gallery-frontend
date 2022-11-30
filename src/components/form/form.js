import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'
import domtoimage from 'dom-to-image';
//import saveAs from 'file-saver';

import './form.css';

const Form = ({ currId, setCurrId}) => {

    const post = useSelector((state) => currId ? state.posts.find((p) => p._id === currId) : null);

    const [postData, setPostData] = useState({
        submittor: '', description: '', image: ''
    })
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(currId){
            dispatch(updatePost(currId, postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();
    }

	const blobToBase64 = async (blob) => {
        return new Promise((resolve, _) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      }

    const saveImg = () => {
    	domtoimage.toBlob(document.getElementById('main'))
        //domtoimage.toBlob(document.getElementsByClassName('board'))
    		.then(async function(blob) {
		await blobToBase64(blob)
        	.then(base64String => setPostData({...postData, image: base64String}));
    });
    }

    const clear = () => {
        setCurrId(null);
        setPostData({submittor: '', description: '', image: ''});
    }
    
    return(
        
        <div className='form'>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <h1>{currId ? 'Edit' : 'Submit'} Position </h1>
                    <label className='label' htmlFor='submittorName'>Your Name</label>
                    <input name='submittor name' id='submittorName' type='text' variant='outlined' placeholder='Your name...' value={postData.submittor} onChange={(event) => setPostData({...postData, submittor: event.target.value})}/>
                    <label className='label' htmlFor='description'>Description</label>
                    <input name='description' id='description' type='text' variant='outlined' placeholder='Description...' value={postData.description} onChange={(event) => setPostData({...postData, description: event.target.value})}/>
                    <button type='submit' className='button' onClick={saveImg}>Submit</button>
                    <button type='submit' className='button' onClick={clear}>Clear</button>
            </form>
        </div>
    )
}

export default Form;