import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts'
import domtoimage from 'dom-to-image';
//import saveAs from 'file-saver';

import './form.css';

const Form = () => {

    const [postData, setPostData] = useState({
        submittor: '', description: '', image: ''
    })
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
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
    		.then(async function(blob) {
		await blobToBase64(blob)
        	.then(base64String => setPostData({...postData, image: base64String}));
    });
    }
    
    return(
        
        <div className='form'>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <h1>Submit Position</h1>
                    <label className='label' htmlFor='submittorName'>Your Name</label>
                    <input name='submittor name' id='submittorName' type='text' variant='outlined' placeholder='Your name...' value={postData.submittor} onChange={(event) => setPostData({...postData, submittor: event.target.value})}/>
                    <label className='label' htmlFor='description'>Description</label>
                    <input name='description' id='description' type='text' variant='outlined' placeholder='Description...' value={postData.description} onChange={(event) => setPostData({...postData, description: event.target.value})}/>
                    <button type='submit' className='button' onClick={saveImg}>Submit</button>
            </form>
        </div>
    )
}

export default Form;