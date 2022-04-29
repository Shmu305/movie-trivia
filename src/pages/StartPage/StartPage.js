import "./StartPage.scss";

function StartPage(props) {

    const handleGameStart = (e) => {
        props.history.push("/game");
    };

    return(
        <section className="start">
            <button onClick={handleGameStart} className="start__button">START GAME</button>
        </section>
    )
};

export default StartPage;