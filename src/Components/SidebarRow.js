import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';

const SidebarRow = ({Icon, title, src}) => {
    return (
        <div className='sidebarRow'>
            { src && <Avatar src={src}/> }
            { Icon && <Icon /> }

            <p>{title}</p>
        </div>
    )
}

export default SidebarRow;
