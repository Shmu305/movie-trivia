import './GamePage.css';
import React from 'react';
import GameComponent from "../../GameComponent/GameComponent.js";
import movieBackground from "../../assets/images/istockphoto-1180840343-612x612.jpg";


class GamePage extends React.Component {
    render() {
        return(
            <section className='main'>
                <h2 className="main__heading">What year was this movie released?</h2>
                <GameComponent />
            </section>
        )
    }
};

export default GamePage;