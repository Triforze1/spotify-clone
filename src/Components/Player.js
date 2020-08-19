import React from 'react';
import '../css/Player.css';
import Sidebar from '../Components/Sidebar';
import Body from '../Components/Body'
import Footer from '../Components/Footer';



function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player-body">
                <Sidebar/>
                <Body spotify={ spotify }/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Player
