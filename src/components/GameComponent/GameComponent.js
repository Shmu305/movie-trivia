import "./GameComponent.scss";

function GameComponent() {
    return(
        <section className="components">
            <img 
                src="https://placedog.net/500"
                className="components__image"
                alt = "game"
            />
            <section className="components__buttons">
                <div className="components__button">
                    <button className="components__buttons--option" type="submit">SOMETHING</button>
                    <button className="components__buttons--option" type="submit">SOMETHING</button>
                </div>
                <div className="components__button">
                    <button className="components__buttons--option" type="submit">SOMETHING</button>
                    <button className="components__buttons--option" type="submit">SOMETHING</button>
                </div>
            </section>
        </section>
    )
};

export default GameComponent;