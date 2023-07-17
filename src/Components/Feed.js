import React from 'react';
import "./Feed.css";
import StoryReels from "./StoryReels";
import MessageSender from "./MessageSender";
import Posts from './Posts';
import Chris from '../Icons/chris.jpg';

const Feed = ({ postsData }) => {
    return (
        <div className='feed'>
            <StoryReels />
            
            <MessageSender />
            <Posts 
                profilePic={Chris}
                message='The First Avenger'
                timestamp='1601493943737'
                imgName='Captain America'
                username='Chris Evans'
            />

            {/* {postsData.map(entry => {
                return <Posts 
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            })} */}
        </div>
    )
}

export default Feed;
