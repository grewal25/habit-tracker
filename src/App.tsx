import React from 'react';
import Timer from './components/Timer/Timer'
import './App.css';
//import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todos from './components/Todos/Todos';
import GymHome from './components/Gym/GymHome';
import Monday from './components/Gym/Weeks/Monday';
import Home from './components/Home/Home';

const App:React.FC =()=> {
  return (
   <>

<BrowserRouter>
  <Switch>
  <Route  path="/home">
        <Home />
      </Route>
      <Route  path="/timer">
        <Timer />
      </Route>
      <Route  path="/todos">
        <Todos />
      </Route>
      <Route  path="/gym">
        <GymHome />
      </Route>
      <Route  path="/monday">
        <Monday />
      </Route>
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
