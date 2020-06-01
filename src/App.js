import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import Portada from './components/Portada'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <div>
      
      <Router>
        <Navigation></Navigation>
        <div className="container p-4">
          <Route path="/" exact component={Portada}></Route>
          <Route path="/pokemon/:id" component={Pokemon}></Route>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
