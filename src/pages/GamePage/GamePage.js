import './GamePage.scss';
import React from 'react';
import GameComponent from "../../components/GameComponent/GameComponent";
import axios from 'axios';

class GamePage extends React.Component {
    state = {
        movieResults: null,
        currentMovieQuestion: null,
        score: 0,
        index: 1
    }
    componentDidMount(){
        axios
          .get("https://api.themoviedb.org/3/movie/popular?api_key=4f5a995b5437bb04069689b2784c098c")
          .then((response) => {
            const movieResults = response.data.results;
            let filteredResults = []
            for(let i = 0; i<10; i++){
                filteredResults.push(movieResults[i])
            }
            console.log('filtered res',filteredResults);
            this.setState({movieResults: movieResults});
            //set the default movie for trivia page
            //let curIndex = 0;
            let currentId = filteredResults[0].id;
            return currentId;
          })
          .then((movieId) => {
            this.fetchMovieDetails(movieId);
          })
      }

      fetchMovieDetails = (movieId) => {
        axios
          .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4f5a995b5437bb04069689b2784c098c`)
          .then((response) => {
            const movieData = response.data;
            console.log('movie data',movieData)
            this.setState({currentMovieQuestion: movieData});
          })
      }

      increaseScore = () => {
        //console.log(this.state.score);
        console.log(this.state.index);
        this.setState({
          score: this.state.score + 1,
          index: this.state.index + 1
        });
      } 
      indexIncrease = () => {
        this.setState({
            //score: this.state.score + 1,
            index: this.state.index + 1
          });

      }

      componentDidUpdate(_prevProps, prevState) {
        if(prevState.index !== this.state.index){
            this.fetchMovieDetails(this.state.index);
        } 
      }

    render() {
        return(
            
            <section className='main'>
                {this.state.movieResults && this.state.currentMovieQuestion ? 
                <>
                    <h2 className="main__heading">What year was this movie released?</h2>
                    <h2 className="main__score">{`Score: ${this.state.score}`}</h2>
                    <GameComponent 
                      currentMovie={this.state.currentMovieQuestion}
                      score={this.state.score}
                      scoreIncrease={this.increaseScore}
                      indexIncrease={this.indexIncrease}
                    />
                </>
                 : <p >Loading Content</p>}
            </section>
            
        )
    }
};

export default GamePage;