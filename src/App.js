import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import logo from './logo.svg';  
import Home from './routes/home/home.jsx';
import User from './routes/user/user.jsx'
import './App.css';
import CityLayer from './routes/home/components/cityLayer.jsx'
import Detail from './routes/detail/detail.jsx'
import Seat from './routes/seat/seat.jsx';



class App extends Component {   
  
  render() {
    
    return (
      
      <BrowserRouter>
        <Switch>
          {/* <Route path ="/cityLayer" component={CityLayer}/> */}
          <Route path = '/user' component={User}></Route>
          <Route path = '/detail' component={Detail}></Route>
          <Route path = '/seat' component={Seat}></Route>
          <Route path ="/" component={Home}/>
        </Switch>
      </BrowserRouter>
     
    );
  }
}

export default App;
