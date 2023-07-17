import React from 'react';
import { Avatar } from '@mui/material';

const Contacts = ({srcImg, name}) => {
    return (
        <div className='contacts__online'>
            <Avatar src={srcImg} className='note_avatar' />
            <p>{name}</p>
        </div>
    )
}

export default Contacts;
