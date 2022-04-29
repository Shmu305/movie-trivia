import "./GameComponent.scss";

function GameComponent(props) {
    console.log(props.currentMovie.original_title)

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
    }
    
    const handleCorrectAnswer = (e) => {
        let clickedAnswer = e.target.innerHTML;
        if(clickedAnswer == props.currentMovie.release_date) {
            props.scoreIncrease();
        } else {
            props.indexIncrease();
        }

    }

    return(
        <section className="components">
            <h2 className="components__title">{props.currentMovie.original_title}</h2>
            <img 
                src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.backdrop_path}`}
                className="components__image"
                alt = "game"
            />
            <section className="components__buttons">
                <div className="components__button">
                    <button className="components__buttons--option" type="submit" onClick={handleCorrectAnswer}>{randomDate(new Date(2018, 0, 1), new Date())}</button>
                    <button className="components__buttons--option" type="submit" onClick={handleCorrectAnswer}>{props.currentMovie.release_date}</button>
                </div>
                <div className="components__button">
                    <button className="components__buttons--option" type="submit" onClick={handleCorrectAnswer}>{randomDate(new Date(2018, 0, 1), new Date())}</button>
                    <button className="components__buttons--option" type="submit" onClick={handleCorrectAnswer}>{randomDate(new Date(2016, 0, 1), new Date())}</button>
                </div>
            </section>
        </section>
    )
};

export default GameComponent;