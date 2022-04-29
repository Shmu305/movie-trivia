import "./GameComponent.scss";

function GameComponent() {
    return(
        <section className="components">
            <img 
                src="https://placedog.net/500"
                className="components__image"
            />
            <section className="components__buttons">
                <div className="components__button">
                    <button type="submit">SOMETHING</button>
                    <button type="submit">SOMETHING</button>
                </div>
                <div className="components__button">
                    <button type="submit">SOMETHING</button>
                    <button type="submit">SOMETHING</button>
                </div>
            </section>
        </section>
    )
};

export default GameComponent;