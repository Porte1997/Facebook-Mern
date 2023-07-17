import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import Logo32 from '../Icons/logo32.png';
// import Logo from '../Icons/logo.png';
import Logo64 from '../Icons/logo64.png';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={Logo64} alt='Facebook Logo' />
            </div>
            <div className='header__input'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type='text' placeholder='Search Facebook'/>
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active '>
                    <HomeIcon fontSize='large' />
                </div>
                
                <div className='header__option'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className="header__info">
                    <Avatar className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRhPGfVX5F_OuGIzqCEEV25Gchw8-T_29aKDzL-mC9TlVmEkkweTYZRCETp_FUVo9Sso&usqp=CAU' alt='Profile Photo'  />
                    <h4>Shubham Porte</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>    
               

            </div>
            
        </div>
    )
}

export default Header;
