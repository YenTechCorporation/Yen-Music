import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Body from './Components/Body';
function App() {
  return (
    <div className="app">
      
      <Router>
        <Header/>
        <Switch>
          <Route component={Body}  path="/home" exact />
          <Route component={Banner} path="/discovery" />
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;