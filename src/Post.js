import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InputOption from './InputOption';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({name,description, message,photourl}) {
    return (
        <div className = "post">
            
            <div className = "post_header">
            <Avatar />
            <div className = "post_info">
                <h2>{name} </h2>
                <p>{description}</p>
                </div>
                </div>
                <div className = "post_body">
                    <p>{message}</p>
                    </div>
                    <div className = "post_button">
                        <InputOption Icon = { ThumbUpIcon} title = "Like" color= "gray"/>
                        <InputOption Icon = {  CommentIcon} title = "comment" color= "gray"/>
                        <InputOption Icon = { ShareIcon} title = "share" color= "gray"/>
                        <InputOption Icon = { SendIcon} title = "send" color= "gray"/>
                        </div>
        </div>
    )
}

export default Post;
