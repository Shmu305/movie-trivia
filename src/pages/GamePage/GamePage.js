import './GamePage.scss';
import React from 'react';
import GameComponent from '../../components/GameComponent/GameComponent';

class GamePage extends React.Component {
    render() {
        return(
            <section className="main">
                <GameComponent />
            </section>
        )
    }
};

export default GamePage;