import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar, Input } from '@mui/material';
import Tom from '../Icons/venomPC.jpg';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const MessageSender = () => {
    const [input, setInput] = useState("");
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = () => {

    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={Tom} />
                <form>
                    <input
                        type='text'
                        className='messageSender__input'
                        placeholder={`what's on your mind?`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                        type='file'
                        className='messageSender__files'
                        onChange={handleChange}
                    />

                    <button 
                        type='submit' 
                        onClick={handleSubmit} 
                        hidden
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender;