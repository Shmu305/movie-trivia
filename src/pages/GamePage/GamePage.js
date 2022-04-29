import './GamePage.scss';
import React from 'react';
import GameComponent from "../../components/GameComponent/GameComponent";

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