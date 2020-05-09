import React from 'react';
import './App.css';
import Quiz from "./Quiz";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import QuizResult from "./QuizResult";

function App() {
  return (
          <Router>
              <div className="App">
                  <header className="App-header">
              <Switch>
                  <Route exact={true} path={'/quiz_webapp_starter/'} component={Quiz}/>
                  <Route exact={true} path={'/result'} component={QuizResult}/>
              </Switch>
                  </header>
              </div>
          </Router>

  );
}

export default App;
