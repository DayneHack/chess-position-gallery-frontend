import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts'

import './form.css';


const Form = () => {

    const [postData, setPostData] = useState({
        submittor: '', description: ''
    })
    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));
    }
    
    return(
        
        <div className='form'>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <h1>Submit Position</h1>
                    <label className='label' for='submittorName'>Your Name</label>
                    <input name='submittor name' id='submittorName' type='text' variant='outlined' placeholder='Your name...' fullwidth value={postData.submittor} onChange={(event) => setPostData({...postData, submittor: event.target.value})}/>
                    <label className='label' for='description'>Description</label>
                    <input name='description' id='description' type='text' variant='outlined' placeholder='Description...' fullwidth value={postData.description} onChange={(event) => setPostData({...postData, description: event.target.value})}/>
                    <button type='submit' className='button'>Submit</button>
            </form>
        </div>
    )
}

export default Form;