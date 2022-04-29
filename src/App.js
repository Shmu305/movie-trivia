import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage.js";

function App() {
  return (
    <section>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={GamePage}/>
          </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
