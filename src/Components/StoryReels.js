import React from 'react';
import './StoryReels.css';
import Story from './Story';
import Bradd from '../Icons/bradd.jpg';
import Captain from '../Icons/captain.jpg';
import Chris from '../Icons/chris.jpg';
import Daniell from '../Icons/daniell.jpg';
import DrPoster from '../Icons/drPoster.jpg';
import Pitt from '../Icons/pitt.jpg';
import VenomPC from '../Icons/venomPC.jpg';
import VenomStory from '../Icons/venomStory.jpg';

const StoryReels = () => {
    return (
        <div className='storyReels'>
            {/* {StoryReels--> Img, Profilepic, Title} */}
            <Story
                image={Pitt}
                profileSrc={Bradd}
                title="Bradd Pitt"
            />

            <Story
                image={VenomStory}
                profileSrc={VenomPC}
                title="Tom Hardy"
            />

            <Story
                image={Captain}
                profileSrc={Chris}
                title="Chris Evans"
            />

            <Story
                image={DrPoster}
                profileSrc={Daniell}
                title="Danniel RadCliff"
            />
        </div>
    )
}

export default StoryReels;
