import React from 'react';
import './Widgets.css';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Bradd from '../Icons/bradd.jpg';
import Chris from '../Icons/chris.jpg';
import Daniell from '../Icons/daniell.jpg';
import VenomPC from '../Icons/venomPC.jpg';
import Contacts from '../Components/Contacts';

const Widgets = () => {
    
    return (
        <div className='widgets'>
            <div className='notifications'>
                <div className='note__header'>
                    <CircleNotificationsOutlinedIcon className='icons' />
                    <h3>Notifications</h3>
                </div>
                
                <div className='note__list'>
                    {/* {Notification Lists} */}
                    <p>John is Live Now.</p>
                    <p>Steve Likes Your Picture.</p>
                    <p>Today it is Diwali, say happy Diwali to everyone.</p>
                    <p>Happy Birthday MS Dhani.</p>
                    <p>David accepted your friend request.</p>
                </div>
            </div>
            <hr />
            <div className='contacts'>
                <div className='contacts__head'>
                    <h3>Contacts</h3>
                    <div className='search__input'>
                        <SearchOutlinedIcon className='icons' />
                        <input
                            type='text'
                            className='contacts__input'
                            placeholder='Search Your Friends'
                        />
                    </div>
                </div>
        
                <Contacts 
                    name='Bradd Pitt'
                    srcImg={Bradd}
                />
                <Contacts 
                    name='Danielle Radcliff'
                    srcImg={Daniell}
                />
                <Contacts 
                    name='Chris Evans'
                    srcImg={Chris}
                />
                <Contacts 
                    name='Tom Hardy'
                    srcImg={VenomPC}
                />
            </div>
        </div>
    )
}

export default Widgets;
