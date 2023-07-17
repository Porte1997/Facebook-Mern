import React from 'react';
import './Posts.css';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';

const Posts = ({ username, imgName, profilePic, message, timestamp }) => {
    return (
        <div className='posts'>
            <div className='posts__top'>
                <Avatar 
                    src={profilePic}
                    className='posts__avatar'
                />
                <div className='posts__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                    
                </div>
            </div>

            <div className='posts__bottom'>
                <p>{message}</p>
                <img 
                    src={imgName}
                    alt="User Posts"
                />
            </div>

            <div className='posts__options'>
                <div className='posts__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='posts__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='posts__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='posts__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Posts;