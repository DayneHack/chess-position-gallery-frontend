import './Post.css';
import moment from 'moment';

import { Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

import useStyles from './styles';

const Post = ({ post }) =>{

    const classes = useStyles();

    return(
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.submittor} image={post.image}></CardMedia>
            <div className='overlay'>
                <h1>{post.submittor}</h1>
                <b>{moment(post.createdAt).fromNow()}</b>
            </div>
            <div className={classes.overlay}>
                <button onClick={() => {}}>...</button>
            </div>
            <CardContent>
                <p>{post.description}</p>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <button onClick={() => {}}>Like {post.likeCount}</button>
                <button onClick={() => {}}>Delete</button>
            </CardActions>

        </Card>

    )
}

export default Post;