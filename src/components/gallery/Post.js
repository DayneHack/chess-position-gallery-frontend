import './Post.css';
import moment from 'moment';

import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/posts';

import useStyles from './styles';

const Post = ({ post, setCurrId }) =>{

    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.submittor} image={post.image}></CardMedia>
            <div className='overlay'>
                <h1>{post.submittor}</h1>
                <b>{moment(post.createdAt).fromNow()}</b>
            </div>
            <div className={classes.overlay}>
                <button onClick={() => setCurrId(post._id)}>Update</button>
            </div>
            <CardContent>
                <p>{post.description}</p>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <button onClick={() => {}}>Like {post.likeCount}</button>
                <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            </CardActions>

        </Card>

    )
}

export default Post;