import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage.js";
import StartPage from './pages/StartPage/StartPage';

function App() {
  return (
    <BrowserRouter>
      <section>
        <h1 className="logo">MOVIE TRIVIA</h1>
        <Switch>
          <Route path="/" exact component={StartPage}/>
          <Route path="/game" component={GamePage}/>
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
